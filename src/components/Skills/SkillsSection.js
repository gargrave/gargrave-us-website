import React, { Component } from 'react'

import Typography from 'material-ui/Typography'

import skills from '../../data/skills.json'

import Skill from './SkillListItem'
import './SkillsSection.css'

class SkillsSection extends Component {
  render () {
    return (
      <section id="skills">
        <Typography type="headline" component="h2">
          Skills
        </Typography>

        <ul className="skills-list">
          {skills.map(skill => <Skill key={skill.title} skill={skill} />)}
        </ul>
      </section>
    )
  }
}

export default SkillsSection
