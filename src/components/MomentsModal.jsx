import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CONFIG } from '../config';
import { soundFx } from '../utils/audioSynthesizer';
import { spawnFloatingHeart } from '../utils/celebrationEffects';
import {
  fetchMomentsAndPhotos,
  apiUploadPhoto,
  apiUpdatePhotoCaption,
  apiDeletePhoto,
  apiAddMoment,
  apiToggleMoment,
  apiDeleteMoment
} from '../utils/api';

export default function MomentsModal({ isOpen, onClose, onBackToLetter }) {
  const fileInputRef = useRef(null);

  // Clean empty initial states: NO pre-added photos, NO pre-added memories
  const [photos, setPhotos] = useState([]);
  const [moments, setMoments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isUploading, setIsUploading] = useState(false);
  const [newMomentText, setNewMomentText] = useState('');

  // Fetch from backend API on mount
  useEffect(() => {
    let isMounted = true;
    async function loadData() {
      try {
        const data = await fetchMomentsAndPhotos();
        if (isMounted) {
          setPhotos(data.photos || []);
          setMoments(data.moments || []);
          setLoading(false);
        }
      } catch (err) {
        console.warn(err);
        if (isMounted) setLoading(false);
      }
    }

    if (isOpen) {
      loadData();
    }

    return () => {
      isMounted = false;
    };
  }, [isOpen]);

  if (!isOpen) return null;

  // Handle Photo Upload
  const handlePhotoUpload = async (e) => {
    const files = Array.from(e.target.files);
    if (!files.length) return;

    soundFx.playPop(580);
    setIsUploading(true);

    for (const file of files) {
      try {
        const uploaded = await apiUploadPhoto(file, 'A special moment with you ❤️');
        if (uploaded) {
          setPhotos((prev) => [uploaded, ...prev]);
        }
      } catch (err) {
        console.error(err);
      }
    }

    setIsUploading(false);
    e.target.value = null;
  };

  // Delete Photo
  const handleDeletePhoto = async (id) => {
    soundFx.playPop(420);
    setPhotos((prev) => prev.filter((p) => p.id !== id));
    await apiDeletePhoto(id);
  };

  // Update Caption
  const handleCaptionChange = async (id, newCaption) => {
    setPhotos((prev) =>
      prev.map((p) => (p.id === id ? { ...p, caption: newCaption } : p))
    );
    await apiUpdatePhotoCaption(id, newCaption);
  };

  // Toggle Moment Checkbox
  const handleToggleMoment = async (id, currentDone, e) => {
    soundFx.playPop(620);
    const rect = e.currentTarget.getBoundingClientRect();
    spawnFloatingHeart(rect.left + 20, rect.top, '💖');

    const newDone = !currentDone;
    setMoments((prev) =>
      prev.map((m) => (m.id === id ? { ...m, done: newDone } : m))
    );
    await apiToggleMoment(id, newDone);
  };

  // Delete Moment
  const handleDeleteMoment = async (id) => {
    soundFx.playPop(400);
    setMoments((prev) => prev.filter((m) => m.id !== id));
    await apiDeleteMoment(id);
  };

  // Add New Moment
  const handleAddMoment = async (e) => {
    e.preventDefault();
    if (!newMomentText.trim()) return;

    soundFx.playPop(680);
    const textToAdd = newMomentText.trim();
    setNewMomentText('');

    const savedMoment = await apiAddMoment(textToAdd);
    if (savedMoment) {
      setMoments((prev) => [...prev, savedMoment]);
    }
  };

  return (
    <AnimatePresence>
      <div className="moments-modal" role="dialog" aria-modal="true" aria-labelledby="moments-heading">
        {/* Backdrop */}
        <motion.div
          className="modal-backdrop"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        />

        {/* Modal Container */}
        <motion.div
          className="moments-card-container"
          initial={{ scale: 0.88, opacity: 0, y: 30 }}
          animate={{
            scale: 1,
            opacity: 1,
            y: 0,
            transition: { type: 'spring', stiffness: 360, damping: 26 }
          }}
          exit={{ scale: 0.88, opacity: 0, y: 25 }}
        >
          <div className="moments-paper">
            {/* Corner Close Button */}
            <button
              className="close-modal-btn"
              onClick={onClose}
              aria-label="Close popup"
            >
              ✕
            </button>

            {/* Header */}
            <div className="moments-header">
              <span className="moments-badge">Our Journey & Dreams 🌸</span>
              <h2 id="moments-heading" className="moments-title">
                {CONFIG.momentsData.title}
              </h2>
              <p className="moments-subtitle">{CONFIG.momentsData.subtitle}</p>
            </div>

            {/* SECTION 1: PHOTO GALLERY */}
            <div className="moments-section">
              <div className="section-header-row">
                <h3 className="section-title">
                  <span>📸</span> Our Photos
                </h3>
                {/* Upload Trigger */}
                <button
                  type="button"
                  className="btn-upload-photo"
                  onClick={() => fileInputRef.current?.click()}
                  disabled={isUploading}
                >
                  <span>{isUploading ? 'Uploading...' : '+ Add Photo'}</span>
                </button>
                <input
                  ref={fileInputRef}
                  type="file"
                  accept="image/*"
                  multiple
                  style={{ display: 'none' }}
                  onChange={handlePhotoUpload}
                />
              </div>

              {/* Photo Polaroids Grid */}
              <div className="photos-grid">
                {photos.length === 0 ? (
                  <div className="no-photos-hint" onClick={() => fileInputRef.current?.click()}>
                    <span style={{ fontSize: '2rem', display: 'block', marginBottom: '8px' }}>📷</span>
                    <p style={{ fontWeight: '700', fontSize: '1rem', marginBottom: '4px' }}>
                      No photos added yet
                    </p>
                    <p style={{ fontSize: '0.85rem', opacity: 0.85 }}>
                      Tap here or "+ Add Photo" to upload your favorite pictures with him ❤️
                    </p>
                  </div>
                ) : (
                  photos.map((photo, index) => (
                    <motion.div
                      key={photo.id}
                      className="polaroid-card"
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.05 }}
                    >
                      <button
                        className="delete-photo-btn"
                        onClick={() => handleDeletePhoto(photo.id)}
                        title="Remove photo"
                      >
                        ✕
                      </button>
                      <div className="polaroid-img-wrapper">
                        <img src={photo.url} alt="Our moment" className="polaroid-img" />
                      </div>
                      <input
                        type="text"
                        className="polaroid-caption-input"
                        value={photo.caption}
                        placeholder="Write a caption..."
                        onChange={(e) => handleCaptionChange(photo.id, e.target.value)}
                      />
                    </motion.div>
                  ))
                )}
              </div>
            </div>

            {/* SECTION 2: MOMENTS I WANT TO SPEND WITH HIM */}
            <div className="moments-section wishlist-section">
              <h3 className="section-title">
                <span>💭</span> Moments I Want To Spend With You
              </h3>
              <p className="wishlist-hint">Tap any heart to mark a dream or moment ❤️</p>

              {/* Moments List */}
              <div className="moments-list">
                {moments.length === 0 ? (
                  <div className="no-photos-hint" style={{ padding: '16px', background: '#ffffff' }}>
                    <p style={{ fontWeight: '600', color: 'var(--text-muted)' }}>
                      No moments added yet ✨
                    </p>
                    <p style={{ fontSize: '0.84rem', color: 'var(--text-muted)', marginTop: '4px' }}>
                      Write a dream moment below and tap "Add ✍️" to begin your wishlist with him!
                    </p>
                  </div>
                ) : (
                  moments.map((item) => (
                    <motion.div
                      key={item.id}
                      className={`moment-item ${item.done ? 'moment-done' : ''}`}
                      layout
                    >
                      <button
                        className="moment-check-btn"
                        onClick={(e) => handleToggleMoment(item.id, item.done, e)}
                        aria-label="Toggle completed"
                      >
                        {item.done ? '❤️' : '🤍'}
                      </button>
                      <span className="moment-text">{item.text}</span>
                      <button
                        className="moment-delete-btn"
                        onClick={() => handleDeleteMoment(item.id)}
                        title="Delete moment"
                      >
                        ✕
                      </button>
                    </motion.div>
                  ))
                )}
              </div>

              {/* Add New Moment Form */}
              <form onSubmit={handleAddMoment} className="add-moment-form">
                <input
                  type="text"
                  className="add-moment-input"
                  placeholder="একটি নতুন স্বপ্ন বা মুহূর্ত লিখুন... (Write a moment)"
                  value={newMomentText}
                  onChange={(e) => setNewMomentText(e.target.value)}
                />
                <button type="submit" className="btn-add-moment">
                  Add ✍️
                </button>
              </form>
            </div>

            {/* Navigation Footer */}
            <div className="moments-footer">
              <button className="btn-back-letter" onClick={onBackToLetter}>
                <span>💌 Back to Love Letter</span>
              </button>
            </div>

          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
