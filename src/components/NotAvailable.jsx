import React from 'react'

const NotAvailable = () => {
  return (
    <h1 style={{
      background:"#141414",
      color:"white",
      fontSize:"2rem",
      fontWeight:"bold",
      textAlign:"center",
      padding:"20px 30px",
      margin:"50px 0",
      borderRadius:"5px",
      boxShadow:"0 4px 10px rgba(0,0,0,0.5"
    }}>
      No Movies available for the selected genre. Please select a different
      genre.
    </h1>
  )
}

export default NotAvailable