import { dot, getCurrentPageImages } from "../helper/helpper";
import "./gallery.css";

const Gallery = ({ images, currentPage, setCurrentPage }) => {
  return (
    <div className="gallery">
      <div className="images-container">
        {getCurrentPageImages(images, currentPage).map((img) => img)}
      </div>
      <div className="pagination">
        {dot(images).map((e, index) => (
          <div
            key={index}
            className={`dot ${index === currentPage ? "active" : ""}`}
            onClick={() => setCurrentPage(index)}></div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
