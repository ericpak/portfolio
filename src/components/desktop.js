import React, { Component } from 'react';

// Icon Images
import linkedIn_icon from "../assets/images/linkedIn_icon.png";
import email_icon from "../assets/images/email_icon.png";
import github_icon from "../assets/images/github_icon.png";
import folder_icon from "../assets/images/folder_icon.png";
import recycle_bin_icon from "../assets/images/recycle_bin_icon.png";
import pdf_icon from "../assets/images/pdf_icon.png";

// resume
import Pdf from "../assets/pdf/resume/Eric_Pak.pdf";

class Desktop extends Component {
  constructor() {
    super();
    this.state = {
      desktopStyle: {
        height: window.innerHeight - 42
      }
    }
  }

  render() {
    return (
      <div className="Desktop" style={this.state.desktopStyle}>
        <div className="left">
          <div className="left icon">
            <input className="folder" id="deckardCain" type="image" src={folder_icon} height="50" width="50" />
            <p>Deckard Cain</p>
          </div>
          <div className="left icon">
            <input className="folder" id="SNAP" type="image" src={folder_icon} height="50" width="50" />
            <p>SNAP</p>
          </div>
          <div className="left icon">
            <input className="folder" id="rilkeSchule" type="image" src={folder_icon} height="50" width="50" />
            <p>Rilke Schule</p>
          </div>
          <div className="left icon">
            <input className="folder" id="recycleBin" type="image" src={recycle_bin_icon} height="50" width="50" />
            <p>Recycle Bin</p>
          </div>
        </div>
        <div className="rightside">
          <div className="right icon">
            <a href={Pdf} target="_blank"><input className="resume" id="resume" type="image" src={pdf_icon} height="50" width="50"/></a>
            <p>Resume</p>
          </div>
          <div className="bottom">
            <div className="right">
              <a href="https://github.com/ericpak"><input className="boticon" id="github" type="image" src={github_icon} height="50" width="50" /></a>
              <p>GitHub</p>
            </div>
            <div className="right">
              <a href="https://www.linkedin.com/in/eric-pak/"><input className="boticon" id="linkedIn" type="image" src={linkedIn_icon} height="50" width="50" /></a>
              <p>LinkedIn</p>
            </div>
            <div className="right">
              <a href="mailto:pak.eric@gmail.com"><input className="boticon" id="email" type="image" src={email_icon} height="50" width="50" /></a>
              <p>Email</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Desktop;
