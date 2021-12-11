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
			<br/>
			{/* div for the images to be selected ; need to figure out how to code the buttons */}
			<div class="container">
				<img src="images/baby1.jpg" alt="portrait" />

				<button 
					// onClick={() => {

					// }}
				> 
					Portraits
				</button>
			</div><br/>

			<div class="container2">
				<img src="images/dominican1.jpg" alt="land" />
				<button 
					// onClick={() => {

					// }}
				> 
					Landscape
				</button>
			</div><br/>
			
			<div class="container3">
				<img src="images/sky1.jpg" alt="sky" />
				<button 
				// maybe code a change to change screen a different way
					// onClick={() => {

					// }}
				> 
					Skies
				</button>
			</div><br/>
		</div>

	);
}

export default Gallery;