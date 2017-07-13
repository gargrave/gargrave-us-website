import React from 'react'
import { array, shape, string } from 'prop-types'

import { markdown } from 'markdown'
import Paper from 'material-ui/Paper'
import Typography from 'material-ui/Typography'

import './ProjectDetail.css'
import ProjectLinkButton from './ProjectLinkButton'

const ProjectDetail = props => {
  const { project } = props

  return (
    <Paper className="project-detail">
      <div className="project-detail-title">
        <Typography type="headline" component="h3" gutterBottom>
          {project.title}
        </Typography>
      </div>

      <div className="project-detail-body">
        <Typography
          type="subheading"
          component="h4"
          dangerouslySetInnerHTML={{ __html: markdown.toHTML(project.subtitle) }}
        />

        {project.description.map((d, i) => {
          return (
            <Typography type="body1" component="p" key={i} dangerouslySetInnerHTML={{ __html: markdown.toHTML(d) }} />
          )
        })}

        <hr />
        <Typography type="subheading" component="h4" gutterBottom>
          Related links:
        </Typography>

        {project.links && project.links.map((link, i) => <ProjectLinkButton key={link.url} link={link} />)}
      </div>
    </Paper>
  )
}

ProjectDetail.propTypes = {
  project: shape({
    title: string.isRequired,
    subtitle: string.isRequired,
    description: array.isRequired,
    links: array
  }).isRequired
}

export default ProjectDetail
