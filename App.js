

import React, { useState, useEffect, memo } from 'react';
import PropTypes from 'prop-types';

// Single List Item
const WrappedSingleListItem = ({
  index,
  isSelected,
  onClickHandler,
  text,
}) => {
  return (
    <li>
      style={{ backgroundColor: isSelected ? 'green' : 'red'}}
      onClick={onClickHandler(index)} 
    
      {text}
    </li>
  );
};

WrappedSingleListItem.propTypes = {
  index: PropTypes.number,
  isSelected: PropTypes.bool,
  onClickHandler: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
};

const SingleListItem = memo(WrappedSingleListItem);

const WrappedListComponent = ({
  items,
}) => {
  const [setSelectedIndex, selectedIndex] = useState();

    useEffect(() => {
        //renamed function name from setSelectedIndex to selectedIndex
    selectedIndex(null);
  }, [items,setSelectedIndex]);

  const handleClick = index => {
    selectedIndex(index); //function name changed to selectedIndex
  };

  return (
    <ul style={{ textAlign: 'left' }}>
      {
      items.map((item, index) => (
        <SingleListItem
        key={index}
        onClickHandler={() => handleClick(index)}
          text={item.text}
          index={index}
          isSelected={setSelectedIndex} //index value changed to setSelectedIndex
        />
      ))}
    </ul>
  )
};

WrappedListComponent.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    text: PropTypes.string.isRequired,
  })),
};

WrappedListComponent.defaultProps = {
  items: null,
};

const List = memo(WrappedListComponent);

export default List;

