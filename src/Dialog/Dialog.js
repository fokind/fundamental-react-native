import React, { useState } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import Modal from 'modal-enhanced-react-native-web';
import styles from './styles';

const renderButton = (text, onPress) => (
  <TouchableOpacity onPress={onPress}>
    <View style={styles.button}>
      <Text>{text}</Text>
    </View>
  </TouchableOpacity>
);

const Dialog = props => {
  const [visibleModal, setVisibleModal] = useState(false);

  const renderModalContent = () => (
    <View style={styles.modalContent}>
      <Text>Hello!</Text>
      {renderButton('Close', () => setVisibleModal(false))}
    </View>
  );

  return (
    <View style={styles.container}>
      {renderButton('Default modal', () => setVisibleModal(true))}
      <Modal isVisible={true}>{renderModalContent()}</Modal>
    </View>
  );
};

Dialog.displayName = 'Dialog';

Dialog.propTypes = {
  /** Node(s) to render in the overlay */
  body: PropTypes.node,
  /** Node to render as the reference element (that the `body` will be placed in relation to) */
  control: PropTypes.node,
};

export default Dialog;
