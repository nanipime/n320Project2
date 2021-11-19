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
			<button 
				// onClick={() => {

				// }}
			> 
				Portraits
			</button><br/>

			<button 
				// onClick={() => {

				// }}
			> 
				Landscape
			</button><br/>

			<button 
				// onClick={() => {

				// }}
			> 
				Skies
			</button><br/>

		</div>

	);
}

export default Gallery;