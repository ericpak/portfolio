import React, { Component } from 'react';
import classNames from "classnames";

var slideIndex = 1;
var slideName = "";
var slideDesc = "";
var dotClass = "";

class ProjectItem extends Component {
  getClassName() {
    return classNames("ProjectItem");
  }

  componentDidMount(){
    this.showDivs(slideIndex);
  }

  // Render methods
  renderImage(image, idx){
    return <img className={slideName} id={image.imageTitle} key={image.imageTitle} alt={image.imageAlt} src={image.image}/>;
  }
  renderImageDescription(image, idx){
    return <div className={slideDesc} id={image.imageTitle} key={image.imageTitle}>{image.description}</div>;
  }
  renderTechnology(technology, idx){
    return <li key={idx} className="project_technology">{technology}</li>;
  }
  renderDots(image, idx){
    return <span key={idx} className={dotClass} onClick={this.currentDiv.bind(this, idx)}></span>
  }

  // showDivs helper methods
  plusDivs(n) {
    slideIndex += 1;
    this.showDivs(slideIndex);
  }
  minusDivs(){
    slideIndex -= 1;
    this.showDivs(slideIndex);
  }
  currentDiv(n) {
    slideIndex = n+1;
    this.showDivs(slideIndex);
  }

  // Logic to show or hide an image in the gallery
  showDivs(n) {
    var i;
    var x = document.getElementsByClassName("mySlides_" + this.props.project.title);
    var y = document.getElementsByClassName("description_" + this.props.project.title);
    var dots = document.getElementsByClassName("dot_" + this.props.project.title);
    if (n > x.length) {slideIndex = 1};
    if (n < 1) {slideIndex = x.length};
    for (i = 0; i < x.length; i++) {
       x[i].style.display = "none";
       y[i].style.display = "none";
    };
    for (i = 0; i < dots.length; i++) {
       dots[i].className = dots[i].className.replace(" fill", "");
    };
    x[slideIndex-1].style.display = "block";
    y[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " fill";
  }

  render() {
    slideName = ("images mySlides_"+this.props.project.title);
    slideDesc = ("image_description description_"+this.props.project.title);
    dotClass = ("dot dot_"+this.props.project.title);

    return (
      <div className={this.getClassName()}>
        <div className="project_info">
          <h2 className="project_title">{this.props.project.title}</h2><ul className="project_technologies">{this.props.project.technologies.map(this.renderTechnology.bind(this))}</ul>
          <p className="project_description">{this.props.project.description}</p>
        </div>
        <div className="project_gallery">
          <div className="leftArrow" onClick={this.minusDivs.bind(this)}><span className="arrow">&#10094;</span></div>
          {this.props.project.images.map(this.renderImage.bind(this))}
          <div className="rightArrow" onClick={this.plusDivs.bind(this)}><span className="arrow">&#10095;</span></div>
          <div className="gallery_dots">{this.props.project.images.map(this.renderDots.bind(this))}</div>
        </div>
        <div>{this.props.project.images.map(this.renderImageDescription.bind(this))}</div>
      </div>
    );
  }
}

export default ProjectItem;
