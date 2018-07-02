import React, { Component } from 'react';

// Images
import BobRoss from "../assets/images/about/bobRoss.jpg";
import ClosedDoor from "../assets/images/about/closedDoor.jpg";
import Grad from "../assets/images/about/graduation.jpg";
import GradCailey from "../assets/images/about/graduationWithCailey.jpg";
import Selfie from "../assets/images/about/selfie.jpg";
import BlueUmbrella from "../assets/images/about/blueUmbrella.jpg";
import BoatSunset from "../assets/images/about/boatSunset.jpg";
import PaintNight from "../assets/images/about/paintNight.jpg";
import ThailandFamily from "../assets/images/about/thailandFamily.jpg";
import LakeWithMom from "../assets/images/about/lakeWithMom.jpg";

class Contact extends Component {

  render() {
    return (
      <span className="aboutWindow">
        <div className="aboutImages">
          <img src={Selfie} alt="Selfie"/>
          <img src={BlueUmbrella} alt="Blue Umbrella"/>
          <img src={Grad} alt="Graduation"/>
          <img src={ThailandFamily} alt="Thailand Family"/>
          <img src={BobRoss} alt="Bob Ross"/>
          <img src={GradCailey} alt="Graduation with Cailey"/>
          <img src={ClosedDoor} alt="Closed Door"/>
          <img src={BoatSunset} alt="Boat Sunset"/>
          <img src={PaintNight} alt="Paint Night"/>
          <img src={LakeWithMom} alt="Lake with Mom"/>
        </div>
        <div className="aboutText">
          <h1>Hi,</h1> <h4>my name is Eric Pak.</h4> <p>I'm a Software Engineer from Alaska! I was born and raised in Alaska but I am currently living in Seattle, Washington. I have also lived in South Korea where I discovered my passion for traveling and learning about new cultures!</p>
          <p>Other than traveling I also enjoy playing video games, board games, hiking, camping, or just chilling next to a bonfire with some friends and having a beer.</p>
          <p>I also enjoy learning about the latest technologies! It's always exciting to hear about all the next technologies coming from CES or Computex!</p>
          <p>I'm a laid back guy and I always try to keep a smile on my face. I'm always looking to learn something new or go on an adventure. If you're reading this feel free to send me a message and say hello!</p>
          <h6 className="hint1">Pro Tip: You can scroll through the pictures</h6>
          <h6 className="hint2">You can move this window and resize it</h6>
        </div>
      </span>
    );
  }
}

export default Contact;
