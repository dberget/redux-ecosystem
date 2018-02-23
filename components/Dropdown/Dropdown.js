import React, { Component, Fragment } from "react"
import Category from "./Category"

const Dropdown = ({ categories }) => {
  return (
    <Fragment>
      <div>Categories:</div>
      <ul>
        {categories.map(category => (
          <Category key={category.name} category={category} />
        ))}
      </ul>
      <style jsx>{`
        div {
          margin: 0 auto;
          margin-left: 10px;
        }

        ul {
          margin: 10px auto;
          overflow: scroll;
        }

        li {
          margin-bottom: 3px;
          font-weight: 400;
        }
      `}</style>
    </Fragment>
  )
}

export default Dropdown
