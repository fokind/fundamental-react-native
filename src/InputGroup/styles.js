const createStyles = theme => {
  const { fontFamily, fontSize, field, content } = theme;
  const {
    textColor,
    background,
    borderWidth,
    borderColor,
    borderCornerRadius,
  } = field;

  return {
    container: {
      backgroundColor: background,
      borderColor,
      borderWidth,
      marginVertical: 0,
      paddingHorizontal: 0,
      flexDirection: 'row',
      borderRadius: borderCornerRadius,
    },
    input: {
      borderWidth: 0,
      outlineWidth: 0,
      marginVertical: 0,
      backgroundColor: 'transparent',
      width: '100%',
    },
    firstChild: {
      paddingLeft: 10,
    },
    lastChild: {
      paddingRight: 10,
    },
  };
};

export default createStyles;
