const Donate = () => {
  const styles = {
    mainContainerStyle: {
      height: "85vh",
      display: "flex",
      justifyContent: "space-around",
      alignItems: "center",
    },
    projectContainerStyle: {
      height: "100%",
      width: "50%",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-around",
      alignItems: "center",
    },
    donateContainerStyle: {
      height: "100%",
      width: "50%",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-around",
      alignItems: "center",
    },
  };
  return (
    <div>
      <div style={styles.mainContainerStyle}>
        <div style={styles.projectContainerStyle}>
          <h1>Project Title</h1>
          <h1>Project Image</h1>
        </div>
        <div style={styles.donateContainerStyle}>
            <p>How much would u like to contribute?</p>
            <div>render donation amounts</div>
            <div><button>Donate - goes to swipe payment page</button></div>
        </div>
      </div>
    </div>
  );
};

export default Donate;
