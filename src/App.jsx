import React from "react";
import Header from "./components/Header";
import data from "./data.js";
import Card from "./components/Card";

export default function App() {
  const cards = data.map((cardData) => {
    return <Card key={cardData.id} cardData={cardData} />;
  });
  return (
    <>
      <Header />
      <section className="cards-list">{cards}</section>
    </>
  );
}
