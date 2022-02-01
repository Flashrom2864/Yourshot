import React, {useState, useEffect} from 'react';
import {View, TextInput} from 'react-native';

import { Dropdown } from 'react-native-material-dropdown';

const DropDownHome = (props) => {
    let data = [{
        value: 'Banana',
      }, {
        value: 'Mango',
      }, {
        value: 'Pear',
      }];
   
      return (
        <Dropdown
          label='Favorite Fruit'
          data={data}
        />
      );
};

export default DropDownHome;