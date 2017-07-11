import React from 'react'
import { shape, string } from 'prop-types'

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
        This is the projects subtitle!
      </Typography>

      <Typography type="body1" component="p" gutterBottom>
        This is a description of the project!
      </Typography>
    </Paper>
  )
}

ProjectDetail.propTypes = {
  project: shape({
    title: string.isRequired
  }).isRequired
}

export default ProjectDetail
