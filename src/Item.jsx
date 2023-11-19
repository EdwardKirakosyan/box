import React from "react"

export default function Item({ data }) {
  return (
    <div className="main-container">
      {data.map((e) => (
        <div className="film-item" key={e.rank}>
          <img className="film-image" src={e.image} alt="" />
          <p className="film-name">{e.title}</p>
        </div>
      ))}
    </div>
  )
}
