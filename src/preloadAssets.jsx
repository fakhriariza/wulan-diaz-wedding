// utils/preloadAssets.js
export const preloadAssets = (assets) => {
  const promises = assets.map((asset) => {
    return new Promise((resolve, reject) => {
      const ext = asset.split(".").pop();
      if (["jpg", "jpeg", "png", "webp", "gif"].includes(ext)) {
        const img = new Image();
        img.src = asset;
        img.onload = resolve;
        img.onerror = reject;
      } else if (["mp3", "wav", "ogg"].includes(ext)) {
        const audio = new Audio();
        audio.src = asset;
        audio.oncanplaythrough = resolve;
        audio.onerror = reject;
      } else {
        resolve(); // unsupported asset type
      }
    });
  });

  return Promise.all(promises);
};
