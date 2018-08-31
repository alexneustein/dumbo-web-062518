import React from 'react'

const WidgetSelector = (props) => {

  return (
    <div className="app-children">
      <button onClick={props.handleShow}>
        Show Stuff
      </button>
    </div>
  )
}

export default WidgetSelector
