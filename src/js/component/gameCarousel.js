import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { Carousel } from "react-bootstrap";
import PropTypes from "prop-types";

export const GameCarousel = () => {
	const { store, actions } = useContext(Context);
	console.log("$$$$$", store.game);
	return (
		<Carousel style={{ height: "40rem" }}>
			{store.gameList.map((value, index) => {
				return (
					<Carousel.Item className="container" key={index} style={{ maxHeight: "600px", width: "100%" }}>
						{/* <div className="image-container"> */}
						<img
							className="d-block w-100 rounded opacity-1"
							src={value.background_image}
							alt="First slide"
						/>
						{/* </div> */}
						<Carousel.Caption>
							<h1>{value.name}</h1>
							{/* <p>{actions.loadGame(game.id).description}</p> */}
						</Carousel.Caption>
					</Carousel.Item>
				);
			})}
		</Carousel>
	);
};
