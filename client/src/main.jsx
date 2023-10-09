import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Auth0Provider } from "@auth0/auth0-react";
import { MantineProvider } from "@mantine/core";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <MantineProvider>
      <Auth0Provider
        domain="dev-xzxfi4al6uw3cry0.us.auth0.com"
        clientId="RyNCdUKx1sdBxOgEQySW0nWJNcHh7zhE"
        authorizationParams={{
          redirect_uri: "http://localhost:5173",
        }}
        audience="http://localhost:8000"
        scope="openid profile email"
      >
        <App />
      </Auth0Provider>
    </MantineProvider>
  </React.StrictMode>
);
