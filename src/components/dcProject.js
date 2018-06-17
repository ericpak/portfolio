import React, { Component } from 'react';
import ProjectItem from "./projectItem";

// Images for project
import deckardCainHelp from "../assets/images/deckardCain/deckard_cain_help.png";
import deckardCainMonk from "../assets/images/deckardCain/deckard_cain_monk_kr.png";
import deckardCainTeam4 from "../assets/images/deckardCain/deckard_cain_team4.png";

class DcProject extends Component {

  constructor(){
    super();
    this.state = {
      projects: [],
    }
  }

  componentWillMount(){
    this.setState({
      projects: [
        {
         title: 'Deckard Cain: a Discord bot',
         technologies: ['Javascript', 'Nodejs','AWS EC2', 'enmap-level'],
         description: <p>A Discord bot for Diablo 3. It calls on the Blizzard API to get data on the ladder. It can pull information from any ladder regardless of the region, ranking, and season. This bot lives on the AWS EC2 server for 24/7 availability. The code can be found on my <a href="https://github.com/ericpak/Deckard-Cain">Github</a> Site or for more details on the bot you can click <a href="https://ericpak.github.io/Deckard-Cain/">Here</a>.</p>,
         images: [
           {
             image: deckardCainHelp,
             imageAlt: 'Help',
             imageTitle: 'help',
             description: "Getting info on the commands for the bot.",
           },
           {
             image: deckardCainMonk,
             imageAlt: 'Monk',
             imageTitle: 'monk',
             description: 'Getting information on the monk ladder on the korean servers.',
           },
           {
             image: deckardCainTeam4,
             imageAlt: 'Team 4',
             imageTitle: 'team4',
             description: 'Getting information on the ladder for teams of 4.',
           },
         ],
       },
      ]
    })
  }

  changeZ() {
    this.props.changeZ("dc");
  }

  render() {
    let projectItems;
    projectItems = this.state.projects.map(project => {
      return (
        <ProjectItem key={project.title} project={project} changeZ={this.changeZ.bind(this)} />
      );
    });
    return (
      <div className="wrap projects">
          {projectItems}
      </div>
    );
  }
}

export default DcProject;
