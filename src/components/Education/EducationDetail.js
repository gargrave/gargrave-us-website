import React, { Component } from 'react'
import { shape, string } from 'prop-types'

import Markdown from 'markdown-it'

const md = new Markdown()

class EducationDetail extends Component {
  render () {
    const { detail } = this.props
    return (
      <ul className="education-detail">
        <li>
          <strong dangerouslySetInnerHTML={{ __html: md.renderInline(detail.title) }} />
        </li>
        <li dangerouslySetInnerHTML={{ __html: md.renderInline(detail.location) }} />
      </ul>
    )
  }
}

EducationDetail.propTypes = {
  detail: shape({
    title: string.isRequired,
    location: string.isRequired
  }).isRequired
}

export default EducationDetail
