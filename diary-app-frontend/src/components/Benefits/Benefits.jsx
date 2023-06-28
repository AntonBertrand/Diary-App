import React from "react";
import './benefits.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faFaceSmile} from '@fortawesome/free-solid-svg-icons'
import {faBed} from '@fortawesome/free-solid-svg-icons'
import {faBrain} from '@fortawesome/free-solid-svg-icons'
import {faPencil} from '@fortawesome/free-solid-svg-icons'



const Benefits = () => {
    return (
        <div className="benefits">
            <h1>Benefits</h1>
            <div className="divider"></div>
            <div className="cards">
                <div className="card">
                    <FontAwesomeIcon icon={faFaceSmile} className="icon"/>
                    <p>Improves Self-Awareness</p>
                </div>
                <div className="card">
                    <FontAwesomeIcon icon={faBed} className="icon"/>
                    <p>Reduces Proscrastination</p>
                </div>
                <div className="card">
                    <FontAwesomeIcon icon={faBrain} className="icon"/>
                    <p>Improves Memory</p>
                </div>
                <div className="card">
                    <FontAwesomeIcon icon={faPencil} className="icon"/>
                    <p>Enhance Writing Skills</p>
                </div>
            </div>
        </div>
    )
}

export default Benefits;