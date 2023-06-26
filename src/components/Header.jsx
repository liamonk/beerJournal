import React from "react";

export default function Header() {
  return (
    <header className="heading">
      <div style={{display: "flex", alignItems: "center", justifyContent:"center"}}><img className="heading-icon" src="./hops.png"></img></div>
      <h1>my brewing diary</h1>
    </header>
  );
}
