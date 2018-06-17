import React, { Component } from 'react';
import classNames from "classnames";
import ProjectItem from "./projectItem";

// Images for project

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
          title: 'Permission Impossible',
          technologies: ['HTML', 'ASP.NET', 'SQL', 'C#', 'Bootstrap'],
          description: 'Rilke Schule is a German school of arts and science charter school. The presented problem was managing student permission slips to be more convenient for all parties. The purposed solution was to make a web app where parents could sign off on their children. The online solution removes the student as the middle man, which removes the unreliable delivery of the permission slip to and from the parent. It also reduces the use of paper.',
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
              description: 'The users \'manage student\' page. Here you can view and edit the students assigned to your account.',
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

  changeZ() {
    this.props.changeZ("rs");
  }

  render() {
    let projectItems;
    projectItems = this.state.projects.map(project => {
      return (
        <ProjectItem key={project.title} project={project} changeZ={this.changeZ.bind(this)} />
      );
    });
    return (
      <span className="wrap projects" onClick={this.changeZ.bind(this)}>
          {projectItems}
      </span>
    );
  }
}

export default Projects;
