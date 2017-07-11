import React, { Component } from 'react';

const SkillListemItem = (props) => {
  const { skill } = props
  return (
    <li><strong>{skill.title}</strong> {skill.subtitle}</li>
  );
}

export default SkillListemItem;
