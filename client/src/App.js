import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";

<<<<<<< HEAD
import Home from "./pages/Home";
import Detail from "./pages/Detail";
import NoMatch from "./pages/NoMatch";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Nav from "./components/Nav";
import { StoreProvider } from "./utils/GlobalState";
import Success from "./pages/Success";
import OrderHistory from "./pages/OrderHistory";

const httpLink = createHttpLink({
  uri: "/graphql",
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem("id_token");
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div>
          <StoreProvider>
            <Nav />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/success" element={<Success />} />
              <Route path="/orderHistory" element={<OrderHistory />} />
              <Route path="/products/:id" element={<Detail />} />
              <Route path="*" element={<NoMatch />} />
            </Routes>
          </StoreProvider>
        </div>
      </Router>
    </ApolloProvider>
=======
import Navbar from "./components/Navbar";
import ProfilePage from "./pages/ProfilePage";
import Homepage from "./pages/Homepage";
import ProjectPage from "./pages/ProjectPage";
import DonatePage from "./pages/Donate";
import SuccessPage from "./pages/SuccessPage";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Homepage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/projectPage" element={<ProjectPage />} />
          <Route path="/donate" element={<DonatePage />} />
          <Route path="/success" element={<SuccessPage />} />
        </Routes>
      </div>
    </Router>
>>>>>>> 5b4e82c (added temp sucess page)
  );
}

export default App;
