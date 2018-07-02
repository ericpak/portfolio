import React, { Component } from 'react';

// Mouse Down variable for the brush
var mouse_down = false;

// Margin Variables
const MARGIN_SIDES = 11;
const MARGIN_TOP_BOT = 60;
const TOOLBAR = 80;

// Drawing Array
var undo = [];
var redo = [];
var points = [];

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
      rgba: { r: 255, g: 188, b: 103, a: 1 },
      color: "#ffbc67",
    }
  }

  // If canvas mounts
  componentDidMount() {
    this.setState({ paintCanvas: this.refs.mspaint });
    this.refs.mspaint.width = this.props.mspaintRnd.width - MARGIN_SIDES - TOOLBAR;
    this.refs.mspaint.height = this.props.mspaintRnd.height - MARGIN_TOP_BOT;
    this.setState({ ctx: this.refs.mspaint.getContext("2d") });
    this.rgbaToHex(this.state.rgba);
  }

  ////////////////////////////////////////
  // Event Handlers
  ////////////////////////////////////////

  resize(){
    this.refs.mspaint.width = this.props.mspaintRnd.width - MARGIN_SIDES - TOOLBAR;
    this.refs.mspaint.height = this.props.mspaintRnd.height - MARGIN_TOP_BOT;
    this.drawArray();
  }
  _onMouseMove(e) {
    this.setState({ x: e.nativeEvent.offsetX, y: e.nativeEvent.offsetY });
    if(mouse_down){
      var point = {
        x: e.nativeEvent.offsetX,
        y: e.nativeEvent.offsetY,
        size: this.state.brushSize,
        color: this.rgbaToString(this.state.rgba),
      }

      this.state.ctx.lineTo(point.x, point.y);
      this.state.ctx.stroke();
      points.push(point);
    }
  }
  _onMouseDown(e) {
    redo = [];
    var point = {
      x: e.nativeEvent.offsetX,
      y: e.nativeEvent.offsetY,
      size: this.state.brushSize,
      color: this.rgbaToString(this.state.rgba),
    }
    this.state.ctx.strokeStyle = point.color;
    this.state.ctx.lineWidth = point.size;
    this.state.ctx.beginPath();

    mouse_down = true;
    points = [];
    points.push(point);
    this.state.ctx.moveTo(point.x, point.y);
    undo.push(points);
  }
  _onMouseUp() {
    mouse_down = false;
    this.state.ctx.closePath();
  }


  ////////////////////////////////////////
  // Recreate Image from Array
  ////////////////////////////////////////

  drawArray() {
    for(var i = 0; i < undo.length; i++) {
      var path = undo[i];
      this.state.ctx.strokeStyle = path[0].color;
      this.state.ctx.lineWidth = path[0].size;

      this.state.ctx.beginPath();
      this.state.ctx.moveTo(path[0].x, path[0].y);
      for(var j = 0; j < path.length; j++) {
        this.state.ctx.lineTo(path[j].x, path[j].y);
        this.state.ctx.stroke();
      }
      this.state.ctx.closePath();
    }
  }

  ////////////////////////////////////////
  // Color Converter
  ////////////////////////////////////////
  rgbaToString(rgba) {
    return 'rgba('+rgba.r+', '+rgba.g+', '+rgba.b+', '+rgba.a+')';
  }
  rgbaToHex(rgba) {
    return "#"+rgba.r.toString(16)+rgba.g.toString(16)+rgba.b.toString(16);
  }

  ////////////////////////////////////////
  // MS Paint Tools
  ////////////////////////////////////////
  clearCanvas() {
    this.state.ctx.clearRect(0, 0, this.state.paintCanvas.width, this.state.paintCanvas.height);
    undo = [];
    redo = [];
  }
  undo() {
    if(undo.length ===0) return;
    this.state.ctx.clearRect(0, 0, this.state.paintCanvas.width, this.state.paintCanvas.height);
    redo.push(undo.pop());
    this.drawArray();
  }
  redo() {
    if(redo.length === 0) return;
    this.state.ctx.clearRect(0, 0, this.state.paintCanvas.width, this.state.paintCanvas.height);
    undo.push(redo.pop());
    this.drawArray();
  }
  changeBrushSize(e) {
    this.setState({ brushSize: e.target.value });
  }
  changeColor(e) {
    var rgb = e.target.value;
    this.setState({ color: rgb });
    this.setState({ rgba: {...this.state.rgba, r:parseInt(rgb.substring(1,3), 16), g:parseInt(rgb.substring(3,5), 16), b:parseInt(rgb.substring(5,7), 16)} });
  }
  saveCanvas() {
    var image = this.state.paintCanvas.toDataURL("image/png").replace("image/png", "image/octet-stream");
    window.location.href=image;
  }

  render() {
    return (
      <div className="mspaintContent">
        <div className="mspaint_tools" >
          <div className="paintButton"><input type="submit" value="clear" onClick={this.clearCanvas.bind(this)} /></div>
          <div className="paintButton"><input type="submit" value="undo" onClick={this.undo.bind(this)} /></div>
          <div className="paintButton"><input type="submit" value="redo" onClick={this.redo.bind(this)} /></div>
          <div className="brushSizeLabel">Size: {this.state.brushSize}</div>
          <div className="paintButton"><input type="range" min="1" max="100" value={this.state.brushSize} onChange={this.changeBrushSize.bind(this)} /></div>
          <div className="paintButton"><input type="color" value={this.state.color} onChange={this.changeColor.bind(this)} /></div>
          <div className="paintButton"><input type="submit" value="save" onClick={this.saveCanvas.bind(this)} /></div>
        </div>
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
