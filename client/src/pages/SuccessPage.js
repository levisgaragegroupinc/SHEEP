import React from 'react'
import background from '../assets/virus-gab3ed1248_1920.jpg'


const SuccessPage = () => {
  const styles = {
    mainContainerStyle: {
      height: "85vh",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      color: "#FFFFFF",
      fontWeight: "bolder",
    },
  };
  return (
    <div style={{ backgroundImage: `url(${background})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>
      <div style={styles.mainContainerStyle}>
        <h1>Thank You for you donation!</h1>
        <p>ameobas earned (link to profile)</p>
        <p>link to home page</p>
      </div>
    </div>
  )
}

export default SuccessPage
