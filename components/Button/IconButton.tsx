import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import { colors } from "../Layout/GlobalStyles";

type props = {
    icon: any
    onPress: Function
    active?: boolean
    disabled?: boolean
}

const IconButton: React.FC<props> = ({
    icon,
    onPress,
    active = false,
    disabled = false
}) => {
  return <TouchableOpacity onPress={() => onPress()} style={styles.btn}>
      {icon}
  </TouchableOpacity>;
};
export default IconButton;

const styles = StyleSheet.create({
  btn: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: 5,
    borderRadius: 5,
    // width: 34,
    // height: 34,
    backgroundColor: colors.background,
  },
  active: {},
  disabled: {},
});
