import React, { useState, useEffect } from "react";

function Gallery() {
	// state vars
		const [images, setImages] = useState({});

		// hook to load data
		useEffect(() => {
			// fetch data from json file
			fetch("data/gallery.json")
				.then((result) => result.json())
				.then((data) => {
				setImages(data);
				});
			}, []);
		
	return (
		<div>
			<div class="container">
				<img src="images/baby1.jpg" alt="portrait" />

				<button 
					// onClick={() => {

					// }}
				> 
					Portraits
				</button>
			</div>

			<div class="container2">
				<img src="images/baby1.jpg" alt="land" />
				<button 
					// onClick={() => {

					// }}
				> 
					Landscape
				</button>
			</div>
			
			<div class="container3">
				<img src="images/baby1.jpg" alt="sky" />
				<button 
					// onClick={() => {

					// }}
				> 
					Skies
				</button>
			</div>
		</div>

	);
}

export default Gallery;