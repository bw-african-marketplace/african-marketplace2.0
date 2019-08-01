// Comparison Page Component

// NEED TO UPDATE EACH CARD TO BE A LINK

import React from "react";
import { Container, Header, Grid, Card, Image, Link } from "semantic-ui-react";
import ComparisonPage from "./CategoryItems"
import CategoryCard from "./CategoryCard"


const CategoriesPage = () => {
  
  // const animalProducts = require("../images/categories/meats.jpg")
  // const beans = require("../images/categories/beans.jpg")
  // const maize = require("../images/categories/maize.jpg")
  // const rice = require("../images/categories/rice.jpg")
  // const cerealOther = require("../images/categories/wheat.jpg")
  // const fruit = require("../images/categories/fruit.jpg")
  // const peas = require("../images/categories/peas.jpg")
  // const roots = require("../images/categories/roots.jpg")
  // const other = require("../images/categories/coffee.jpg")
  // const vegetables = require("../images/categories/vegetables.jpg")
  // const nuts = require("../images/categories/nuts.jpg")

  return (
    <div>
      <Container style={{ display: "flex", flexDirection: "row", flexWrap: "wrap", justifyContent: "center" }}>
        <CategoryCard />
      </Container>
    </div>
  );
};

export default CategoriesPage;

//style={{ display: "flex", justifyContent: "center", flexWrap: "wrap" }}