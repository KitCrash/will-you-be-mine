// =================================================================
// FRONTEND API CLIENT FOR PROPOSAL BACKEND
// Interacts with Express server with graceful offline localStorage fallback
// =================================================================

const API_BASE = '';

export async function fetchMomentsAndPhotos() {
  try {
    const res = await fetch(`${API_BASE}/api/data`);
    if (res.ok) {
      const data = await res.json();
      return {
        photos: data.photos || [],
        moments: data.moments || []
      };
    }
  } catch (err) {
    console.warn('Backend offline or unreachable, using local fallback', err);
  }

  // Fallback to local storage if backend is unavailable
  try {
    const localPhotos = JSON.parse(localStorage.getItem('proposal_user_photos') || '[]');
    const localMoments = JSON.parse(localStorage.getItem('proposal_user_moments') || '[]');
    return { photos: localPhotos, moments: localMoments };
  } catch {
    return { photos: [], moments: [] };
  }
}

export async function apiUploadPhoto(file, caption) {
  try {
    const formData = new FormData();
    formData.append('photo', file);
    formData.append('caption', caption || 'A special moment with you ❤️');

    const res = await fetch(`${API_BASE}/api/photos`, {
      method: 'POST',
      body: formData
    });

    if (res.ok) {
      return await res.json();
    }
  } catch (err) {
    console.warn('Backend photo upload failed, converting to dataURL', err);
  }

  // Client-side fallback using data URL
  return new Promise((resolve) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      const fallbackPhoto = {
        id: 'photo-' + Date.now() + '-' + Math.random().toString(36).substr(2, 5),
        url: e.target.result,
        caption: caption || 'A special moment with you ❤️',
        createdAt: new Date().toISOString()
      };
      resolve(fallbackPhoto);
    };
    reader.readAsDataURL(file);
  });
}

export async function apiUpdatePhotoCaption(id, caption) {
  try {
    const res = await fetch(`${API_BASE}/api/photos/${id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ caption })
    });
    if (res.ok) return await res.json();
  } catch (err) {
    console.warn(err);
  }
  return { id, caption };
}

export async function apiDeletePhoto(id) {
  try {
    const res = await fetch(`${API_BASE}/api/photos/${id}`, {
      method: 'DELETE'
    });
    if (res.ok) return await res.json();
  } catch (err) {
    console.warn(err);
  }
  return { success: true, removedId: id };
}

export async function apiAddMoment(text) {
  try {
    const res = await fetch(`${API_BASE}/api/moments`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ text })
    });
    if (res.ok) return await res.json();
  } catch (err) {
    console.warn('Backend add moment failed, using local object', err);
  }

  return {
    id: Date.now(),
    text: text.trim(),
    done: false,
    createdAt: new Date().toISOString()
  };
}

export async function apiToggleMoment(id, done) {
  try {
    const res = await fetch(`${API_BASE}/api/moments/${id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ done })
    });
    if (res.ok) return await res.json();
  } catch (err) {
    console.warn(err);
  }
  return { id, done };
}

export async function apiDeleteMoment(id) {
  try {
    const res = await fetch(`${API_BASE}/api/moments/${id}`, {
      method: 'DELETE'
    });
    if (res.ok) return await res.json();
  } catch (err) {
    console.warn(err);
  }
  return { success: true, deletedId: id };
}
