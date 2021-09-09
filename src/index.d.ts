import * as React from 'react';
import { themeType } from './types/theme';
import { colorsType } from './types/colors-type';
export * from './types/Button';
export * from './types/FormInput';
export * from './types/FormItem';
export * from './types/FormLabel';
export * from './types/Avatar';
export * from './types/Counter';
export * from './types/CheckBox';
export * from './types/FullScreenLoader';
export * from './types/Input';
export * from './types/InputGroup';
export * from './types/Box';
export * from './types/Inline';
export * from './types/Stack';
export * from './types/ListItem';
export * from './types/OverLay';

export let theme: themeType;
export let colors: colorsType;

export const ThemeProvider: React.FC<{
  value: themeType;
}>;
