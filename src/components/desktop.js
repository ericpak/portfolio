import React, { Component } from 'react';
import Rnd from 'react-rnd';
import DcProject from './dcProject';
import SnapProject from './snapProject';
import RSProject from './rsProject';

// Icon Images
import linkedIn_icon from "../assets/images/buttons_icons/linkedIn_icon.png";
import email_icon from "../assets/images/buttons_icons/email_icon.png";
import github_icon from "../assets/images/buttons_icons/github_icon.png";
import folder_icon from "../assets/images/buttons_icons/folder_icon.png";
import recycle_bin_icon from "../assets/images/buttons_icons/recycle_bin_icon.png";
import pdf_icon from "../assets/images/buttons_icons/pdf_icon.png";

// resume
import Pdf from "../assets/pdf/resume/Eric_Pak.pdf";

class Desktop extends Component {
  constructor() {
    super();
    this.state = {
      width: 200,
      height: 200,
      x: 200,
      y: 200,
      desktopStyle: {
        height: window.innerHeight - 42
      },
      dcRnd: {
        width: 200,
        height: 200,
        x: 200,
        y: 200,
        z: 1,
      },
      snapRnd: {
        width: 200,
        height: 200,
        x: 250,
        y: 250,
        z: 2,
      },
      rsRnd: {
        width: 500,
        height: 400,
        x: 300,
        y: 300,
        z: 3,
      },
      rbRnd: {
        width: 200,
        height: 200,
        x: 350,
        y: 350,
        z: 4,
      },
      dcWindowStyle: {
        display: 'none',
        border: 'solid 1px #ddd',
        background: '#bfbfbf'
      },
      snapWindowStyle: {
        display: 'none',
        border: 'solid 1px #ddd',
        background: '#bfbfbf'
      },
      rsWindowStyle: {
        display: 'none',
        border: 'solid 1px #ddd',
        background: '#bfbfbf'
      },
      rbWindowStyle: {
        display: 'none',
        border: 'solid 1px #ddd',
        background: '#bfbfbf'
      }
    }
  }

  componentDidMount() {
    window.addEventListener('resize', this.resizeWindow.bind(this));
  }

  resizeWindow() {
    this.setState({ desktopStyle: { height: window.innerHeight - 42 }});
  }

  openWindow(folderName){
    if(folderName === "dc"){
      this.setState({ dcWindowStyle: {...this.state.dcWindowStyle, display: 'flex'} });
      this.changeZ("dc");
    }
    else if(folderName === "snap"){
      this.setState({ snapWindowStyle: {...this.state.snapWindowStyle, display: 'flex'} });
      this.changeZ("snap");
    }
    else if(folderName === "rs"){
      this.setState({ rsWindowStyle: {...this.state.rsWindowStyle, display: 'flex'} });
      this.changeZ("rs");
    }
    else if(folderName === "rb"){
      this.setState({ rbWindowStyle: {...this.state.rbWindowStyle, display: 'flex'} });
      this.changeZ("rb");
    }
  }

  closeWindow(windowName) {
    if(windowName === "dc")
      this.setState({ dcWindowStyle: {...this.state.dcWindowStyle, display: "none" } });
    else if(windowName === "snap")
      this.setState({ snapWindowStyle: {...this.state.snapWindowStyle, display: "none" } });
    else if(windowName === "rs")
      this.setState({ rsWindowStyle: {...this.state.rsWindowStyle, display: "none" } });
    else if(windowName === "rb")
      this.setState({ rbWindowStyle: {...this.state.rbWindowStyle, display: "none" } });
  }

