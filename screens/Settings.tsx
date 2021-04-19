import React from "react";
import { useNavigation } from "@react-navigation/native";
import { Text, TextInput, View, StyleSheet, Alert, Picker, TouchableNativeFeedback } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import FieldTwoButtons from "../components/Field/FieldTwoButtons";
import RadioOption from "../components/Field/RadioOption";
import GlobalStyles, { colors } from "../components/Layout/GlobalStyles";
import { TouchableHighlight } from "react-native-gesture-handler";
import IconButton from "../components/Button/IconButton";

const Settings = () => {
  const navigation = useNavigation();

  const testPress = () => {
    Alert.alert("Test funtion");
  };

  const goToTheme = () => {
    navigation.navigate("Theme");
  };

  return (
    <View style={GlobalStyles.container}>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Basic</Text>
        <FieldTwoButtons
          title="Focus"
          value={25}
          onChange={testPress}
          plusPress={testPress}
          restPress={testPress}
        />
        <FieldTwoButtons
          title="Short Break"
          value={5}
          onChange={testPress}
          plusPress={testPress}
          restPress={testPress}
        />
        <FieldTwoButtons
          title="Long Break"
          value={15}
          onChange={testPress}
          plusPress={testPress}
          restPress={testPress}
        />
      </View>
      <View style={styles.section2}>
        <Text style={styles.sectionTitle}>Appearance</Text>
        <TouchableNativeFeedback onPress={goToTheme}>
          <View style={{marginTop: 20}}>
            <Text style={styles.title}>Theme</Text>
          <View style={styles.iconOption}>
            <Text style={styles.iconOptionValue}>Light</Text>
            <Ionicons name="chevron-forward" size={24} color={colors.textMain} />
          </View>
          </View>
        </TouchableNativeFeedback>
      </View>
    </View>
  );
};
export default Settings;

const styles = StyleSheet.create({
  section: {
    display: "flex",
    flexDirection: "column",
  },
  section2: {
    display: "flex",
    flexDirection: "column",
    marginTop: 40,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "700",
    color: colors.textMain,
  },
  content: {
    display: "flex",
    flexDirection: "column",
    marginTop: 40,
  },
  title: {
    fontSize: 14,
    color: colors.textSecondary,
  },
  iconOption: {
    width: "100%",
    height: 40,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  iconOptionValue: {
    flex: 1,
    fontSize: 16,
    fontWeight: "700",
    color: colors.fieldText,
  },
});
