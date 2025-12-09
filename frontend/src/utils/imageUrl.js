const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';

export const getImageUrl = (imagePath) => {
  if (!imagePath) return 'https://via.placeholder.com/450x350?text=No+Image';
  
  if (imagePath.startsWith('http://') || imagePath.startsWith('https://')) {
    return imagePath;
  }
  
  return `${API_BASE_URL}${imagePath}`;
};
