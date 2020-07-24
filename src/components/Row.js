import React, { useState, useEffect } from 'react';
import axios from '../axios';
import requests from '../requests';
import YouTube from 'react-youtube';
import movieTrailer from 'movie-trailer';

const baseURL = 'https://image.tmdb.org/t/p/original/';

function Row({ title, fetchUrl }) {
	// movies vairable set to an empty array
	const [ movies, setMovies ] = useState([]);

	// trailer Url
	const [ trailerUrl, setTrailerUrl] = useState("");

	// fetch data
	useEffect(() => {
		// if [], run once when the row loads and dont run again
		async function fetchData() {
			const request = await axios.get(fetchUrl);
			setMovies(request.data.results);
			return request;
		}
		fetchData();
	},[ fetchUrl ]);

	const options = {
		height: "390",
		width: "100%",
		playerVars: {
			autoplay: 1,
		},
	};
	
	const handleClick = (movie) => {
		if(trailerUrl) {
			setTrailerUrl('');
		}
		else {
			movieTrailer(movie?.name || "")
				.then(url => {
					const urlParams = new URLSearchParams(new URL(url).search);
					setTrailerUrl(urlParams.get('v'));
				}).catch(error => console.log(error));
		}
	}

	// console.log(movies);

	return (
		<div className={'row'}>
			<h1>{title}</h1>
			<div className={'row_posters'}>
				{movies.map((movie) => (
					<img
						onClick={ () => handleClick(movie) }
						key={movie.id}
						className={'row_poster'}
						src={`${baseURL}${movie.poster_path}`}
						alt={movie.name}
					/>
				))}
			</div>
			{trailerUrl && <YouTube videoId={trailerUrl} opts={options} />}
		</div>
	);
}

export default Row;
