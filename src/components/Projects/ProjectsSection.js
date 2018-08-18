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
          A handful of non-work-related projects I have built when I have had some free time. Time and energy to work on
          this kind of stuff outside of work is generally fairly limited, but I do my best to ensure I stay up-to-date
          on new technologies and push myself to learn new things and apply them in a project somewhere.
        </p>

        <p className="basic-text">
          These all include notes, demos, and source code. Some of the GitHub repos have pretty extensive notes and
          docs, and others... not so much.
        </p>

        <p className="basic-text">
          (There are more repos for a handful of various older and smaller projects available{' '}
          <a href="https://github.com/gargrave?tab=repositories" target="_blank" rel="noopener noreferrer">
            here
          </a>{' '}
          as well, but they are not as user-friendly as the ones listed below, so proceed at your own risk!)
        </p>

        <Grid container gutter={40} className="projects-list">
          {data.map((project, i) => {
            return (
              <Project key={i} project={project} />
            )
          })}
        </Grid>
      </section>
    )
  }
}

export default ProjectsSection