  changeZ(windowName) {
    let dcZ = this.state.dcRnd.z;
    let snapZ = this.state.snapRnd.z;
    let rsZ = this.state.rsRnd.z;
    let rbZ = this.state.rbRnd.z;

    if(windowName === "dc" && dcZ !== 4) {
      this.setState({ dcRnd: {...this.state.dcRnd, z: 4 } });
      if(snapZ > 1)
        this.setState({ snapRnd: {...this.state.snapRnd, z: snapZ-1 } });
      if(rsZ > 1)
        this.setState({ rsRnd: {...this.state.rsRnd, z: rsZ-1 } });
      if(rbZ > 1)
        this.setState({ rbRnd: {...this.state.rbRnd, z: rbZ-1 } });
    } else if(windowName === "snap" && this.state.snapRnd.z !== 4) {
      if(dcZ > 1)
        this.setState({ dcRnd: {...this.state.dcRnd, z: dcZ-1 } });
      this.setState({ snapRnd: {...this.state.snapRnd, z: 4 } });
      if(rsZ > 1)
        this.setState({ rsRnd: {...this.state.rsRnd, z: rsZ-1 } });
      if(rbZ > 1)
        this.setState({ rbRnd: {...this.state.rbRnd, z: rbZ-1 } });
    } else if(windowName === "rs" && rsZ !== 4){
      if(dcZ >1)
        this.setState({ dcRnd: {...this.state.dcRnd, z: dcZ-1 } });
      if(snapZ > 1)
        this.setState({ snapRnd: {...this.state.snapRnd, z: snapZ-1 } });
      this.setState({ rsRnd: {...this.state.rsRnd, z: 4 } });
      if(rbZ > 1)
        this.setState({ rbRnd: {...this.state.rbRnd, z: rbZ-1 } });
    } else if(windowName === "rb" && rbZ !== 4){
      if(dcZ >1)
        this.setState({ dcRnd: {...this.state.dcRnd, z: dcZ-1 } });
      if(snapZ > 1)
        this.setState({ snapRnd: {...this.state.snapRnd, z: snapZ-1 } });
      if(rsZ > 1)
        this.setState({ rsRnd: {...this.state.rsRnd, z: rsZ-1 } });
      this.setState({ rbRnd: {...this.state.rbRnd, z: 4 } });
    }
  }

