import React, { Component } from 'react';

import StartButton from "../assets/win95_start_button.gif";

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
      startBar: { height: 40 }
    }
  }

  componentDidMount() {
    this.state.desktopCanvas = this.refs.desktopCanvas;
    this.state.ctx = this.state.desktopCanvas.getContext("2d");
    this.resizeWindow();

    this.defaults();

    window.addEventListener('resize', this.resizeWindow.bind(this));
  }

  defalutBackground() {
    this.state.ctx.fillStyle = vomitGreen;
    this.state.ctx.fillRect(0, 0, this.state.desktopCanvas.width, this.state.desktopCanvas.height);
  }
  defaults() {
    this.githubExe();
    this.linkedInExe();
    this.emailExe();
    this.startBar();
    this.clock();
    this.startButton();
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

  startBar() {
    this.state.ctx.fillStyle = grey;
    this.state.ctx.fillRect(0, this.state.desktopCanvas.height-this.state.startBar.height, this.state.desktopCanvas.width, this.state.startBar.height);
  }

  startButton() {
    let img = new Image();
    img.src = StartButton;
    img.onload = () => {
      img.height = img.height/2;
      img.width = img.width/2;
      this.state.ctx.drawImage(img, 3, window.innerHeight-40);
    }
    this.state.ctx.fillStyle = "black";
    this.state.ctx.font = "20px verdana";
    this.state.ctx.fillText("Start", 15, this.state.desktopCanvas.height-13);
  }

  clock() {
    this.state.ctx.fillStyle = "black";
    this.state.ctx.font = "20px verdana";
    this.state.ctx.fillText("Clock", this.state.desktopCanvas.width-75, this.state.desktopCanvas.height-13);
  }

  resizeWindow() {
    this.state.desktopCanvas.width = window.innerWidth;
    this.state.desktopCanvas.height = window.innerHeight-4;
    this.defalutBackground();
  }

  render() {
    return (
      <div className="Desktop">
        <canvas ref="desktopCanvas" id="desktopCanvas" className="desktopCanvas" />
      </div>
    );
  }
}

export default Desktop;
