import React from 'react'
import { shape, string } from 'prop-types'

const SkillListemItem = (props) => {
  const { skill } = props
  return (
    <li><strong>{skill.title}</strong> {skill.subtitle}</li>
  )
}

SkillListemItem.propTypes = {
  skill: shape({
    title: string.isRequired,
    subtitle: string
  }).isRequired
}

export default SkillListemItem
