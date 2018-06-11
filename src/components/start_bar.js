import React, { Component } from 'react';
import Icon from "./icon";
import Window from "./window";

// Start Bar Images
import StartButton from "../assets/images/win95_start_button.gif";
import StartButtonDown from "../assets/images/win95_start_button_down.gif";
import ClockBg from "../assets/images/clock_bg.gif";

// Icon Images
import linkedIn_icon from "../assets/images/linkedIn_icon.png";
import email_icon from "../assets/images/email_icon.png";
import github_icon from "../assets/images/github_icon.png";
import folder_icon from "../assets/images/folder_icon.png";
import recycle_bin_icon from "../assets/images/recycle_bin_icon.png";
import pdf_icon from "../assets/images/pdf_icon.png";

var windows;
var icons;

var mouse_down = false;

class StartBar extends Component {
  constructor() {
    super();
    this.state = {
      hours: 10,
      minutes: 10,
      seconds: 10,
      startButtonImg: StartButton,
    }
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.clock(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  clock() {
    let date = new Date();
    let hours = date.getHours();
    hours = hours%12;
    if(hours == 0)
      hours = '12';
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    hours = this.checkTime(hours);
    minutes = this.checkTime(minutes);
    seconds = this.checkTime(seconds);
    this.setState({
      hours: hours,
      minutes: minutes,
      seconds: seconds
    });
  }
  checkTime(time) {
    if(time < 10)
      time = "0" + time;
    return time;
  }

  onFocus() {
    this.setState({ startButtonImg: StartButtonDown });
    document.getElementById("startMenu").classList.toggle("show");
  }
  onBlur() {
    this.setState({ startButtonImg: StartButton });
    var dropdowns = document.getElementsByClassName("startMenu-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }

  render() {
    return (
      <div className="StartBar">
        <input id="start_button" type="image" src={this.state.startButtonImg} onFocus={this.onFocus.bind(this)} onBlur={this.onBlur.bind(this)} height="35" width="80" />
        <div id="startMenu" class="startMenu-content">
          <a href="#"> about </a>
          <a href="#"> contact </a>
          <a href="#"> programs </a>
        </div>
        <img id="clockbg" src= {ClockBg} height="35" width="80" />
        <span id="clock"> {this.state.hours}:{this.state.minutes}:{this.state.seconds} </span>
      </div>
    );
  }
}
export default StartBar;
