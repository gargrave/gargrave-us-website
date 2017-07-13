import React from 'react'
import { shape, string } from 'prop-types'

import Button from 'material-ui/Button'

import './ProjectLinkButton.css'

const ProjectLinkButton = props => {
  const { link } = props

  return (
    <Button
      className="project-link-btn"
      raised
      color={link.color || 'accent'}
      href={link.url}
      target="_blank"
      rel="noopener noreferrer"
    >
      {link.title}
    </Button>
  )
}

ProjectLinkButton.propTypes = {
  link: shape({
    title: string.isRequired,
    url: string.isRequired,
    color: string
  }).isRequired
}

export default ProjectLinkButton
