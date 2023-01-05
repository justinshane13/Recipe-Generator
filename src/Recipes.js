import React from "react"
import "./App.css"

export default function Recipes(props) {
    const recipeElements = props.summary.map((recipe, index) => {
        return (
            <div key={index} className="recipe-tile">
                <div className="img-wrapper">
                    <img className="recipe-img" src={recipe.thumbnail_url} alt={recipe.name}/>
                </div>
                <h3 className="name">{recipe.name}</h3>
                <p className="description">{recipe.description}{!recipe.description && 'Click the "Read more" button below for detailed steps to make this dish, or click the "Watch the video" button to see a demonstration.'}</p>
                <div className="button-wrapper">
                    {recipe.original_video_url && <a className="video-button-link" target="_blank" rel="noopener noreferrer" href={recipe.original_video_url}><button className="video-button normal-button">Watch Video</button></a>}
                    <button className="recipe-page-button normal-button" onClick={() => props.setDetails(index)}>Full Recipe</button>
                </div>
            </div>
        )})
    
    return (
        <div className="front-page-container-container">
            {!props.hasSearched && !props.searching && <div className="placeholder">
                    <p className="exploring">Start exploring</p>
                </div>}
            {props.searching && <p className="dot-typing"></p>}
            {props.hasSearched && !props.searching && props.summary.length === 0 && <p className="searching">There were no recipes with that ingredient.</p>}
            <div className="front-page-container">
                {recipeElements}
            </div>
        </div>
    )
}