import React from "react"
import "./App.css"

export default function Details(props) {
    const ingredientsElements = props.currentRecipe.sections[0].components.map(item => {
        return (
            <li>{item.raw_text}</li>
        )})

    const instructionsElements = props.currentRecipe.instructions.map(step => {
        return (
            <li>{step.display_text}</li>
        )
    })

    return (
        <div>
            <div className="details-page">
                <div className="details-name-container">
                    <div className="details-return-div">
                        <button className="details-return normal-button" onClick={props.setDetails}>Return to search</button>
                    </div>
                    <div className="details-name-div">
                        <h3 class="details-name">{props.currentRecipe.name}</h3>
                    </div>
                    <div className="details-video-div">
                        {props.currentRecipe.original_video_url && <a target="_blank" rel="noopener noreferrer" href={props.currentRecipe.original_video_url}><button className="normal-button details-video details-video-button">Watch the video</button></a>}
                    </div>
                </div>
                <div className="img-wrapper">
                    <img class="details-image recipe-img" src={props.currentRecipe.thumbnail_url} alt={props.currentRecipe.name}/>
                </div>
                <p class="details-description">{props.currentRecipe.description}</p>
                <ul>
                    {ingredientsElements}
                </ul>
                <ol>
                    {instructionsElements}
                </ol>
            </div>
        </div>
    )
}