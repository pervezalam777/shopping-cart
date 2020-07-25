import React from 'react';
import PriceSelection from './PriceSelectionComponent'

function PriceCard(props) {
  const selectOption = {key:-1, displayValue:'select'}
  const priceRangeClone = [...props.values]
  const minValues = [selectOption, ...priceRangeClone.slice(0, priceRangeClone.length - 1)];
  const maxValues = [selectOption, ...priceRangeClone.slice(1)];
  return (
    <div>
      <h3>Price</h3>
      <div style={{display:'inline-block', marginRight:'1rem'}}>
        <span>min: </span>
        <PriceSelection 
          values={minValues} 
          handleChange={props.handleMinChange} 
          selectedValue={props.selectedMinMax[0]} 
        />
      </div>
      <div style={{display:'inline-block'}}>
        <span>max: </span>
        <PriceSelection 
          values={maxValues} 
          handleChange={props.handleMaxChange}
          selectedValue={props.selectedMinMax[1]} 
        />
      </div>
    </div>
  )
}

export default PriceCard;