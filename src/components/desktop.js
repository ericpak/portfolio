import React, { Component } from 'react';
import Rnd from 'react-rnd';
import DcProject from './dcProject';
import SnapProject from './snapProject';
import RSProject from './rsProject';
import Contact from './contact';
import About from './about';
import MSPaint from './mspaint';

// Icon Images
import linkedIn_icon from "../assets/images/buttons_icons/linkedIn_icon.png";
import email_icon from "../assets/images/buttons_icons/email_icon.png";
import github_icon from "../assets/images/buttons_icons/github_icon.png";
import folder_icon from "../assets/images/buttons_icons/folder_icon.png";
import recycle_bin_icon from "../assets/images/buttons_icons/recycle_bin_icon.png";
import resize from "../assets/images/buttons_icons/resize.png";
import pdf_icon from "../assets/images/buttons_icons/pdf_icon.png";
import oldSite_icon from "../assets/images/buttons_icons/internet_explorer.png";
import WindowButton from "../assets/images/buttons_icons/window_button.png";
import WindowButtonDown from "../assets/images/buttons_icons/window_button_down.png";

// resume
import Pdf from "../assets/pdf/resume/Eric_Pak.pdf";

// Window Z-Index counter
var zCounter = 10;

class Desktop extends Component {
  constructor() {
    super();
    this.state = {
      desktopStyle: {
        height: window.innerHeight - 42
      },
      dcRnd: {
        width: 700,
        height: 700,
        x: 100,
        y: 25,
        z: 1,
      },
      snapRnd: {
        width: 700,
        height: 700,
        x: 150,
        y: 25,
        z: 2,
      },
      rsRnd: {
        width: 700,
        height: 700,
        x: 200,
        y: 25,
        z: 3,
      },
      rbRnd: {
        width: 200,
        height: 200,
        x: 250,
        y: 25,
        z: 4,
      },
      aboutRnd: {
        width: 700,
        height: 600,
        x: 350,
        y: 25,
        z: 4,
      },
      contactRnd: {
        width: 200,
        height: 200,
        x: 300,
        y: 25,
        z: 4,
      },
      mspaintRnd: {
        width: 500,
        height: 500,
        x: 25,
        y: 25,
        z: 5,
      },
      dcWindowStyle: {
        display: 'none',
      },
      snapWindowStyle: {
        display: 'none',
      },
      rsWindowStyle: {
        display: 'none',
      },
      rbWindowStyle: {
        display: 'none',
      },
      aboutWindowStyle: {
        display: 'flex',
      },
      contactWindowStyle: {
        display: 'none',
      },
      mspaintWindowStyle: {
        display: 'none',
      },
    }
  }

  componentDidMount() {
    window.addEventListener('resize', this.resizeWindow.bind(this));
  }

  resizeWindow() {
    this.setState({ desktopStyle: { height: window.innerHeight - 42 }});
  }

  openWindow(folderName) {
    if(folderName === "dc")
      this.setState({ dcWindowStyle: {...this.state.dcWindowStyle, display: 'flex'} });
    else if(folderName === "snap")
      this.setState({ snapWindowStyle: {...this.state.snapWindowStyle, display: 'flex'} });
    else if(folderName === "rs")
      this.setState({ rsWindowStyle: {...this.state.rsWindowStyle, display: 'flex'} });
    else if(folderName === "rb")
      this.setState({ rbWindowStyle: {...this.state.rbWindowStyle, display: 'flex'} });
    else if(folderName === "about")
      this.setState({ aboutWindowStyle: {...this.state.aboutWindowStyle, display: 'flex'} });
    else if(folderName === "contact")
      this.setState({ contactWindowStyle: {...this.state.contactWindowStyle, display: 'flex'} });
    else if(folderName === "mspaint")
      this.setState({ mspaintWindowStyle: {...this.state.mspaintWindowStyle, display: 'flex'} });
    this.changeZ(folderName);
    this.props.addToSBList(this.converter(folderName));
    this.windowButtonSelector(this.converter(folderName));
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
    else if(windowName === "about")
      this.setState({ aboutWindowStyle: {...this.state.aboutWindowStyle, display: "none" } });
    else if(windowName === "contact")
      this.setState({ contactWindowStyle: {...this.state.contactWindowStyle, display: "none" } });
    else if(windowName === "mspaint")
      this.setState({ mspaintWindowStyle: {...this.state.mspaintWindowStyle, display: "none" } });
    this.props.removeFromSBList(this.converter(windowName));
  }

