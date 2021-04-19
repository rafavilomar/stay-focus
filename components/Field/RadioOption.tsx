import React from "react";
import { StyleSheet, Text, TouchableNativeFeedback, View } from "react-native";
import { colors } from "../Layout/GlobalStyles";

type props = {
  value: string;
  onPress: Function;
  active: boolean;
  helper?: string
};

const RadioOption: React.FC<props> = ({ value, onPress, active, helper }) => {
  return (
    <View style={styles.root}>
      <TouchableNativeFeedback>
        <View>
          <View style={styles.content}>
            <Text style={styles.value}>{value}</Text>
            <View style={styles.radio}>
              <View style={active && styles.radioActive}></View>
            </View>
          </View>
          <Text style={styles.helper}>
            {helper}
          </Text>
        </View>
      </TouchableNativeFeedback>
    </View>
  );
};

export default RadioOption;

const styles = StyleSheet.create({
  root: {
    display: "flex",
    flexDirection: "column",
    marginBottom: 20
  },
  content: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  value: {
    color: colors.fieldText,
    flex: 1,
    fontSize: 18,
    fontWeight: "700",
  },
  radio: {
    borderColor: colors.main,
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
    backgroundColor: colors.textSecondary,
  },
  helper: {
    paddingLeft: 20,
    fontSize: 14,
    color: colors.textSecondary
  },
});
