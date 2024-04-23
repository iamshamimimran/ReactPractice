import React from 'react'
import './Alert.css'

function Alert(props) {
  return (
    props.alert && (
      <div className="alert-container">
        <div className="alert alert-success alert-dismissible fade show" role="alert">
          <strong>{props.alert.type}</strong>{props.alert.message}
        </div>
      </div>
    )
  )
}

export default Alert