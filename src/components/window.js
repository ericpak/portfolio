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
    this.basicBox(this.state.x, this.state.y, this.state.width, this.state.height, "black", "white");

    // Window Top Bar
    this.state.ctx.fillStyle = "blue";
    this.state.ctx.fillRect(this.state.x+4, this.state.y+4, this.state.width-8, 18);
    this.state.ctx.fillStyle = "white";
    this.state.ctx.font = "14px arial";
    this.state.ctx.fillText(this.state.name, this.state.x+6, this.state.y+18);

    // Window close and minimize
    this.basicBox(this.state.x+this.state.width-20, this.state.y+6, 14, 14, "black", "white");
    this.basicBox(this.state.x+this.state.width-40, this.state.y+6, 14, 14, "black", "white");
    this.state.ctx.fillStyle = "black";
    this.state.ctx.font = "14px arial";
    this.state.ctx.fillText("x", this.state.x+this.state.width-18, this.state.y+17);
    this.state.ctx.fillText("_", this.state.x+this.state.width-38, this.state.y+13);

    // Content Box
    this.basicBox(this.state.x+4, this.state.y+24, this.state.width-8, this.state.height-28, "white", "black");
  }

  basicBox(x, y, width, height, color1, color2) {
    this.state.ctx.fillStyle = color1;
    this.state.ctx.fillRect(x, y, width, height);
    this.state.ctx.fillStyle = color2;
    this.state.ctx.fillRect(x, y, width-2, height-2);
    this.state.ctx.fillStyle = "#bfbfbf";
    this.state.ctx.fillRect(x+2, y+2, width-4, height-4);
  }

  update() {
    this.draw();
  }
}

export default Window;
