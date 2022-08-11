import Auth from "../utils/auth";
import { useQuery } from "@apollo/client";
import "../styles/buttons.css";

import { QUERY_SINGLE_USER } from "../utils/queries";

const ProfilePage = () => {
  const { loading, data } = useQuery(QUERY_SINGLE_USER, {
    variables: { id: Auth.getProfile().data._id },
  });
  // const { loading, data } = useQuery(QUERY_SINGLE_USER, {
  //   variables: { id: Auth.getProfile().data._id },
  // });

  // console.log(data);

  // const user = data?.user || [];

  const { data } = useQuery(QUERY_SINGLE_USER);
  let user;

  if (data) {
    user = data.user;
  }

  console.log("I am", user);

  const styles = {
    mainContainerStyle: {
      height: "80vh",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      margin: "1rem",
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
      border: ".1rem solid black",
      marginLeft: ".8rem",
    },
    petriDishContainerStyle: {
      height: "70%",
      width: "100%",
      border: ".1rem solid black",
      marginTop: ".5rem",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
    personalInfoContainerStyle: {
      height: "30%",
      width: "100%",
      border: ".1rem solid black",
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
  };

  return (
    <div style={styles.mainContainerStyle}>
      <div style={styles.infoContainerStyle}>
        <div style={styles.personalInfoContainerStyle}>
          <h1 style={styles.sectionTitleStyle}>Personal Information</h1>
          <div style={styles.peronalItemContainerStyle}>
            <p style={styles.personalInfoItemsStyle}>Email:</p>
            <p>{Auth.getProfile().data.email}</p>
            <button style={styles.updateButtonStyle}>update</button>
          </div>
          <div style={styles.peronalItemContainerStyle}>
            <p style={styles.personalInfoItemsStyle}>Password:</p>
            <p>************</p>
            <button style={styles.updateButtonStyle}>update</button>
          </div>
        </div>
        <div style={styles.petriDishContainerStyle}>
          <h1 style={styles.sectionTitleStyle}>Petri Dish</h1>
          <div style={styles.amoebaContainerStyle}>
            {/* to do render number of aemoba and return emoji */}
            &#x1F9A0;&#x1F9A0;&#x1F9A0;&#x1F9A0;
            &#x1F9A0;&#x1F9A0;&#x1F9A0;&#x1F9A0;
          </div>
          <div style={styles.redeemStyle}>
            {/* to do get ameoba count */}
            <p>Amoeba Count: 8</p>
            <button style={styles.updateButtonStyle}>redeem</button>
            <p>*redeem 100 amoeba for a free plushie</p>
          </div>
        </div>
      </div>
      <div style={styles.transactionContainerStyle}>
        <h1 style={styles.sectionTitleStyle}>Transaction History</h1>
        <table style={styles.tableStyles}>
          <tr style={styles.tableRowStyle}>
            <th style={styles.tableHeaderStyle}>Type</th>
            {user ? (
              <>
                {user.orders.map((order) => (
                  <td key={order._id}>{order.product.name}</td>
                ))}
              </>
            ) : null}
            <th style={styles.tableHeaderStyle}>Amount</th>
            {user ? (
              <>
                {user.orders.map((order) => (
                  <td key={order._id}>{order.product.price}</td>
                ))}
              </>
            ) : null}
            <th style={styles.tableHeaderStyle}>Date</th>
            <tr>
              {user ? (
                <>
                  {user.orders.map((order) => (
                    <td key={order._id}>
                      {" "}
                      {new Date(
                        parseInt(order.purchaseDate)
                      ).toLocaleDateString()}
                    </td>
                  ))}
                </>
              ) : null}
            </tr>
          </tr>
        </table>
      </div>
    </div>
  );
};

export default ProfilePage;
