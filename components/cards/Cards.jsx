import Card from "./Card";
import "./Card.css";

const Cards = () => {
  return (
    <section className="content-area-cards">
      <Card
        colors={["#e4e8ef", "#475be8"]}
        percentFillValue={80}
        cardInfo={{
          title: "Todays Sales",
          value: "$20.4K",
          text: "We have sold 123 items.",
        }}
      />
      <Card
        colors={["#e4e8ef", "#4ce13f"]}
        percentFillValue={50}
        cardInfo={{
          title: "Todays Revenue",
          value: "$8.2K",
          text: "Available to payout",
        }}
      />
      <Card
        colors={["#e4e8ef", "#f29a2e"]}
        percentFillValue={40}
        cardInfo={{
          title: "In Escrow",
          value: "$18.2K",
          text: "Available to payout",
        }}
      />
    </section>
  );
};

export default Cards;