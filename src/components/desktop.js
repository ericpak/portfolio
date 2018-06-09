import React, { Component } from 'react';

// Colors
var vomitGreen = "#008080";

class Desktop extends Component {
  constructor() {
    super();
    this.state = {
      x: 0,
      y: 0,
      desktopCanvas: undefined,
      ctx: undefined,
    }
  }

  componentDidMount() {
    this.state.desktopCanvas = this.refs.desktopCanvas;
    this.state.ctx = this.state.desktopCanvas.getContext("2d");
    this.resizeWindow();

    window.addEventListener('resize', this.resizeWindow.bind(this));
  }

  defalutBackground() {
    this.state.ctx.fillStyle = vomitGreen;
    this.state.ctx.fillRect(0, 0, this.state.desktopCanvas.width, this.state.desktopCanvas.height);
  }

  resizeWindow() {
    console.log(window.innerWidth);
    console.log(window.innerHeight);
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
