import React, { Component } from 'react';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

const FilterList = ({ dispatch, itemFilter, handleChange }) => {
  const tags = [
    'Electronics',
    'Household Items',
    'Musical Instruments',
    'Physical Media',
    'Recreational Equipment',
    'Sporting Goods',
    'Tools',
  ];

  return (
    <SelectField
      multiple={true}
      hintText="Filter by Tag"
      value={itemFilter}
      onChange={(event, index, value) => dispatch(handleChange(value))}
    >
      {tags.map((tag) => (
        <MenuItem
          key={tag}
          insetChildren={true}
          checked={itemFilter && itemFilter.includes(tag)}
          value={tag}
          primaryText={tag}
        />
        ))}
    </SelectField>
  );

  // menuItems(values) {
  //   return names.map((name) => (
  //     <MenuItem
  //       key={name}
  //       insetChildren={true}
  //       checked={values && values.indexOf(name) > -1}
  //       value={name}
  //       primaryText={name}
  //     />
  //   ));
  // }

  // render() {
  //   const { values } = this.state;
  //   return (
  //     <SelectField
  //       multiple={true}
  //       hintText="Filter by Tag"
  //       value={values}
  //       onChange={}
  //     >
  //       {this.menuItems(values)}
  //     </SelectField>
  //   );
  // }
};

export default FilterList;