  render() {
    return (
      <div className="Desktop" style={this.state.desktopStyle}>
        <div className="left">
          <div className="left icon">
            <input className="folder" id="deckardCain" type="image" alt="Deckard Cain" src={folder_icon} height="50" width="50" onClick={this.openWindow.bind(this, "dc")}/>
            <p>Deckard Cain</p>
          </div>
          <div className="left icon">
            <input className="folder" id="SNAP" type="image" alt="SNAP" src={folder_icon} height="50" width="50" onClick={this.openWindow.bind(this, "snap")}/>
            <p>SNAP</p>
          </div>
          <div className="left icon">
            <input className="folder" id="rilkeSchule" type="image" alt="Rilke Schule" src={folder_icon} height="50" width="50" onClick={this.openWindow.bind(this, "rs")}/>
            <p>Rilke Schule</p>
          </div>
          <div className="left icon">
            <a href={Pdf} target="_blank"><input className="resume" id="resume" type="image" alt="Resume.pdf" src={pdf_icon} height="50" width="50"/></a>
            <p>Resume</p>
          </div>
          <div className="left icon">
            <input className="folder" id="recycleBin" type="image" alt="Recycle Bin" src={recycle_bin_icon} height="50" width="50" onClick={this.openWindow.bind(this, "rb")}/>
            <p>Recycle Bin</p>
          </div>
        </div>
        <div className="rightside">
          <div className="bottom">
            <div className="right">
              <a href="https://github.com/ericpak"><input className="boticon" id="github" type="image" alt="GitHub" src={github_icon} height="50" width="50" /></a>
              <p>GitHub</p>
            </div>
            <div className="right">
              <a href="https://www.linkedin.com/in/eric-pak/"><input className="boticon" id="linkedIn" type="image" alt="LinkedIn" src={linkedIn_icon} height="50" width="50" /></a>
              <p>LinkedIn</p>
            </div>
            <div className="right">
              <a href="mailto:pak.eric@gmail.com"><input className="boticon" id="email" type="image" alt="Email" src={email_icon} height="50" width="50" /></a>
              <p>Email</p>
            </div>
          </div>
        </div>



        <Rnd
          style={this.state.dcWindowStyle}
          size={{ width: this.state.dcRnd.width, height: this.state.dcRnd.height }}
          z={this.state.dcRnd.z}
          dragHandleClassName=".dcHandle"
          position={{ x: this.state.dcRnd.x, y: this.state.dcRnd.y }}
          onDragStop={(e, d) => { this.setState({ dcRnd:{ ...this.state.dcRnd, x: d.x, y: d.y } }) }}
          onResize={(e, direction, ref, delta, position) => {
            this.setState({
              dcRnd:{
                ...this.state.dcRnd,
                width: ref.offsetWidth,
                height: ref.offsetHeight,
              }
            });
          }}
        >
          <div className="dcHandle handle" onMouseDown={this.changeZ.bind(this, "dc")}> Deckard Cain</div>
          <button className="close" onClick={this.closeWindow.bind(this, "dc")}>x</button>
          <DcProject />
        </Rnd>

        <Rnd
          onClick={this.changeZ.bind(this, "snap")}
          style={this.state.snapWindowStyle}
          size={{ width: this.state.snapRnd.width, height: this.state.snapRnd.height }}
          z={this.state.snapRnd.z}
          dragHandleClassName=".snapHandle"
          position={{ x: this.state.snapRnd.x, y: this.state.snapRnd.y }}
          onDragStop={(e, d) => { this.setState({ snapRnd: { ...this.state.snapRnd, x: d.x, y: d.y } }) }}
          onResize={(e, direction, ref, delta, position) => {
            this.setState({
              snapRnd: {
                ...this.state.snapRnd,
                width: ref.offsetWidth,
                height: ref.offsetHeight,
              }
            });
          }}
        >
          <div className="snapHandle handle" onMouseDown={this.changeZ.bind(this, "snap")}> SNAP</div>
          <button className="close" onClick={this.closeWindow.bind(this, "snap")}>x</button>
          <SnapProject />
        </Rnd>

        <Rnd
          onClick={this.changeZ.bind(this, "rs")}
          style={this.state.rsWindowStyle}
          size={{ width: this.state.rsRnd.width, height: this.state.rsRnd.height }}
          z={this.state.rsRnd.z}
          dragHandleClassName=".rsHandle"
          position={{ x: this.state.rsRnd.x, y: this.state.rsRnd.y }}
          onDragStop={(e, d) => { this.setState({ rsRnd: { ...this.state.rsRnd, x: d.x, y: d.y } }) }}
          onResize={(e, direction, ref, delta, position) => {
            this.setState({
              rsRnd: {
                ...this.state.rsRnd,
                width: ref.offsetWidth,
                height: ref.offsetHeight,
              }
            });
          }}
        >
          <div className="rsHandle handle" onMouseDown={this.changeZ.bind(this, "rs")}> Rilke Schule</div>
          <button className="close" onClick={this.closeWindow.bind(this, "rs")}>x</button>
          <RSProject />
        </Rnd>

        <Rnd
          onClick={this.changeZ.bind(this, "rb")}
          style={this.state.rbWindowStyle}
          size={{ width: this.state.rbRnd.width, height: this.state.rbRnd.height }}
          z={this.state.rbRnd.z}
          dragHandleClassName=".rbHandle"
          position={{ x: this.state.rbRnd.x, y: this.state.rbRnd.y }}
          onDragStop={(e, d) => { this.setState({ rbRnd: { ...this.state.rbRnd, x: d.x, y: d.y } }) }}
          onResize={(e, direction, ref, delta, position) => {
            this.setState({
              rbRnd: {
                ...this.state.rbRnd,
                width: ref.offsetWidth,
                height: ref.offsetHeight,
              }
            });
          }}
        >
          <div className="rbHandle handle" onMouseDown={this.changeZ.bind(this, "rb")}> Recycle Bin</div>
          <button className="close" onClick={this.closeWindow.bind(this, "rb")}>x</button>
          <div className="content" onMouseDown={this.changeZ.bind(this, "rb")}>Insert Picture of James Lown</div>
        </Rnd>

      </div>
    );
  }
}

export default Desktop;
