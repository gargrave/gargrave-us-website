import React, { Component } from 'react'

import Typography from 'material-ui/Typography'

import Skill from './SkillListItem'
import './SkillsSection.css'

import data from '../../data/skills'

class SkillsSection extends Component {
  render () {
    return (
      <section id="skills">
        <Typography type="headline" component="h2">
          Skills
        </Typography>

        <ul className="skills-list">
          {data.map((skill, i) => <Skill key={i} skill={skill} />)}
        </ul>
      </section>
    )
  }
}

export default SkillsSection
