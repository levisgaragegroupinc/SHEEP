import React from 'react'

const Donate = () => {
    const style = {
        mainContainerStyle: {
            height: "85vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          },
          projectStyle: {
            height: "25%",
            width: "25%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          },
    }
  return (
    <div style={style.mainContainerStyle}>
      Donate Page
    </div>
  )
}

export default Donate
