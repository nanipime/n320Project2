import React, { useState, useEffect } from "react";

function Gallery() {
	// state vars
		const [images, setImages] = useState([]);

		// hook to load data
		useEffect(() => {
			// fetch data from json file
			fetch("data/gallery.json")
				.then((response) => response.json())
				.then((data) => {
				setImages(data);
				});
			}, []);
		
	return (
		<div>
			Gallery
		</div>

	);
}

export default Gallery;