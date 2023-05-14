import React from "react";
import './homepage.css';
import iphoneImage from './Assets/Iphone.png'

export default function Homepage() {


    return(

    <section className="section1">
        <div className="LanderSection1"> 

            <div className="LS1image"> 
                <img style={{width: '300px'}} src={iphoneImage}/>
            </div>
            <div className="LS1text">

                <h1 className="titleh1"> Turn your top listens into Receipt</h1>
                <p className="paragraph1"> Ever wonder what your most listened to songs on a reciept would look like.
                    We did not either, but here it is, sign in below using Spotify to get started
                </p>
                <button className="spotifyLogin"> Log In with Spotify</button>
            
            </div>
            </div>

        </section>


    );
}