import React, { Component }  from 'react';

import Filter from './Filter';
import FilteredFruitList from './FilteredFruitList.js';

const FruitBasket = ({updateFilterCallback, currentFilter, fruit, filters}) => {

    return (
      <div className="fruit-basket">
        <Filter filters={filters} handleChange={updateFilterCallback} />
        <FilteredFruitList
          filter={currentFilter} items={fruit} />
      </div>
    );
}

FruitBasket.defaultProps = ({fruit: [], filters: [], currentFilter: "", updateFilterCallback: function() {}})

export default FruitBasket;
