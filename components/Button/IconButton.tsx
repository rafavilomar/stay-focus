import React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { TouchableNativeFeedback } from "react-native-gesture-handler";

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
  return (
    <View style={{borderRadius: 500, overflow: 'hidden'}}>
  <TouchableNativeFeedback onPress={() => onPress()} style={styles.btn}>
      {icon}
  </TouchableNativeFeedback>
  </View>);
};
export default IconButton;

const styles = StyleSheet.create({
  btn: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
  },
  active: {},
  disabled: {},
});