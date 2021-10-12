import React, { useState } from 'react';
import { Pressable, View, Text } from 'react-native';
import PropTypes from 'prop-types';
import { Popover } from 'react-native-popper';
import Button from '../Button/Button';

const Popper = props => {
  // const theme = useThemeContext();

  // return (
  //   <PopoverBase trigger={props.control}>
  //     <PopoverBase.Content>
  //       {props.body}
  //     </PopoverBase.Content>
  //   </PopoverBase>
  // );
  return (
    <View>
      <Popover
        placement="bottom right"
        trigger={
          <Pressable style={{ height: 26, width: 24 }}>
            <Text>Press me</Text>
          </Pressable>
        }>
        <Popover.Content>
          <View
            style={{ width: 100, height: 100, backgroundColor: 'yellow' }}
          />
        </Popover.Content>
      </Popover>
    </View>
  );
};

Popper.displayName = 'Popper';

Popper.propTypes = {
  /** Node(s) to render in the overlay */
  body: PropTypes.node,
  /** Node to render as the reference element (that the `body` will be placed in relation to) */
  control: PropTypes.node,
};

export default Popper;
