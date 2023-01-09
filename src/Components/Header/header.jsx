import React from "react";
import hero_image from "../../assets/image/Image-2.png";
import "./header.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay } from '@fortawesome/free-solid-svg-icons'

const header = () => {
    return (
        <div className="jadoo-header-section section__padding">
            <div className="jadoo-header-content">
                <div className="section-titles">
                    <h3>Best Destinations around the world</h3>
                    <h1 className="decore"> Travel, enjoy</h1>
                    <h1>and live a new <br /> and full life</h1>
                    <p className="subtext">Built Wicket longer admire do barton vanity itself do in it. Preferred to sportsmen it engrossed listening. Park gate sell they west hard for the.</p>
                    <div className="jadoo-header-button">
                    <button className="btn-yellow">Find out more</button>
                    <div className="demo">
                    <button className="btn-orange"><FontAwesomeIcon icon={faPlay} /></button>
                    <p>Play Demo</p>
                    </div>
                </div>
                </div>
                <div className="jadoo-header-image">
                    <img src={hero_image} alt="" srcset="" />
                </div>
               
            </div>
        </div>
    );
};

export default header;
