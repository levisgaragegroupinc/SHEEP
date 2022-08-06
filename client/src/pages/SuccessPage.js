import React from 'react'

const SuccessPage = () => {
    const styles = {
        mainContainerStyle: {
          height: "85vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        },
      };
  return (
    <div style={styles.mainContainerStyle}>
        <h1>Thank You for you donation!</h1>
        <p>ameobas earned (link to profile)</p>
        <p>link to home page</p>

    </div>
  )
}

export default SuccessPage
