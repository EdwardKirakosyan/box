import React from "react"

export default function Item({ data }) {
  return (
    <div>
      {data.map((e) => (
        <div key={e.rank}>
          <h1>{e.title}</h1>
          <img src={e.image} alt="" />
        </div>
      ))}
    </div>
  )
}