  addToSBList(windowName) {
    var array = this.state.startbarList;
    var index = array.indexOf(windowName);
    if(index === -1){
      array.push(windowName);
    }
  }

  removeFromSBList(windowName) {
    var array = this.state.startbarList;
    var index = array.indexOf(windowName);
    if(index > -1){
      array.splice(index, 1);
    }
  }

  changeZ(windowName) {
    switch(windowName) {
      case "dc": this.setState({ dcRnd: {...this.state.dcRnd, z: zCounter } }); break;
      case "snap": this.setState({ snapRnd: {...this.state.snapRnd, z: zCounter } }); break;
      case "rs": this.setState({ rsRnd: {...this.state.rsRnd, z: zCounter } }); break;
      case "rb": this.setState({ rbRnd: {...this.state.rbRnd, z: zCounter } }); break;
      case "about": this.setState({ aboutRnd: {...this.state.aboutRnd, z: zCounter } }); break;
      case "contact": this.setState({ contactRnd: {...this.state.contactRnd, z: zCounter } }); break;
      case "mspaint": this.setState({ mspaintRnd: {...this.state.mspaintRnd, z: zCounter } }); break;
      default:
    }
    zCounter++;
    this.windowButtonSelector(this.converter(windowName));
  }

  converter(windowName) {
    switch (windowName) {
      case "dc": return "Deckard Cain";
      case "snap": return "SNAP";
      case "rs": return "Rilke Schule";
      case "rb": return "Recycle Bin";
      case "about": return "About";
      case "contact": return "Contact";
      case "mspaint": return "MS Paint";
      default:
    }
  }

