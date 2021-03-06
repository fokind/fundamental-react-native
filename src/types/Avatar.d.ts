import React from 'react';
import { ViewStyle, TextStyle, StyleProp } from 'react-native';

import { SizeType } from './size-type';

interface AvatarProps {
  style?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
  title?: string;
  source?: object;
  editable?: boolean;
  onPress?: () => void;
  size?: SizeType;
  square?: boolean;
  rounded?: boolean;
  editIconStyle?: StyleProp<ViewStyle>;
  editIconColor?: string;
}

export const Avatar: React.FC<AvatarProps>;
