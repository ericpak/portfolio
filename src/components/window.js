class Window{
  constructor(ctx, name, x, y, width, height) {
    this.state = {
      ctx: ctx,
      name: name,
      x: x,
      y: y,
      width: width,
      height: height
    }
  }

  draw() {
    // Basic window
    this.state.ctx.fillStyle = "black";
    this.state.ctx.fillRect(this.state.x, this.state.y, this.state.width, this.state.height);
    this.state.ctx.fillStyle = "white";
    this.state.ctx.fillRect(this.state.x, this.state.y, this.state.width-2, this.state.height-2);
    this.state.ctx.fillStyle = "#bfbfbf";
    this.state.ctx.fillRect(this.state.x+2, this.state.y+2, this.state.width-4, this.state.height-4);
    this.state.ctx.font = "14px helvetica";
    this.state.ctx.fillText(this.state.name, this.state.x, this.state.y + 63);
  }

  update() {
    this.draw();
  }
}

export default Window;
