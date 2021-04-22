import React from "react";
import { useTheme } from "@react-navigation/native";
import { StyleSheet, View, Text, Animated } from "react-native";
// import { colors } from "../Layout/GlobalStyles";

const Clock = () => {
  const {colors} = useTheme()
  const styles = StyleSheet.create({
    fadingContainer: {
      padding: 20,
      backgroundColor: "powderblue",
    },
    fadingText: {
      fontSize: 28,
    },
    root: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: 300,
      width: 300,
      padding: 10,
      borderRadius: 1000,
      borderWidth: 7,
      borderColor: "#B0588F",
    },
    clock: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      height: "100%",
      width: "100%",
      backgroundColor: colors.notification,
      borderRadius: 1000,
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 3,
      },
      shadowOpacity: 0.27,
      shadowRadius: 4.65,
  
      elevation: 6,
    },
    time: {
      fontSize: 14,
      fontWeight: "600",
      color: colors.text,
      textAlign: "center",
    },
    timer: {
      fontWeight: "bold",
      fontSize: 75,
      lineHeight: 75,
      color: colors.text,
      textAlign: "center",
    },
    message: {
      fontWeight: "600",
      fontSize: 18,
      color: colors.text,
      textAlign: "center",
      marginTop: 20,
    },
  });

  return (
    <View style={styles.root}>
      <View style={styles.clock}>
        <View>
          <Text style={styles.time}>Time</Text>
          <Text style={styles.timer}>25:00</Text>
        </View>
        <Text style={styles.message}>Time to work!</Text>
      </View>
    </View>
  );
};
export default Clock;


