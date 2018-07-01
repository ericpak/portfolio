import React, { Component } from 'react';

// Mouse Down variable for the brush
var mouse_down = false;

// Margin Variables
const MARGIN_SIDES = 11;
const MARGIN_TOP_BOT = 60;
const TOOLBAR = 80;

class MsPaint extends Component {
  constructor() {
    super();
    this.state = {
      x: 0,
      y: 0,
      paintCanvas: this.refs.mspaint,
      ctx: undefined,
      brushSize: 20,
      divWidth: "200px",
      divHeight: "200px",
      rgb: { r: 255, g: 188, b: 103, a: 1 },
    }
  }

  // If canvas mounts
  componentDidMount() {
    this.state.paintCanvas = this.refs.mspaint;
    this.state.paintCanvas.width = this.props.mspaintRnd.width - MARGIN_SIDES - TOOLBAR;
    this.state.paintCanvas.height = this.props.mspaintRnd.height - MARGIN_TOP_BOT;
    this.state.ctx = this.state.paintCanvas.getContext("2d");

    // window.addEventListener('resize', this.resizeWindow.bind(this));
  }

  ////////////////////////////////////////////
  // Event Handlers
  ////////////////////////////////////////////

  // Resize event handler
  resize(){
    this.state.paintCanvas.width = this.props.mspaintRnd.width - MARGIN_SIDES - TOOLBAR;
    this.state.paintCanvas.height = this.props.mspaintRnd.height - MARGIN_TOP_BOT;
  }

  // MouseMove event handler
  _onMouseMove(e) {
    this.setState({ x: e.nativeEvent.offsetX, y: e.nativeEvent.offsetY });
    if(mouse_down){
      this.state.ctx.lineWidth = this.state.brushSize;
      this.state.ctx.lineTo(this.state.x, this.state.y);
      this.state.ctx.stroke();
    }
  }

  // MouseDown event handler
  _onMouseDown(){
    mouse_down = true;
    var rgb = this.state.rgb;
    var srgb = 'rgba('+rgb.r+', '+rgb.g+', '+rgb.b+', '+rgb.a+')';
    this.state.ctx.beginPath();
    this.state.ctx.strokeStyle = srgb;
  }

  // MouseUp event handler
  _onMouseUp(){
    mouse_down = false;
    this.state.ctx.closePath();
  }

  saveCanvas() {
    var image = this.state.paintCanvas.toDataURL("image/png").replace("image/png", "image/octet-stream");
    window.location.href=image;
  }

  animate() {
    window.requestAnimationFrame(() => {
      this.animate();
    });
    this.state.ctx.clearRect(0, 0, this.state.canvas.width, this.state.canvas.height);
  }

  render() {
    return (
      <div className="mspaintContent">
        <canvas
          ref="mspaint"
          onMouseDown={this._onMouseDown.bind(this)}
          onMouseUp={this._onMouseUp.bind(this)}
          onMouseMove={this._onMouseMove.bind(this)}
          className="mspaint_canvas"
        />
      </div>
    );
  }
}

export default MsPaint;
