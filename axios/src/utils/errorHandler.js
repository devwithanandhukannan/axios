// src/api/utils/errorHandler.js
export const handleApiError = (error) => {
  if (error.response) {
    return error.response.data?.message || 'Server Error';
  }
  return 'Network Error';
};