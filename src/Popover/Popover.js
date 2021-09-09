import React, { useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import PropTypes from 'prop-types';
import { useThemeContext } from '../util/ThemeProvider';
import createStyles from './styles';
import Modal from 'modal-react-native-web';

const getContainerStyle = ({ theme }) => {
  const containerStyles = createStyles(theme.sap_fiori_3);
  const containerStyle = [containerStyles.container];

  return containerStyle;
};

const Popover = props => {
  const theme = useThemeContext();
  const [modalVisible, setModalVisible] = useState(true);

  return (
    <Modal
      style={{ borderWidth: 1, margin: 50 }}
      animationType="slide"
      transparent={true}
      visible={modalVisible}
      onDismiss={() => {
        alert('Modal has been closed.');
      }}>
      <View
        style={{
          borderStyle: 'solid',
          backgroundColor: 'white',
          borderColor: 'rgb(50, 54, 58)',
          borderWidth: 1,
          borderRadius: 4,
          shadowColor: 'rgba(0, 0, 0, 0.3)',
          shadowOffset: { width: 0, height: 10 },
          shadowRadius: 30,
        }}>
        {props.children}
      </View>
    </Modal>
  );
};

Popover.displayName = 'Popover';

Popover.propTypes = {
  /**  To override default style */
  style: PropTypes.object,
  /** Node(s) to render within the component */
  children: PropTypes.node,
};

export default Popover;
