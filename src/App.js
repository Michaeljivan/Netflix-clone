import React from 'react';
import './App.css';
import './row.css';
import './banner.css'
import './nav.css';

import requests from './requests';

// Components
import Nav from './components/Nav';
import Banner from './components/Banner';
import Row from './components/Row';


function App() {
	return (
		<div className={'App'}>
			{/* Nav Bar */}
			<Nav />
			{/* Banner */}
			<Banner />
			{/* Row */}
			<Row title={'NETFLIX Originals'} fetchUrl={requests.fetchNetflixOriginals} />
			<Row title={'Trending Now'} fetchUrl={requests.fetchTrend} />
			<Row title={'Top Rated'} fetchUrl={requests.fetchTopRated} />
			<Row title={'Action'} fetchUrl={requests.fetchActionMovies} />
			<Row title={'Comedy'} fetchUrl={requests.fetchComedyMovies} />
			<Row title={'Horror'} fetchUrl={requests.fetchHorrorMovies} />
			<Row title={'Romance'} fetchUrl={requests.fetchRomanceMovies} />
			<Row title={'Documentaries'} fetchUrl={requests.fetchDocumentaries} />
		</div>
	);
}

export default App;
