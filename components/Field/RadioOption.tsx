import { useTheme } from "@react-navigation/native";
import React from "react";
import { StyleSheet, Text, TouchableNativeFeedback, View } from "react-native";

type props = {
  value: string;
  onPress: Function;
  active: boolean;
  helper?: string;
};

const RadioOption: React.FC<props> = ({ value, onPress, active, helper }) => {
  const {colors} = useTheme()

  const styles = StyleSheet.create({
    root: {
      display: "flex",
      flexDirection: "column",
      width: "90%",
      marginBottom: 25,
      borderBottomWidth: 1,
      borderColor: colors.border,
    },
    content: {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      paddingVertical: 10,
    },
    value: {
      color: colors.text,
      flex: 1,
      fontSize: 18,
      fontWeight: "700",
    },
    radio: {
      borderColor: colors.primary,
      borderWidth: 2,
      height: 30,
      width: 30,
      padding: 5,
      overflow: "hidden",
      borderRadius: 100,
    },
    radioContent: {
      width: "100%",
      height: "100%",
      borderRadius: 100,
    },
    radioActive: {
      width: "100%",
      height: "100%",
      borderRadius: 100,
      backgroundColor: colors.primary,
    },
    helper: {
      marginTop: 15,
      fontSize: 16,
      color: colors.text,
      paddingVertical: 10,
    },
  });
  
  return (
    <View style={styles.root}>
      <TouchableNativeFeedback  background={TouchableNativeFeedback.Ripple(colors.border, true)} onPress={() => onPress()} >
        <View>
          <View style={styles.content}>
            <Text style={styles.value}>{value}</Text>
            <View style={styles.radio}>
              <View style={active && styles.radioActive}></View>
            </View>
          </View>
          {helper && <Text style={styles.helper}>{helper}</Text>}
        </View>
      </TouchableNativeFeedback>
    </View>
  );
};

export default RadioOption;