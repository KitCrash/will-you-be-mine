import express from 'express';
import cors from 'cors';
import multer from 'multer';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 5000;

// Data directory & Database initialization
const dataDir = path.join(__dirname, 'data');
const uploadsDir = path.join(dataDir, 'uploads');
const dbPath = path.join(dataDir, 'database.json');

if (!fs.existsSync(dataDir)) {
  fs.mkdirSync(dataDir, { recursive: true });
}
if (!fs.existsSync(uploadsDir)) {
  fs.mkdirSync(uploadsDir, { recursive: true });
}

// Database helper functions
function readDb() {
  try {
    if (fs.existsSync(dbPath)) {
      const data = fs.readFileSync(dbPath, 'utf-8');
      return JSON.parse(data);
    }
  } catch (err) {
    console.error('Error reading DB:', err);
  }
  // Default clean slate: no pre-added photos or memories
  return { photos: [], moments: [] };
}

function writeDb(data) {
  try {
    fs.writeFileSync(dbPath, JSON.stringify(data, null, 2), 'utf-8');
  } catch (err) {
    console.error('Error writing DB:', err);
  }
}

// Multer storage setup for photo uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, uploadsDir);
  },
  filename: (req, file, cb) => {
    const ext = path.extname(file.originalname) || '.jpg';
    const uniqueName = 'moment-' + Date.now() + '-' + Math.round(Math.random() * 1e6) + ext;
    cb(null, uniqueName);
  }
});

const upload = multer({
  storage,
  limits: { fileSize: 15 * 1024 * 1024 } // 15MB limit
});

// Middleware
app.use(cors());
app.use(express.json({ limit: '20mb' }));
app.use(express.urlencoded({ extended: true, limit: '20mb' }));

// Serve uploaded user photos and public assets
app.use('/uploads', express.static(uploadsDir));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'dist')));

// ==========================================
// API ROUTES
// ==========================================

// 1. Health check
app.get('/api/status', (req, res) => {
  res.json({ status: 'ok', time: new Date().toISOString() });
});

// 2. Get all photos and moments
app.get('/api/data', (req, res) => {
  const db = readDb();
  res.json(db);
});

// 3. Upload a new photo
app.post('/api/photos', upload.single('photo'), (req, res) => {
  if (!req.file) {
    return res.status(400).json({ error: 'No photo uploaded' });
  }

  const caption = req.body.caption || 'A special moment with you ❤️';
  const newPhoto = {
    id: 'photo-' + Date.now(),
    filename: req.file.filename,
    url: '/uploads/' + req.file.filename,
    caption: caption,
    createdAt: new Date().toISOString()
  };

  const db = readDb();
  db.photos.unshift(newPhoto);
  writeDb(db);

  res.status(201).json(newPhoto);
});

// 4. Update photo caption
app.patch('/api/photos/:id', (req, res) => {
  const { id } = req.params;
  const { caption } = req.body;

  const db = readDb();
  const photo = db.photos.find((p) => p.id === id);
  if (!photo) {
    return res.status(404).json({ error: 'Photo not found' });
  }

  photo.caption = caption;
  writeDb(db);
  res.json(photo);
});

// 5. Delete a photo
app.delete('/api/photos/:id', (req, res) => {
  const { id } = req.params;
  const db = readDb();
  const photoIndex = db.photos.findIndex((p) => p.id === id);

  if (photoIndex === -1) {
    return res.status(404).json({ error: 'Photo not found' });
  }

  const [removed] = db.photos.splice(photoIndex, 1);
  writeDb(db);

  // Remove file from disk
  if (removed && removed.filename) {
    const filePath = path.join(uploadsDir, removed.filename);
    if (fs.existsSync(filePath)) {
      try {
        fs.unlinkSync(filePath);
      } catch (e) {
        console.warn('Could not delete file:', e);
      }
    }
  }

  res.json({ success: true, removedId: id });
});

// 6. Add a moment
app.post('/api/moments', (req, res) => {
  const { text } = req.body;
  if (!text || !text.trim()) {
    return res.status(400).json({ error: 'Text cannot be empty' });
  }

  const newMoment = {
    id: Date.now(),
    text: text.trim(),
    done: false,
    createdAt: new Date().toISOString()
  };

  const db = readDb();
  db.moments.push(newMoment);
  writeDb(db);

  res.status(201).json(newMoment);
});

// 7. Toggle / update a moment
app.patch('/api/moments/:id', (req, res) => {
  const id = parseInt(req.params.id, 10);
  const { done, text } = req.body;

  const db = readDb();
  const moment = db.moments.find((m) => m.id === id);
  if (!moment) {
    return res.status(404).json({ error: 'Moment not found' });
  }

  if (typeof done !== 'undefined') moment.done = done;
  if (typeof text !== 'undefined') moment.text = text.trim();

  writeDb(db);
  res.json(moment);
});

// 8. Delete a moment
app.delete('/api/moments/:id', (req, res) => {
  const id = parseInt(req.params.id, 10);
  const db = readDb();
  const initialLength = db.moments.length;
  db.moments = db.moments.filter((m) => m.id !== id);

  if (db.moments.length === initialLength) {
    return res.status(404).json({ error: 'Moment not found' });
  }

  writeDb(db);
  res.json({ success: true, deletedId: id });
});

// Fallback to React app index.html
app.use((req, res) => {
  const indexPath = path.join(__dirname, 'dist', 'index.html');
  if (fs.existsSync(indexPath)) {
    res.sendFile(indexPath);
  } else {
    res.send('Building frontend... please refresh in a moment.');
  }
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`💖 Romantic Proposal Backend is running on port ${PORT}`);
  console.log(`👉 Local: http://localhost:${PORT}`);
});
