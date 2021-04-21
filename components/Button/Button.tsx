import React from "react";
import { Text, TouchableOpacity, StyleSheet } from "react-native";
import { colors } from "../Layout/GlobalStyles";

type props = {
  value: string;
  onPress: Function;
};

const Button: React.FC<props> = ({ value, onPress }) => {
  return (
    <TouchableOpacity style={styles.btn} onPress={() => onPress()}>
      <Text style={styles.btnText}>{value}</Text>
    </TouchableOpacity>
  );
};
export default Button;

const styles = StyleSheet.create({
  btn: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: colors.main,
    borderRadius: 200,
    height: 50,
    marginTop: 15,
    shadowColor: "#A17FC1",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  btnText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
});
