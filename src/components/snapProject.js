import React, { Component } from 'react';
import classNames from "classnames";
import ProjectItem from "./projectItem";

// Images for project

import snap from "../assets/images/snap/SNAP.png";
import snap_moby from "../assets/images/snap/moby_dick.png";
import snap_frontend from "../assets/images/snap/snap_frontEnd.png";
import snap_zoom1 from "../assets/images/snap/snap_zoomed1.png";
import snap_zoom2 from "../assets/images/snap/snap_zoomed2.png";
import snap_solid from "../assets/images/snap/solid_layout.png";

class SnapProject extends Component {
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
          title: 'Semantic Network Analysis Pipeline',
          technologies: ['Python', 'Java', 'NLTK', 'Javascript', 'PHP'],
          description: 'Semantic Network Analysis Pipeline (SNAP) is a data visualization tool. By rendering many 2D networks as a 3D network visualization, a user can view changes in a network by seeing communities of nodes growing and shrinking over periods of time. SNAP is hosted on a server that ties together four modules for a user to upload raw timestamped text documents and perform: Natural Language Processing, Undirected Graph Network Generation, Network Analysis, and 3D Network Visualization.',
          images: [
            {
              image: snap_frontend,
              imageAlt: 'SNAP frontend',
              imageTitle: 'frontend',
              description: 'The frontend of the pipeline',
            },
            {
              image: snap,
              imageAlt: 'wire mesh',
              imageTitle: 'wire',
              description: 'A 3D visualization using the wire mesh layout',
            },
            {
              image: snap_solid,
              imageAlt: 'solid mesh',
              imageTitle: 'solid',
              description: 'A 3D visualization using the solid mesh layout',
            },
            {
              image: snap_zoom1,
              imageAlt: 'zoomed in view',
              imageTitle: 'zoom1',
              description: 'A zoomed in view of a 3D visualization',
            },
            {
              image: snap_zoom2,
              imageAlt: 'another zoomed in view',
              imageTitle: 'zoom2',
              description: 'Another zoomed in view of a 3D visualization',
            },
            {
              image: snap_moby,
              imageAlt: 'moby_dick',
              imageTitle: 'moby_dick',
              description: 'The book moby dick after going through the pipeline',
            },
          ],
        },
      ]
    })
  }

  changeZ() {
    this.props.changeZ("snap");
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

export default SnapProject;
