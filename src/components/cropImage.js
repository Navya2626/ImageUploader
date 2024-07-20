// utils/getCroppedImg.js
const getCroppedImg = (imageSrc, crop, zoom, aspect) => {
  return new Promise((resolve, reject) => {
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');
      const image = new Image();
      image.src = imageSrc;

      image.onload = () => {
          const { width, height } = image;
          const cropSize = 100; // Size of the crop (you can adjust this)
          canvas.width = cropSize;
          canvas.height = cropSize;

          const scaleX = width / canvas.width;
          const scaleY = height / canvas.height;
          const cropWidth = cropSize / zoom;
          const cropHeight = cropSize / zoom;
          const cropX = crop.x * scaleX;
          const cropY = crop.y * scaleY;

          ctx.drawImage(
              image,
              cropX,
              cropY,
              cropWidth,
              cropHeight,
              0,
              0,
              canvas.width,
              canvas.height
          );

          resolve({
              url: canvas.toDataURL('image/jpeg'),
          });
      };

      image.onerror = (error) => reject(error);
  });
};

export default getCroppedImg;
