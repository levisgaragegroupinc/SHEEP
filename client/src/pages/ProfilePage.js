import React from "react";

const ProfilePage = () => {
  const styles = {
    mainContainerStyle: {
      height: "85vh",
      display: "flex",
      justifyContent: "space-around",
      alignItems: "center",
    },
    infoContainerStyle: {
      height: "50%",
      display: "flex",
      flexDirection: "column",
    },
  };

  return (
    <div style={styles.mainContainerStyle}>
      <div style={styles.infoContainerStyle}>
        <div>
          <h1>Personal Information</h1>
          <div>
            <div>
              <p>UserName:</p>
              <button>change UserName</button>
            </div>
            <div>
              <p>Email:</p>
              <button>change Email</button>
            </div>
            <div>
              <p>Password:</p>
              <button>change Password</button>
            </div>
          </div>
          <div>
            <h1>Petri Dish</h1>
            <div>&#x1F9A0;&#x1F9A0;&#x1F9A0;&#x1F9A0;</div>
            <p>*redeem 100 amoebae for a free plushie</p>
            <button>redeem</button>
          </div>
        </div>
      </div>

      <div>
        <h1>Transaction History</h1>
        <div> amount</div>
      </div>
    </div>
  );
};

export default ProfilePage;
