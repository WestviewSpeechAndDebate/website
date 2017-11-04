import React from "react";

export default class Home extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div className="page-container home-page">
                <div className="home-page-title">
                    Westview Speech and Debate
                </div>
                <div className="home-page-content">
                    <div className="home-page-image-container">
                        <a href="https://www.powayusd.com/en-US/Schools/HS/WVHS/HOME" target="_blank">
                            <img src="../../assets/westview.png" alt="Westview High School" className="home-page-image" />
                        </a>
                    </div>
                    <div className="home-page-image-container">
                        <a href="https://www.powayusd.com/en-US/Schools/HS/WVHS/HOME" target="_blank">
                            <img src="../../assets/facebook.png" alt="Facebook" className="home-page-image" />
                        </a>
                    </div>
                    <div className="home-page-content-centralizer">
Westview High School's Speech and Debate is a club and a 4.5 class, started by students, blossoming from just a few members to almost 100. We aim to expand students' knowledge and capabilities. We have collected dozens of accolades and successfully qualified over 16 students at the state level. Our contributions to the community are extensive, from outreaches to middle school speech and debate clubs, to offering and teaching the skill sets necessary for success in the future.
                    </div>
                    <div className="buffer"></div>
                </div>
            </div>
        );
    }
}