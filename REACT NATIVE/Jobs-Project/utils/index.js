// export const checkImageURL = (url) => {
//     if (!url) return false
//     else {
//         const pattern = new RegExp('^https?:\\/\\/.+\\.(png|jpg|jpeg|bmp|gif|webp)$', 'i');
//         return pattern.test(url);
//     }
// };
export const checkImageURL = (url) => {
    if (!url) return false;
    try {
      const validUrl = new URL(url); // Check if it's a valid URL
      const pattern = /\.(png|jpg|jpeg|bmp|gif|webp)$/i; // Match image file extensions
      return pattern.test(validUrl.pathname); // Test against the path of the URL
    } catch (error) {
      return false; // If the URL constructor throws an error, return false
    }
  };
  