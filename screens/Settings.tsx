import React from "react";
import { Text, TextInput, View, StyleSheet, Alert, Picker } from "react-native";
import FieldTwoButtons from "../components/Field/FieldTwoButtons";
import GlobalStyles, { colors } from "../components/Layout/GlobalStyles";

const Settings = () => {
  const [selectedValue, setSelectedValue] = React.useState("java");

  const testPress = () => {
    Alert.alert("Test funtion");
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
      <View style={styles.content}>
        <Text style={styles.title}>Theme</Text>
        <Picker
        selectedValue={selectedValue}
        style={styles.picker}
        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
      >
        <Picker.Item label="Java" value="java" />
        <Picker.Item label="JavaScript" value="js" />
      </Picker>
      </View>
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
    marginTop: 40
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "700",
    color: colors.textMain,
  },
  content: {
    display: "flex",
    flexDirection: "column",
    marginTop: 40
  },
  title: {
    fontSize: 14,
    color: colors.textSecondary,
  },
  picker: {
    width: "100%",
    fontSize: 16,
    fontWeight: "700",
    height: 40,
    color: colors.fieldText,
    borderWidth: 1,
    borderColor: 'red'
  }
});
