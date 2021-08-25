# Fundamental React Native

[![npm version](https://badge.fury.io/js/fundamental-react-native.svg)](//www.npmjs.com/package/fundamental-react-native)

## Description

The `fundamental-react-native` library is a set of [React Native](https://reactnative.dev/) components based on [SAP Fundamental Styles](https://sap.github.io/fundamental-styles/).

The SAP Fundamental Styles library is a design system and HTML/CSS component library used to build modern product user experiences with the SAP look and feel.

## API Reference

See [Component Documentation](https://fokind.github.io/fundamental-react-native/?path=/docs/overview--page) for examples and API details.

## Requirements

You will need to install [Node and Node Package Manager](https://www.npmjs.com/get-npm).

## Getting Started

### Install

For an existing react application, install `fundamental-react-native`:

```sh
npm install fundamental-react-native
```

This project does not contain fonts - they must be added to your project separately. Download [Font 72](https://experience.sap.com/fiori-design-web/downloads/#download-font-72)

### Usage
React Native Fundamental uses a centralized theme to provide consistency across all the components.

#### Step 1. Import ThemeProvider and theme then wrap your root component.

This step is important. We are passing `theme` as context value that each component will access.

```js
//your root component
import { ThemeProvider, theme } from 'react-native-fundamental';

function App() {
  return (
    <ThemeProvider value={theme}>
      <Root />
    </ThemeProvider>
  );
}
```

#### Step 2. Use component.

```js
//inside any file
import { Button } from 'react-native-fundamental';

function HomeScreen() {
  return (
    <Button>
      Press Me
    </Button>
  );
}
```

## Contributing

Contributions, issues and feature requests are welcome!<br />Feel free to check [issues page](https://github.com/iamshadmirza/react-native-fundamental/issues).

## Similar Projects

-   [React implementation of SAP Fundamental Styles](https://github.com/SAP/fundamental-react)
-   [Angular implementation of SAP Fundamental Styles](https://github.com/SAP/fundamental-ngx)
-   [Vue implementation of SAP Fundamental Styles](https://github.com/SAP/fundamental-vue)
