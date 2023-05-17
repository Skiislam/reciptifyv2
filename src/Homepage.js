import React, { Fragment } from "react";
import './homepage.css';
import iphoneImage from './Assets/Iphone.png';
import AppleMusicLogo from './Assets/appleMusic.png';
import SpotifyLogo from './Assets/spotifyLogo.png';

export default function Homepage() {


    return(

       
    <Fragment>     

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
        <section className="section2">
        <h1 className="title1"> Currently Compatiable with Popular Music Streaming Apps</h1>
            <div className="LanderSection2"> 
            <div className="appleMusicLogo"> 
            
            <img style={{width: '150px'}} src={AppleMusicLogo}/>

            </div>
            <div className="spotifyLogo">
            <img style={{width: '150px'}} src={SpotifyLogo}/>

            </div>
            </div>

        </section>
        </Fragment>


    );
}