import React from '../../../node_modules/react'


// import ComparisonList from "./ComparisonList";
import TopImage from "./TopImage";
import Info from "./Info";
// import CategoriesPage from '../CategoriesPage';

export default function MarketPlace() {
    return (
      <div className="container-flex">
          <Info />
          <div>
            <TopImage />
          </div>
      </div>
    );
}