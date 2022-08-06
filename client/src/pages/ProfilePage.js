const ProfilePage = () => {
  const styles = {
    mainContainerStyle: {
      height: "85vh",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
    },
    infoContainerStyle: {
      height: "100%",
      width: "50%",
      display: "flex",
      flexDirection: "column",
    },
    transactionContainerStyle: {
      height: "100%",
      width: "50%",
    },
    petriDishContainerStyle: {
      height: "50%",
      width: "100%",
    },
  };

  return (
    <div style={styles.mainContainerStyle}>
      <div style={styles.infoContainerStyle}>
        <div>
          <div>
            <h1>Personal Information</h1>
            <p>UserName:</p>
            <button>change UserName</button>
          </div>
          <div>
            <p>Email:</p>
            <button>change Email</button>
            <div>
              <p>Password:</p>
              <button>change Password</button>
            </div>
          </div>
          <div style={styles.petriDishContainerStyle}>
            <h1>Petri Dish</h1>
            <div>&#x1F9A0;&#x1F9A0;&#x1F9A0;&#x1F9A0;</div>
            <p>*redeem 100 amoebae for a free plushie</p>
            <button>redeem</button>
          </div>
        </div>
      </div>

      <div style={styles.transactionContainerStyle}>
        <h1>Transaction History</h1>
        <div> amount</div>
      </div>
    </div>
  );
};

export default ProfilePage;
