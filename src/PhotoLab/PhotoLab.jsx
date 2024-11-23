import React, { useEffect, useState } from "react";
import Card from "./components/Card/Card";
import { epochToDate, handleSave } from "./helper/helpper";
import Button from "./components/Button/Button";
import Gallery from "./Gallery/Gallery";
import FileUpload from "./components/Input/FileUpload";
import Header from "./components/Header/Header";

function PhotoLab() {
  const [images, setImages] = useState([]);
  const [sortKey, setSortKey] = useState("time");
  const [searchTerm, setSearchTerm] = useState("");
  const [imageData, setImageData] = useState({});
  const [currentPage, setCurrentPage] = useState(0);

  const handleSort = (key) => {
    const sortedData = [...images].sort((a, b) => {
      if (key === "name-a") return a.name.localeCompare(b.name);
      if (key === "name-d") return b.name.localeCompare(a.name);
      if (key === "time-a") return a.id - b.id;
      if (key === "time-d") return b.id - a.id;
      return 0;
    });
    setImages(sortedData);
    setSortKey(key);
  };

  const handleSearch = (event) => {
    setSearchTerm(event.target.value.toLowerCase());
    setCurrentPage(0);
  };

  const filteredData = images.filter((item) =>
    item.name.toLowerCase().includes(searchTerm)
  );

  const fetchData = () => {
    fetch("http://localhost:5000/images")
      .then((response) => response.json())
      .then((data) => {
        setImages(data.reverse());
      })
      .catch((error) => console.error("Error fetching images:", error));
  };

  useEffect(() => {
    fetchData();
  }, []);

  const cards = filteredData.map((item) => (
    <Card
      src={item.img}
      alt={item.name}
      name={item.name}
      time={epochToDate(item.id)}
    />
  ));

  return (
    <div>
      <Header headerText="Photo Lab" />
      <FileUpload
        imageData={imageData}
        setImageData={setImageData}
        onClick={() => {
          handleSave(imageData, fetchData, setImageData);
        }}
      />

      <div style={{ padding: "20px" }}>
        <h2>Gallery</h2>
        <div style={{ marginBottom: "20px" }}>
          <label>
            Search by Name:
            <input
              type="text"
              value={searchTerm}
              onChange={handleSearch}
              style={{ marginLeft: "10px", padding: "5px" }}
            />
          </label>
          <Button
            disabled={!cards.length}
            onClick={() => handleSort("name-a")}
            text={"Sort by Name - Ascending"}
          />
          <Button
            disabled={!cards.length}
            onClick={() => handleSort("name-d")}
            text={"Sort by Name - Descending"}
          />
          <Button
            disabled={!cards.length}
            onClick={() => handleSort("time-a")}
            text={"Sort by Time - Ascending"}
          />
          <Button
            disabled={!cards.length}
            onClick={() => handleSort("time-d")}
            text={"Sort by Time - Descending"}
          />
        </div>
        {cards.length ? (
          <Gallery
            images={cards}
            setCurrentPage={setCurrentPage}
            currentPage={currentPage}
          />
        ) : (
          "Empty!"
        )}
        <div></div>
      </div>
    </div>
  );
}

export default PhotoLab;
