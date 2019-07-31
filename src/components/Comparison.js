// Comparison Page Component

import React from "../../node_modules/react";
import { Container } from "../../node_modules/semantic-ui-react";
import ProductCard from "./ProductCard";
import ComparisonPage from "./ComparisonPage"

const Comparison = () => {
  return (
    <div>
      <Container style={{ display: "flex", justifyContent: "center" }}>
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </Container>
      <ComparisonPage />
    </div>
  );
};

export default Comparison;