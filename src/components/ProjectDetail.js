import React from 'react'
import { shape, string } from 'prop-types'

import Button from 'material-ui/Button'
import Paper from 'material-ui/Paper'
import Typography from 'material-ui/Typography'

import './ProjectDetail.css'

const ProjectDetail = (props) => {
  const { project } = props

  return (
    <Paper className="project-detail">
      <Typography type="headline" component="h3" gutterBottom>
        {project.title}
      </Typography>
      <Typography type="subheading" component="h4" gutterBottom>
        {project.subtitle}
      </Typography>
      <Typography type="body1" component="p" gutterBottom>
        {project.description}
      </Typography>

      <hr/>

      <Typography type="subheading" component="h4" gutterBottom>
        Related links:
      </Typography>

      <Button
        className="project-link-btn"
        raised color="primary"
        href={project.demoUrl}
        target="_blank" rel="noopener noreferrer">
        Demo
      </Button>

      {!!project.githubUrlClient &&
      <Button
        className="project-link-btn"
        raised color="accent"
        href={project.githubUrlClient}
        target="_blank" rel="noopener noreferrer">
        Github (Client)
      </Button>
      }

      {!!project.githubUrlServer &&
      <Button
        className="project-link-btn"
        raised color="accent"
        href={project.githubUrlServer}
        target="_blank" rel="noopener noreferrer">
        Github (Server)
      </Button>
      }
    </Paper>
  )
}

ProjectDetail.propTypes = {
  project: shape({
    title: string.isRequired,
    subtitle: string.isRequired,
    description: string.isRequired,
    demoUrl: string.isRequired,
    githubUrlClient: string,
    githubUrlServer: string
  }).isRequired
}

export default ProjectDetail
