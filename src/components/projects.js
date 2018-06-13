import React, { Component } from 'react';
import classNames from "classnames";
import ProjectItem from "./projectItem";

// Images for project
import deckardCainHelp from "../assets/images/deckardCain/deckard_cain_help.png";
import deckardCainMonk from "../assets/images/deckardCain/deckard_cain_monk_kr.png";
import deckardCainTeam4 from "../assets/images/deckardCain/deckard_cain_team4.png";

import redBeanie from "../assets/images/ericpak/redBeanie.png";
import hi from "../assets/images/ericpak/hi.png";
import mtBear from "../assets/images/ericpak/mountainBear3.png";
import toolbar from "../assets/images/ericpak/toolbar.png";
import gameDay1 from "../assets/images/game/gameDev_day1.png";
import gameDay3 from "../assets/images/game/gameDev_day3.png";
import gameDay5 from "../assets/images/game/gameDev_day5.png";

import snap from "../assets/images/snap/SNAP.png";
import snap_moby from "../assets/images/snap/moby_dick.png";
import snap_frontend from "../assets/images/snap/snap_frontEnd.png";
import snap_zoom1 from "../assets/images/snap/snap_zoomed1.png";
import snap_zoom2 from "../assets/images/snap/snap_zoomed2.png";
import snap_solid from "../assets/images/snap/solid_layout.png";

import rilke from "../assets/images/rilke/rilke_homepage.png";
import management from "../assets/images/rilke/rilke_adminFieldtripManagement.png";
import viewTrips from "../assets/images/rilke/rilke_viewAllTrips.png";
import addTrip from "../assets/images/rilke/rilke_addTrip.png";
import rilkeLogin from "../assets/images/rilke/rilke_login.png";
import manageStudent from "../assets/images/rilke/rilke_manageStudent.png";
import slip from "../assets/images/rilke/rilke_permissionSlip.png";

// ▴Home

class Projects extends Component {
  getClassName() {
    return classNames("Projects");
  }

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
          title: 'Rilke Schule Field Trip Permission Slip',
          technologies: ['HTML', 'ASP.NET MVC', 'SQL', 'C#', 'Bootstrap'],
          description: 'Rilke Schule is a German school of arts and science charter school. The presented problem was managing student permission slips to be more convenient for all parties. The purposed solution was to make a web app where parents could sign off on their child(ren). The online solution removes the student as the middle man, which removes the unreliable delivery of the permission slip to and from the parent. It also reduces the use of paper.\n To develop our web app we decided to use ASP.NET MVC because the school district uses ASP.NET.',
          images: [
            {
              image: rilke,
              imageAlt: 'homepage',
              imageTitle: 'rilke',
              description: 'The homepage for Rilke Schule Permission Slip',
            },
            {
              image: management,
              imageAlt: 'management',
              imageTitle: 'management',
              description: 'The admin field trip management page.',
            },
            {
              image: viewTrips,
              imageAlt: 'view current field trips',
              imageTitle: 'viewTrips',
              description: 'The admin view of the trips. Here you can see who has signed their permission slip.',
            },
            {
              image: addTrip,
              imageAlt: 'add trip',
              imageTitle: 'addTrip',
              description: 'The admin add trip page. The admin can create new field trips here to be sent out to the parents of the appropriate class.',
            },
            {
              image: rilkeLogin,
              imageAlt: 'Rilke Schule login page',
              imageTitle: 'rilkeLogin',
              description: 'The Rilke Schule login page.',
            },
            {
              image: manageStudent,
              imageAlt: 'Manage Student Page',
              imageTitle: 'manageStudent',
              description: 'The users manage student page. Here you can view the students assigned to your account. You can also delete a student or add a new student of you know the correct credentials for the student.',
            },
            {
              image: slip,
              imageAlt: 'Permission slip page',
              imageTitle: 'slip',
              description: 'The permission slip page.',
            },
          ],
        },
      ]
    })
  }

  render() {
    let projectItems;
    projectItems = this.state.projects.map(project => {
      return (
        <ProjectItem key={project.title} project={project} />
      );
    });
    return (
      <div className="wrap projects">
          {projectItems}
      </div>
    );
  }
}

export default Projects;
