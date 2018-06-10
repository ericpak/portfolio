import React, { Component } from 'react';
import Icon from "./icon";

// Start Bar Images
import StartButton from "../assets/images/win95_start_button.gif";
import StartButtonDown from "../assets/images/win95_start_button_down.gif";
import ClockBg from "../assets/images/clock_bg.gif";

// Icon Images
import linkedIn_icon from "../assets/images/linkedIn_icon.png";
import email_icon from "../assets/images/email_icon.png";
import github_icon from "../assets/images/github_icon.png";
import folder_icon from "../assets/images/folder_icon.png";

var windows;
var icons;

var mouse_down = false;

class Desktop extends Component {
  constructor() {
    super();
    this.state = {
      x: 0,
      y: 0,
      width: 0,
      height: 0,
      desktopCanvas: undefined,
      ctx: undefined,
      startBar: { height: 40 },
      startButton: { up: true },
      desktopStyle: {
        height: window.innerHeight - 40
      }
    }
  }

  componentDidMount() {
    this.state.desktopCanvas = this.refs.desktopCanvas;
    this.state.ctx = this.state.desktopCanvas.getContext("2d");
    this.resizeWindow();

    windows = [];
    icons = [];

    this.createIcons();
    this.defaults();

    window.addEventListener('resize', this.resizeWindow.bind(this));
    this.animate();
  }

  defaults() {
    this.startButton();
    this.clock();
  }

  _onMouseMove(e) {
    this.setState({ x: e.nativeEvent.offsetX, y: e.nativeEvent.offsetY });
    if(mouse_down){
      console.log(this.state.x + " " + this.state.y);
    }
  }

  _onMouseDown(e) {
    mouse_down = true;
    // Clicked on Start Button
    if(this.state.x >= 3 && this.state.x <= 83 && this.state.y >= window.innerHeight-37 && this.state.y <= window.innerHeight - 2)
      this.setState({ startButton: { up: !this.state.startButton.up } });
    else {
      this.setState({ startButton: { up: true } });
    }
    // Check if icons were Clicked
    for(var pos = 0; pos < icons.length; pos++){
      if(this.state.x >= icons[pos].state.x && this.state.x <= icons[pos].state.x+icons[pos].state.width){
        if(this.state.y >= icons[pos].state.y && this.state.y <= icons[pos].state.y+icons[pos].state.height){
          console.log(icons[pos].state.name + " clicked!");
          icons[pos].action();
        }
      }
    }
  }

  _onMouseUp(e) {
    mouse_down = false;
  }

  createIcons(){
    this.githubExe();
    this.linkedInExe();
    this.emailExe();
    this.deckard_cain();
    this.snap();
    this.rilke_schule();
  }

  createIcon(name, x, y, width, height, image) {
    icons.push(new Icon(this.state.ctx, name, x, y, width, height, image));
  }

  githubExe() {
    this.createIcon("GitHub", this.state.desktopCanvas.width-100, this.state.desktopCanvas.height-110, 50, 50, github_icon, "https://github.com/ericpak");
  }

  linkedInExe() {
    this.createIcon("LinkedIn", this.state.desktopCanvas.width-200, this.state.desktopCanvas.height-110, 50, 50, linkedIn_icon, "https://www.linkedin.com/in/eric-pak/");
  }

  emailExe() {
    this.createIcon("Email", this.state.desktopCanvas.width-300, this.state.desktopCanvas.height-110, 50, 50, email_icon, "mailto:pak.eric@gmail.com");
  }

  deckard_cain() {
    this.createIcon("Deckard Cain", 20, 50, 50, 50, folder_icon, "folder");
  }
  snap() {
    this.createIcon("SNAP", 20, 125, 50, 50, folder_icon, "folder");
  }
  rilke_schule() {
    this.createIcon("Rilke Schule", 20, 200, 50, 50, folder_icon, "folder");
  }

  startButton() {
    let img = new Image();
    img.src = this.state.startButton.up ? StartButton : StartButtonDown;
    img.onload = () => {
      img.height = img.height/2;
      img.width = img.width/2;
      this.state.ctx.drawImage(img, 3, window.innerHeight-37, 80, 35);
    }
  }

  clock() {
    let img = new Image();
    img.src = ClockBg;
    img.onload = () => {
      img.height = img.height/2;
      img.width = img.width/2;
      this.state.ctx.drawImage(img, window.innerWidth-83, window.innerHeight-37, 80, 35);
      this.state.ctx.fillStyle = "black";
      this.state.ctx.font = "18px arial";
      let d = new Date();
      let hours = d.getHours();
      hours = hours%12;
      if(hours == 0)
        hours = '12';
      else if(hours < 10)
        hours ='0'+hours;
      let minutes = d.getMinutes();
      if(minutes < 10)
        minutes = '0'+minutes;
      this.state.ctx.fillText(hours+":"+minutes, this.state.desktopCanvas.width-65, this.state.desktopCanvas.height-13);
    }
  }

  resizeWindow() {
    this.state.desktopCanvas.width = window.innerWidth;
    this.state.desktopCanvas.height = window.innerHeight;
    this.setState({ desktopStyle: { height: window.innerHeight - 40 }});
  }

  // Recursive Method
  animate() {
    window.requestAnimationFrame(() => {
      this.animate();
    });
    for(var pos = 0; pos < icons.length; pos++){
      icons[pos].update();
    }
    this.defaults();
  }

  render() {
    return (
      <div className="Desktop" style={this.state.desktopStyle}>
        <canvas
          ref="desktopCanvas"
          id="desktopCanvas"
          className="desktopCanvas"
          onMouseMove={ this._onMouseMove.bind(this) }
          onMouseDown={ this._onMouseDown.bind(this) }
          onMouseUp={ this._onMouseUp.bind(this) }
        />
      </div>
    );
  }
}

export default Desktop;
