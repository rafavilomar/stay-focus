import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { colors } from "./GlobalStyles";

export const BigHeader = () => {
  return (
    <View style={styles.bigHeader}>
      <Text style={styles.BigHeader_text}>Home</Text>
      <View style={styles.icon}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  bigHeader: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 0,
  },
  BigHeader_text: {
    //   fontFamily: 'Poppins',
    fontWeight: "bold",
    fontSize: 34,
    color: colors.textMain,
  },
  icon: {
    width: 34,
    height: 34,
    backgroundColor: colors.backgorundSecondary,
  },
});
