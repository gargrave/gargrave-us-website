import React from 'react'
import { array, shape, string } from 'prop-types'

import Paper from 'material-ui/Paper'
import Typography from 'material-ui/Typography'

import './ProjectDetail.css'
import ProjectLinkButton from './ProjectLinkButton'

import Markdown from 'markdown-it'
const md = new Markdown()

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
          dangerouslySetInnerHTML={{ __html: md.renderInline(project.subtitle) }}
        />

        {project.description.map((d, i) => {
          return <p key={i} dangerouslySetInnerHTML={{ __html: md.renderInline(d) }} />
        })}

        <hr />
        <Typography type="subheading" component="h5" className="project-detail-related-links" gutterBottom>
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
