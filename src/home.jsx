import React from "react";

import './App.css';
import Luces from './Luces.jsx';

//create your first component
const Home = () => {
	return (
		<div className="text-center">
			<div className="container d-flex justify-content-center align-items-center vh-100">
            <Luces />
        </div>
		</div>
	);
};

export default Home;
