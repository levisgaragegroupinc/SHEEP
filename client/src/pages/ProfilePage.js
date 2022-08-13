import Auth from "../utils/auth";
import { useQuery } from "@apollo/client";
import "../styles/buttons.css";
import background from "../assets/virus-gab3ed1248_1920.jpg";

import { QUERY_SINGLE_USER } from "../utils/queries";

const ProfilePage = () => {
  const { data } = useQuery(QUERY_SINGLE_USER);
  let user;

  if (data) {
    user = data.user;
  }

  const styles = {
    mainContainerStyle: {
      height: "80vh",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      margin: "1rem",
    },
    infoContainerStyle: {
      height: "80%",
      width: "50%",
      display: "flex",
      flexDirection: "column",
    },
    transactionContainerStyle: {
      height: "60%",
      width: "50%",
      border: ".1rem solid black",
      marginLeft: ".8rem",
      backgroundColor: "white",
      borderRadius: "75px",
    },
    petriDishContainerStyle: {
      height: "65%",
      width: "100%",
      border: ".1rem solid black",
      marginTop: ".5rem",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      borderRadius: "75px",
      overflow: "auto",
      backgroundColor: "white",
      textAlign: "center",
    },
    personalInfoContainerStyle: {
      height: "30%",
      width: "100%",
      border: ".1rem solid black",
      backgroundColor: "white",
      borderRadius: "75px",
    },
    sectionTitleStyle: {
      textAlign: "center",
      textDecoration: "underline",
      marginBottom: "1rem",
    },
    peronalItemContainerStyle: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      height: "25%",
    },
    personalInfoItemsStyle: {
      fontSize: "1.2rem",
      margin: "1.5rem",
      textDecoration: "underline",
      textUnderlineOffset: ".1rem",
    },
    updateButtonStyle: {
      margin: "1rem",
      padding: "3px 9px",
      borderRadius: "6px",
      border: "1px ",
      fontSize: "14px",
      fontWeight: "400",
    },
    amoebaContainerStyle: {
      display: "flex",
      flexWrap: "wrap",
      height: "70%",
      marginTop: "1rem",
      fontSize: "2.5rem",
    },
    tableStyles: {
      height: "90%",
      width: "100%",
      marginTop: "1rem",
    },
    tableRowStyle: {
      display: "flex",
      justifyContent: "space-around",
      marginTop: "1rem",
    },
    tableHeaderStyle: {
      fontSize: "1.3rem",
      textDecoration: "underline",
      textUnderlineOffset: ".1rem",
    },
    redeemStyle: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
    },
    donationAmountStyle: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
    },
    donationNameContainer: {
      display: "flex",
      flexWrap: "wrap",
      alignItems: "center",
      justifyContent: "center",
      padding: "20px",
    },
  };

  let sum = 0;
  const handlePriceAddition = async () => {
    let productArray = [];
    let priceArray = [];

    let orders = user.orders;

    for (let i = 0; i < orders.length; i++) {
      productArray.push(orders[i].product);
    }

    for (let i = 0; i < productArray.length; i++) {
      for (let j = 0; j < productArray[i].length; j++) {
        priceArray.push(productArray[i][j].price);
      }
    }

    for (let i = 0; i < priceArray.length; i++) {
      sum += priceArray[i];
    }

    return sum;
  };

  let amoeba = 0;
  if (data) {
    handlePriceAddition();
    amoeba = sum / 10;
  }

  let friend = 0;
  let supporter = 0;
  let champion = 0;
  let advocate = 0;
  let ally = 0;
  let defender = 0;
  let benefactor = 0;

  const handleNameQuantity = async () => {
    let productArray = [];
    let nameArray = [];

    let orders = user.orders;

    for (let i = 0; i < orders.length; i++) {
      productArray.push(orders[i].product);
    }

    for (let i = 0; i < productArray.length; i++) {
      for (let j = 0; j < productArray[i].length; j++) {
        nameArray.push(productArray[i][j].name);
      }
    }

    if (nameArray.includes("Friend")) {
      friend += 1;
    }
    if (nameArray.includes("Champion")) {
      champion += 1;
    }
    if (nameArray.includes("Supporter")) {
      supporter += 1;
    }
    if (nameArray.includes("Advocate")) {
      advocate += 1;
    }
    if (nameArray.includes("Ally")) {
      ally += 1;
    }
    if (nameArray.includes("Defender")) {
      defender += 1;
    }
    if (nameArray.includes("Benefactor")) {
      benefactor += 1;
    }

    return friend, champion, supporter, ally, benefactor, defender, advocate;
  };

  if (data) {
    handleNameQuantity();
  }

  return (
    <div
      style={{
        backgroundImage: `url(${background})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div className="profileMobile" style={styles.mainContainerStyle}>
        <div className="infoMobile" style={styles.infoContainerStyle}>
          <div className="personalMobile" style={styles.personalInfoContainerStyle}>
            <h1 style={styles.sectionTitleStyle}>Personal Information</h1>
            <div className="personalContainerMobile" style={styles.peronalItemContainerStyle}>
              <p style={styles.personalInfoItemsStyle}>Email:</p>
              <p>{Auth.getProfile().data.email}</p>
              {/* <button style={styles.updateButtonStyle}>update</button> */}
            </div>
            <div style={styles.peronalItemContainerStyle}>
              <p style={styles.personalInfoItemsStyle}>Password:</p>
              <p>************</p>
              {/* <button style={styles.updateButtonStyle}>update</button> */}
            </div>
          </div>
          <div style={styles.petriDishContainerStyle}>
            <h1 style={styles.sectionTitleStyle}>Petri Dish</h1>
            <div style={styles.amoebaContainerStyle}>
              <p>{Array(amoeba).fill("🦠")}</p>
            </div>
            <div style={styles.redeemStyle}>
              <p>Amoeba Count: {amoeba}</p>
              <button style={styles.updateButtonStyle}>redeem</button>
              <p>*redeem 100 amoeba for a free plushie</p>
              <p>*Earn 1 amoeba for every $10 donated!</p>
            </div>
          </div>
        </div>
        <div style={styles.transactionContainerStyle}>
          <h1 style={styles.sectionTitleStyle}>Donation Milestones!</h1>
          <div style={styles.donationNameContainer}>
            <p
              style={{
                width: "150px",
                height: "150px",
                borderRadius: "50%",
                alignItems: "center",
                textAlign: "center",
                display: "flex",
                justifyContent: "center",
                border: "1px black solid",
                ...(friend == 1
                  ? { backgroundColor: "var(--dark-02)" }
                  : { backgroundColor: "white", opacity: "50%" }),
              }}
            >
              Friend!
            </p>
            <p
              style={{
                width: "150px",
                height: "150px",
                borderRadius: "50%",
                alignItems: "center",
                textAlign: "center",
                display: "flex",
                justifyContent: "center",
                border: "1px black solid",
                ...(supporter == 1
                  ? { backgroundColor: "var(--dark-02)" }
                  : { backgroundColor: "white", opacity: "50%" }),
              }}
            >
              Supporter!
            </p>
            <p
              style={{
                width: "150px",
                height: "150px",
                borderRadius: "50%",
                alignItems: "center",
                textAlign: "center",
                display: "flex",
                justifyContent: "center",
                border: "1px black solid",
                ...(champion == 1
                  ? { backgroundColor: "var(--dark-02)" }
                  : { backgroundColor: "white", opacity: "50%" }),
              }}
            >
              Champion!
            </p>
            <p
              style={{
                width: "150px",
                height: "150px",
                borderRadius: "50%",
                alignItems: "center",
                textAlign: "center",
                display: "flex",
                justifyContent: "center",
                border: "1px black solid",
                ...(advocate == 1
                  ? { backgroundColor: "var(--dark-02)" }
                  : { backgroundColor: "white", opacity: "50%" }),
              }}
            >
              Advocate!
            </p>
            <p
              style={{
                width: "150px",
                height: "150px",
                borderRadius: "50%",
                alignItems: "center",
                textAlign: "center",
                display: "flex",
                justifyContent: "center",
                border: "1px black solid",
                ...(ally == 1
                  ? { backgroundColor: "var(--dark-02)" }
                  : { backgroundColor: "white", opacity: "50%" }),
              }}
            >
              Ally!
            </p>
            <p
              style={{
                width: "150px",
                height: "150px",
                borderRadius: "50%",
                alignItems: "center",
                textAlign: "center",
                display: "flex",
                justifyContent: "center",
                border: "1px black solid",
                ...(defender == 1
                  ? { backgroundColor: "var(--dark-02)" }
                  : { backgroundColor: "white", opacity: "50%" }),
              }}
            >
              Defender!
            </p>
            <p
              style={{
                width: "150px",
                height: "150px",
                borderRadius: "50%",
                alignItems: "center",
                textAlign: "center",
                display: "flex",
                justifyContent: "center",
                border: "1px black solid",
                ...(benefactor == 1
                  ? { backgroundColor: "var(--dark-02)" }
                  : { backgroundColor: "white", opacity: "50%" }),
              }}
            >
              Benefactor!
            </p>
          </div>
          {user ? (
            <div style={styles.donationAmountStyle}>
              <h2>Total Amount Donated: ${sum}</h2>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
