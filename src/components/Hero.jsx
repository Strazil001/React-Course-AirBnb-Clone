import React from "react";
import Bbq from "../assets/bbq.jpg";
import Cabin from "../assets/cabin.jpg";
import Hike from "../assets/hike.jpg";
import Horse from "../assets/horse-riding.jpg";
import Sunset from "../assets/sunset-volleybal.jpg";
import Waterfall from "../assets/waterfall.jpg";
import JumpingMan from "../assets/man-jumping.jpg";
import "./Hero.css";

export default function() {
	const nums = [1, 3, 5, 7, 9];
	const names = ["steve", "dave", "amanda", "evan", "dorothy", "yasmine"];
	const pokemons = ["Bulbasaur", "Charmander", "Squirtle"];
	const squared = nums.map(function(item) {
		return item * item;
	});
	console.log(squared);

	const uppercase = names.map(name => name[0].toUpperCase() + name.slice(1));
	console.log(uppercase);

	const element = pokemons.map(mon => `<p>${mon}</p>`);
	console.log(element);

	return (
		<div className="hero-container">
			<div className="hero--images">
				<div className="hero--imagebox">
					<img
						className="hero--img"
						alt="jumping man in the mountains"
						src={JumpingMan}
					/>
					<img className="hero--img" alt="cabin" src={Cabin} />
				</div>
				<div className="hero--imagebox">
					<img className="hero--img" alt="waterfall" src={Waterfall} />
				</div>
				<div className="hero--imagebox">
					<img className="hero--img" alt="hiking" src={Hike} />
					<img className="hero--img" alt="horse riding" src={Horse} />
				</div>
				<div className="hero--imagebox">
					<img className="hero--img" alt="sunset" src={Sunset} />
				</div>
			</div>
			<div className="hero--text">
				<h1>Online Experiences</h1>
				<p>
					Sollicitudin aliquam ultrices sagittis orci, a scelerisque purus
					semper eget duis at tellus at urna condimentum mattis.
				</p>
			</div>
		</div>
	);
}
