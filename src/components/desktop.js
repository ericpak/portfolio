import React, { Component } from 'react';

import StartButton from "../assets/win95_start_button.gif";
import StartButtonDown from "../assets/win95_start_button_down.gif";
import ClockBg from "../assets/clock_bg.gif";

// Colors
var vomitGreen = "#008080";
var grey = "#bfbfbf";

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

    this.defaults();

    window.addEventListener('resize', this.resizeWindow.bind(this));
    this.animate();
  }

  defaults() {
    this.githubExe();
    this.linkedInExe();
    this.emailExe();
    this.startButton();
    this.clock();
  }

  _onMouseMove(e) {
    this.setState({ x: e.nativeEvent.offsetX, y: e.nativeEvent.offsetY });
    console.log(this.state.x + " " + this.state.y);
  }

  _onMouseClick(e) {
    // Clicked on Start Button
    if(this.state.x >= 3 && this.state.x <= 83 && this.state.y >= window.innerHeight-37 && this.state.y <= window.innerHeight - 2)
      this.setState({ startButton: { up: !this.state.startButton.up } });
    else {
      this.setState({ startButton: { up: true } });
    }
  }

  githubExe() {
    this.state.ctx.fillStyle = "black";
    this.state.ctx.fillRect(this.state.desktopCanvas.width-100, this.state.desktopCanvas.height-100, 50, 50);
  }

  linkedInExe() {
    this.state.ctx.fillStyle = "blue";
    this.state.ctx.fillRect(this.state.desktopCanvas.width-200, this.state.desktopCanvas.height-100, 50, 50);
  }

  emailExe() {
    this.state.ctx.fillStyle = "white";
    this.state.ctx.fillRect(this.state.desktopCanvas.width-300, this.state.desktopCanvas.height-100, 50, 50);
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
      if(hours < 10)
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
    // this.defaultBackground();
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
          onMouseDown={ this._onMouseClick.bind(this) }
        />
      </div>
    );
  }
}

export default Desktop;
