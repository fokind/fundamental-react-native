import React from 'react';
import { StyleSheet, View } from 'react-native';
import PropTypes from 'prop-types';
import { useThemeContext } from '../util/ThemeProvider';
import createStyles from './styles';

const getContainerStyle = ({ theme }) => {
  const containerStyles = createStyles(theme.sap_fiori_3);
  const containerStyle = [containerStyles.container];

  return containerStyle;
};

const renderInput = ({ theme, child, isFirst, isLast }) => {
  const inputStyles = createStyles(theme.sap_fiori_3);
  const inputStyle = [inputStyles.input];

  if (isFirst) {
    inputStyle.push(inputStyles.firstChild);
  }

  if (isLast) {
    inputStyle.push(inputStyles.lastChild);
  }

  return React.cloneElement(child, {
    style: StyleSheet.flatten(
      inputStyle,
    ),
  });
};

const renderButton = ({ child }) => {
  return React.cloneElement(child, {
    option: 'transparent',
  });
};

const InputGroup = props => {
  const theme = useThemeContext();

  return (
    <View
      style={StyleSheet.flatten([
        getContainerStyle({
          theme,
        }),
        props.style,
      ])}>
      {React.Children.map(props.children, (child, index) => {
        switch (child.type.name) {
          case 'FormInput':
            return renderInput({
              theme,
              child,
              isFirst: index === 0,
              isLast:
                !props.children.length || index === props.children.length - 1,
            });
          case 'Button':
            return renderButton({ child });
          default:
            return child;
        }
      })}
    </View>
  );
};

InputGroup.displayName = 'InputGroup';

InputGroup.propTypes = {
  /**  To override default style */
  style: PropTypes.object,
  /** Node(s) to render within the component */
  children: PropTypes.node,
};

export default InputGroup;
