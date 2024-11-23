import React from "react";
import { handleCancel, handleFileChange } from "../../helper/helpper";
import Button from "../Button/Button";
import "./fileUploader.css";

function FileUpload({ imageData, onClick, setImageData }) {
  return (
    <div className="file-uploader">
      <label for="file-input" className="upload-label">
        Select File
        <input
          id="file-input"
          type="file"
          accept="image/*"
          onChange={(e) => handleFileChange(e, setImageData)}
        />
      </label>
      <div className="file-preview" id="file-preview">
        {imageData?.name ? imageData?.name : "No file chosen"}
      </div>

      <div style={{ marginTop: "20px" }}>
        {imageData.img && (
          <div>
            <img
              src={imageData.img}
              alt="Preview"
              style={{ maxWidth: "500px", maxHeight: "500px" }}
            />
          </div>
        )}
      </div>
      <Button disabled={!imageData?.name} onClick={onClick} text="Upload" />
      <Button
        disabled={!imageData?.name}
        onClick={() => {
          handleCancel(setImageData);
        }}
        text="Cancel"
      />
    </div>
  );
}

export default FileUpload;
