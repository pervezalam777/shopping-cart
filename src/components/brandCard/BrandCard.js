import React from 'react';
import BrandComponent from './BrandComponent';

import InfiniteLoading from 'react-simple-infinite-loading'

function rowContainer(items, handleChange, selectedBrands){
  let mapArray = []
  let len = items.length;
  for(let i = 0; i < len; i += 2){
    let first = items[i];
    let second = items[i+1];
    mapArray.push(
      <div key={`${first.value}__${second.value}`}>
        <BrandComponent 
              {...first}
              selected={selectedBrands.includes(first.value)}
              handleChange={handleChange}
            />
        <BrandComponent 
              {...second}
              selected={selectedBrands.includes(second.value)}
              handleChange={handleChange}
            />
      </div>
    )
  }
  return mapArray;
}

function BrandCard(props) {
  return (
    <div>
      <h3>Brand</h3>
      <div style={{ width: '100%', height: '10rem' }}>
      <InfiniteLoading
        itemHeight={40}
      >
        { 
          rowContainer(props.values, props.handleChange, props.selectedBrands)
          // props.values.map(item => (
          //   <BrandComponent 
          //     key={item.value} 
          //     {...item}
          //     selected={props.selectedBrands.includes(item.value)}
          //     handleChange={props.handleChange}
          //   />
          // ))
        }
      </InfiniteLoading>
      </div>
    </div>
  )
}

export default BrandCard;