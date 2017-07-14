import React, { Component } from 'react'

import Grid from 'material-ui/Grid'
import Typography from 'material-ui/Typography'

import Project from './ProjectDetail'
import './ProjectsSection.css'

import data from '../../data/projects'

class ProjectsSection extends Component {
  render () {
    return (
      <section id="projects">
        <Typography type="headline" component="h2">
          Projects
        </Typography>

        <p className="basic-text">
          These are a few of the projects I have built outside of my day job. I work full-time and like to uphold the
          belief that I have a life, so my time is fairly limited, but I do my best to continue learning new things and
          build somewhat substantial projects into which I can apply said things.
        </p>

        <p className="basic-text">
          These all include notes, demos, and source code. Some of the GitHub repos have pretty extensive notes and
          docs, and others... not so much.
        </p>

        <Grid container gutter={40} className="projects-list">
          {data.map(project => {
            return (
              <Grid item xs={12} sm={6} key={project.title}>
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
