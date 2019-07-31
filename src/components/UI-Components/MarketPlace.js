import React from '../../../node_modules/react'

import ComparisonList from "./ComparisonList";

import OtherItems from "./OtherItems";
import TopImage from "./TopImage";
import Info from "./Info";

export default function MarketPlace() {
    return (
      <div>
        {/* <SearchBar/> */}
        
        <div className="container-flex">
          <TopImage />
          <Info />
        </div>
        <ComparisonList />
        <OtherItems />
      </div>
    );
}
