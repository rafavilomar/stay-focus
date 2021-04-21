import React from "react";
import { Text, TouchableOpacity, StyleSheet } from "react-native";
import { colors } from "../Layout/GlobalStyles";

type props = {
  value: string;
  onPress: Function;
  active?: boolean;
};

const RoundedButton: React.FC<props> = ({ value, onPress, active = false }) => {
  return (
    <TouchableOpacity
      style={active ? styles.btn_active : styles.btn}
      onPress={() => onPress()}
    >
      <Text style={active ? styles.btnText_active : styles.btnText}>
        {value}
      </Text>
    </TouchableOpacity>
  );
};
export default RoundedButton;

const styles = StyleSheet.create({
  btn: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 5,
    paddingVertical: 8,
    backgroundColor: colors.backgroundSecondary,
    height: "100%",
    width: "33%",
    borderRadius: 200,
  },
  btn_active: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 5,
    paddingVertical: 8,
    backgroundColor: colors.backgroundTertiary,
    height: "100%",
    width: "33%",
    borderRadius: 200,
    borderStyle: "solid",
    borderWidth: 1,
    borderColor: colors.textMain,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.29,
    shadowRadius: 3,
    elevation: 7,
  },
  btnText: {
    color: colors.textMain,
    fontWeight: "900",
    fontSize: 14,
  },
  btnText_active: {
    color: colors.textMain,
    fontWeight: "bold",
    fontSize: 14,
  },
});
