import React, { useState } from 'react';
import { Text, View, Pressable } from 'react-native';
import PropTypes from 'prop-types';
import { Popover as PopoverBase } from 'react-native-popper';
import Button from '../Button/Button';

const Popover = props => {
  const triggerRef = React.useRef(null);
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <View>
      <Button ref={triggerRef} onPress={() => setIsOpen(!isOpen)}>
        Press me
      </Button>
      <PopoverBase
        trigger={triggerRef}
        isOpen={isOpen}
        onOpenChange={setIsOpen}>
        <PopoverBase.Backdrop />
        <PopoverBase.Content>
          <PopoverBase.Arrow color="#D1D5DB" />
          <View
            style={{
              padding: 10,
              borderWidth: 2,
              borderColor: 'blue',
            }}>
            <Text>Hello from popover</Text>
            <Pressable>
              <Text>Hello</Text>
            </Pressable>
          </View>
        </PopoverBase.Content>
      </PopoverBase>
    </View>
  );
};

Popover.displayName = 'Popover';

Popover.propTypes = {
  /** Node(s) to render in the overlay */
  body: PropTypes.node,
  /** Node to render as the reference element (that the `body` will be placed in relation to) */
  control: PropTypes.node,
};

export default Popover;