  windowButtonSelector(windowName){
    var ele = document.getElementsByClassName("windowButton");
    for(var i = 0; i < ele.length; i++)
      ele[i].style["background-image"] = "url("+WindowButton+")";
    ele = document.getElementById(windowName);
    if(ele)
      ele.style.backgroundImage = "url("+WindowButtonDown+")";
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
            <input className="folder" id="snap" type="image" alt="SNAP" src={folder_icon} height="50" width="50" onClick={this.openWindow.bind(this, "snap")}/>
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
          <div className="dcHandle handle" onMouseDown={this.changeZ.bind(this, "dc")}><span className="handleTitle">Deckard Cain</span></div>
          <button className="close" onClick={this.closeWindow.bind(this, "dc")}>x</button>
          <DcProject changeZ={this.changeZ.bind(this)}/>
          <div className="resize"><img src={resize} alt="Resize" /></div>
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
          <div className="snapHandle handle" onMouseDown={this.changeZ.bind(this, "snap")}><span className="handleTitle">SNAP</span></div>
          <button className="close" onClick={this.closeWindow.bind(this, "snap")}>x</button>
          <SnapProject changeZ={this.changeZ.bind(this)}/>
          <div className="resize"><img src={resize} alt="Resize" /></div>
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
          <div className="rsHandle handle" onMouseDown={this.changeZ.bind(this, "rs")}><span className="handleTitle">Rilke Schule</span></div>
          <button className="close" onClick={this.closeWindow.bind(this, "rs")}>x</button>
          <RSProject changeZ={this.changeZ.bind(this)}/>
          <div className="resize"><img src={resize} alt="Resize" /></div>
        </Rnd>

        <Rnd
          onClick={this.changeZ.bind(this, "rb")}
          className="recycleBin"
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
          <div className="rbHandle handle" onMouseDown={this.changeZ.bind(this, "rb")}><span className="handleTitle">Recycle Bin</span></div>
          <button className="close" onClick={this.closeWindow.bind(this, "rb")}>x</button>
          <div className="recycleBinContent" onClick={this.changeZ.bind(this, "rb")}>
            <a href="https://ericpak.github.io/ericpak.me/"><input className="trashIcon" id="oldSite" type="image" alt="Old Site" src={oldSite_icon} height="50" width="50" /></a>
            <p className="trashLabel">old site</p>
            <div className="resize"><img src={resize} alt="Resize" /></div>
          </div>
        </Rnd>

        <Rnd
          onClick={this.changeZ.bind(this, "about")}
          className="about"
          style={this.state.aboutWindowStyle}
          size={{ width: this.state.aboutRnd.width, height: this.state.aboutRnd.height }}
          z={this.state.aboutRnd.z}
          dragHandleClassName=".aboutHandle"
          position={{ x: this.state.aboutRnd.x, y: this.state.aboutRnd.y }}
          onDragStop={(e, d) => { this.setState({ aboutRnd: { ...this.state.aboutRnd, x: d.x, y: d.y } }) }}
          onResize={(e, direction, ref, delta, position) => {
            this.setState({
              aboutRnd: {
                ...this.state.aboutRnd,
                width: ref.offsetWidth,
                height: ref.offsetHeight,
              }
            });
          }}
        >
          <div className="aboutHandle handle" onMouseDown={this.changeZ.bind(this, "about")}><span className="handleTitle">About</span></div>
          <button className="close" onClick={this.closeWindow.bind(this, "about")}>x</button>
          <div className="aboutContent content" onClick={this.changeZ.bind(this, "about")}>
            <About />
            <div className="resize"><img src={resize} alt="Resize" /></div>
          </div>
        </Rnd>

        <Rnd
          onClick={this.changeZ.bind(this, "contact")}
          className="contact"
          style={this.state.contactWindowStyle}
          size={{ width: this.state.contactRnd.width, height: this.state.contactRnd.height }}
          z={this.state.contactRnd.z}
          dragHandleClassName=".contactHandle"
          position={{ x: this.state.contactRnd.x, y: this.state.contactRnd.y }}
          onDragStop={(e, d) => { this.setState({ contactRnd: { ...this.state.contactRnd, x: d.x, y: d.y } }) }}
          onResize={(e, direction, ref, delta, position) => {
            this.setState({
              contactRnd: {
                ...this.state.contactRnd,
                width: ref.offsetWidth,
                height: ref.offsetHeight,
              }
            });
          }}
        >
          <div className="contactHandle handle" onMouseDown={this.changeZ.bind(this, "contact")}><span className="handleTitle">Contact</span></div>
          <button className="close" onClick={this.closeWindow.bind(this, "contact")}>x</button>
          <div className="contactContent content" onClick={this.changeZ.bind(this, "contact")}>
            <Contact />
            <div className="resize"><img src={resize} alt="Resize" /></div>
          </div>
        </Rnd>

        <Rnd
          onClick={this.changeZ.bind(this, "mspaint")}
          className="mspaint"
          style={this.state.mspaintWindowStyle}
          size={{ width: this.state.mspaintRnd.width, height: this.state.mspaintRnd.height }}
          z={this.state.mspaintRnd.z}
          dragHandleClassName=".mspaintHandle"
          position={{ x: this.state.mspaintRnd.x, y: this.state.mspaintRnd.y }}
          onDragStop={(e, d) => { this.setState({ mspaintRnd: { ...this.state.mspaintRnd, x: d.x, y: d.y } }) }}
          onResize={(e, direction, ref, delta, position) => {
            this.setState({
              mspaintRnd: {
                ...this.state.mspaintRnd,
                width: ref.offsetWidth,
                height: ref.offsetHeight,
              }
            });
            this._paintCanvas.resize();
          }}
        >
          <div className="mspaintHandle handle" onMouseDown={this.changeZ.bind(this, "mspaint")}><span className="handleTitle">MS Paint</span></div>
          <button className="close" onClick={this.closeWindow.bind(this, "mspaint")}>x</button>
          <div className="mspaintContent" onClick={this.changeZ.bind(this, "mspaint")}>
            <MSPaint ref={ref => (this._paintCanvas = ref)} mspaintRnd={this.state.mspaintRnd} />
            <div className="resize"><img src={resize} alt="Resize" /></div>
          </div>
        </Rnd>
      </div>
    );
  }
}

export default Desktop;
