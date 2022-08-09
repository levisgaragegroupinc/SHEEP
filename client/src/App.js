import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";

import Navbar from "./components/Navbar";
import ProfilePage from "./pages/ProfilePage";
import Homepage from "./pages/Homepage";
import ProjectPage from "./pages/ProjectPage";
import DonatePage from "./pages/Donate";
import SuccessPage from "./pages/SuccessPage";
import SignupForm from "./pages/SignupForm";
import LoginForm from "./pages/LoginForm";
import { StoreProvider } from "./utils/GlobalState";

const httpLink = createHttpLink({
  uri: "http://localhost:3001/graphql",
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
            <Navbar />
            <Routes>
              <Route exact path="/" element={<Homepage />} />
              <Route path="/profile" element={<ProfilePage />} />
              <Route path="/projectPage/:projectId" element={<ProjectPage />} />
              <Route path="/donate/:projectId" element={<DonatePage />} />
              <Route path="/success" element={<SuccessPage />} />
              <Route path="/signup" element={<SignupForm />} />
              <Route path="/login" element={<LoginForm />} />
            </Routes>
          </StoreProvider>
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
