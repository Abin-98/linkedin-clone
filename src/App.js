import React from "react";
import "./App.css";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Feed from "./Feed";
import { useSelector } from "react-redux";
import { selectUser } from "./features/userSlice";
import Login from "./Login";
import Widget from "./Widget";

function App() {
  const user = useSelector(selectUser);
  return (
    <div className="app">
      <Header />

      {!user ? (
        <Login />
      ) : (
        <div className="container">
        <div className="app__body">
          <Sidebar />
          <Feed />
          <Widget/>
        </div>
        </div>
      )}
    </div>
  );
}

export default App;
