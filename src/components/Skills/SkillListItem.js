import React from 'react'
import { shape, string } from 'prop-types'

import Markdown from 'markdown-it'

const md = new Markdown()

const SkillListemItem = props => {
  const { skill } = props
  return (
    <li>
      <strong dangerouslySetInnerHTML={{ __html: md.renderInline(skill.title) }} />
      &nbsp;
      <span dangerouslySetInnerHTML={{ __html: md.renderInline(skill.subtitle) }} />
    </li>
  )
}

SkillListemItem.propTypes = {
  skill: shape({
    title: string.isRequired,
    subtitle: string
  }).isRequired
}

export default SkillListemItem
