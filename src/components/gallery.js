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
			<button>Portraits</button>
		</div>

	);
}

export default Gallery;