import { useTheme } from "@react-navigation/native";
import React from "react";
import { StyleSheet, View } from "react-native";
import { TouchableNativeFeedback } from "react-native-gesture-handler";

type props = {
  icon: any;
  onPress: Function;
  active?: boolean;
  disabled?: boolean;
};

const IconButton: React.FC<props> = ({
  icon,
  onPress,
  active = false,
  disabled = false,
}) => {
  const { colors } = useTheme();
  return (
    <View style={{ borderRadius: 500, overflow: "hidden" }}>
      <TouchableNativeFeedback
        background={TouchableNativeFeedback.Ripple(colors.border, true)}
        onPress={() => onPress()}
        style={styles.btn}
        disabled={disabled}
      >
        {icon}
      </TouchableNativeFeedback>
    </View>
  );
};
export default IconButton;

const styles = StyleSheet.create({
  btn: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    height: 50,
    width: 50
  },
  active: {},
  disabled: {},
});
