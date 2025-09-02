import React from "react"
import "./style.css"

function PatternGrid() {
  const shapes = Array.from({ length: 21 })

  return (
    <div className="pattern">
      {shapes.map((_, i) => (
        <div className="shape" key={i}></div>
      ))}
    </div>
  )
}

export default PatternGrid
