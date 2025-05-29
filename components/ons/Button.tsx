import React from "react";
import { Pressable, Text } from "react-native";
import { styles } from "./Button.styles";

export interface Props {
  label: string;
  id?: string;
  primary: boolean;
  small?: boolean;
  field?: boolean;
  loading?: boolean;
  marginRight?: number;
  /**
   * Optional click handler
   */
  onClick?: (...props: any[]) => void;
  disabled?: boolean;
  action?: boolean;
  testid?: string;
  hidden?: boolean;
  submit?: boolean;
}

const ONSButton = (props: Props) => {
  return (
    <Pressable
      accessibilityLabel={props.label}
      style={styles.button}
      disabled={props.loading || props.disabled}
      onPress={props.onClick}
    >
      <Text style={styles.buttonText}>{props.label}</Text>
    </Pressable>
  );
};

export default ONSButton;
