import React, { Component } from 'react'

import Typography from 'material-ui/Typography'

import Skill from './SkillListItem'
import './SkillsSection.css'
import skills from '../data/skills.json'

class SkillsSection extends Component {
  render () {
    return (
      <section>
        <Typography type="headline" gutterBottom>
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
