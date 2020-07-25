import React from 'react';
import Color from './ColorComponent';

function ColorCard({
  values, 
  handleAddColor, 
  handleRemoveColor,
  selectedColors
}) {
  return (
    <div>
      <h3>Color</h3>
        {
          values.map(colorMeta => (
              <Color
                key={colorMeta.color}
                selected={selectedColors.includes(colorMeta.color)}
                {...colorMeta} 
                handleAddColor={handleAddColor}
                handleRemoveColor={handleRemoveColor}
              />
          ))
        }
    </div>
  )
}

export default ColorCard;