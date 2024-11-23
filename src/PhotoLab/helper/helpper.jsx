export const handleSave = async (imageData, fetchData, setImageData) => {
  await fetch("http://localhost:5000/images", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(imageData),
  });
  fetchData();
  setImageData({});
};

export const handleFileChange = (e, setImageData) => {
  const file = e.target.files[0];
  if (file) {
    const reader = new FileReader();
    const metadata = {
      name: file.name,
      size: (file.size / 1024).toFixed(2) + " KB",
      id: new Date().getTime(),
      type: file.type,
    };

    reader.onload = (e) => {
      setImageData({ img: e.target.result, ...metadata });
    };

    reader.onerror = (error) => {
      console.error("Error reading file:", error);
    };

    reader.readAsDataURL(file);
  }
};

export const handleCancel = (setImageData) => {
  setImageData({});
};

export const epochToDate = (epoch) => new Date(epoch).toLocaleString();

const ITEMS_PER_PAGE = 8;

const totalPages = (images) => Math.ceil(images.length / ITEMS_PER_PAGE);
export const dot = (images) => Array.from({ length: totalPages(images) });
export const getCurrentPageImages = (images, currentPage) => {
  const start = currentPage * ITEMS_PER_PAGE;
  const end = start + ITEMS_PER_PAGE;
  return images.slice(start, end);
};
