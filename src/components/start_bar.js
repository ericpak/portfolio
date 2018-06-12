import React, { Component } from 'react';

// Start Bar Images
import StartButton from "../assets/images/win95_start_button.gif";
import StartButtonDown from "../assets/images/win95_start_button_down.gif";
import ClockBg from "../assets/images/clock_bg.gif";

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
    if(hours === 0)
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
        <input id="start_button" type="image" alt="Start Button" src={this.state.startButtonImg} onFocus={this.onFocus.bind(this)} onBlur={this.onBlur.bind(this)} height="35" width="80" />
        <div id="startMenu" className="startMenu-content">
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
