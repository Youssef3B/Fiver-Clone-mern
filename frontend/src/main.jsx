import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { UserIsLoginProvider } from "./contexts/UserContext.jsx";
import { ServiceProvider } from "./contexts/ServiceContext.jsx";
import { CommentProvider } from "./contexts/CommentContext.jsx";
import { FavoriteProvider } from "./contexts/FavoritContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <FavoriteProvider>
      <CommentProvider>
        <UserIsLoginProvider>
          <ServiceProvider>
            <App />
          </ServiceProvider>
        </UserIsLoginProvider>
      </CommentProvider>
    </FavoriteProvider>
  </React.StrictMode>
);
