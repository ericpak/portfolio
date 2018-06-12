class Icon{
  constructor(ctx, name, x, y, width, height, image, linkText) {
    this.state = {
      ctx: ctx,
      name: name,
      x: x,
      y: y,
      width: width,
      height: height,
      image: image,
      linkText: linkText
    }
  }

  draw() {
    let img = new Image();
    img.src = this.state.image;
    img.onload = () => {
      this.state.ctx.drawImage(img, this.state.x, this.state.y, this.state.width, this.state.height);
    }
    this.state.ctx.fillStyle = "white";
    this.state.ctx.font = "14px helvetica";
    this.state.ctx.fillText(this.state.name, this.state.x, this.state.y + 63);
  }

  action() {
    if(this.state.linkText != "folder")
      window.location.href = this.state.linkText;
  }

  update() {
    this.draw();
  }
}

export default Icon;
