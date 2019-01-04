import React from 'react'

const Techlist = (props) => (
  <div>
    <ul>
      {props.tech.map(tech => <li key={tech} >{tech}</li>)}
    </ul>
  </div>
)

export default Techlist