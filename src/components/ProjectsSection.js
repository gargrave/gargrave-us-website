import React, { Component } from 'react'

import Grid from 'material-ui/Grid'
import Typography from 'material-ui/Typography'

import Project from './ProjectDetail'
import projects from '../data/projects.json'

import './ProjectsSection.css'

class ProjectsSection extends Component {
  render () {
    return (
      <section>
        <Typography type="headline" gutterBottom>
          Projects
        </Typography>

        <Grid container gutter={40} className="projects-list">
          {projects.map(project => {
            return (
              <Grid item xs={12} sm={6} md={4} key={project.title}>
                <Project project={project} />
              </Grid>
            )
          })}
        </Grid>
      </section>
    )
  }
}

export default ProjectsSection
