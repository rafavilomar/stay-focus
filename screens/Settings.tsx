import React from "react";
import { useNavigation } from "@react-navigation/native";
import { Text, View, StyleSheet, TouchableNativeFeedback } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import FieldTwoButtons from "../components/Field/FieldTwoButtons";
import GlobalStyles, { colors } from "../components/Layout/GlobalStyles";
import { getKey, saveKey } from "../storage";
import Button from "../components/Button/Button";

const Settings = () => {
  const navigation = useNavigation();
  const [edited, setEdited] = React.useState<boolean>(false);
  //----------------------------
  const [focus, setFocus] = React.useState<number>(25);
  const changeFocus = (value: number) => {
    setFocus(value);
    setEdited(true);
  };

  const [shortBreak, setShortBreak] = React.useState<number>(5);
  const changeShortBreak = (value: number) => {
    setShortBreak(value);
    setEdited(true);
  };

  const [longBreak, setLongBreak] = React.useState<number>(15);
  const changeLongBreak = (value: number) => {
    setLongBreak(value);
    setEdited(true);
  };

  const goToTheme = () => {
    navigation.navigate("Theme");
  };

  const saveChange = () => {
    saveKey("focus", focus.toString()).then(
      (result) => result && setFocus(parseInt(result))
    );
    saveKey("shortBreak", shortBreak.toString()).then(
      (result) => result && setShortBreak(parseInt(result))
    );
    saveKey("longBreak", longBreak.toString()).then(
      (result) => result && setLongBreak(parseInt(result))
    );

    setEdited(false);
  };

  const getStorageValue = () => {
    getKey("focus").then((result) => result && setFocus(parseInt(result)));
    getKey("shortBreak").then(
      (result) => result && setShortBreak(parseInt(result))
    );
    getKey("longBreak").then(
      (result) => result && setLongBreak(parseInt(result))
    );
  };

  React.useEffect(() => {
    getStorageValue();
  }, []);

  return (
    <View style={GlobalStyles.container}>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Basic</Text>
        <FieldTwoButtons title="Focus" value={focus} onChange={changeFocus} />
        <FieldTwoButtons
          title="Short Break"
          value={shortBreak}
          onChange={changeShortBreak}
        />
        <FieldTwoButtons
          title="Long Break"
          value={longBreak}
          onChange={changeLongBreak}
        />
      </View>
      <View style={styles.section2}>
        <Text style={styles.sectionTitle}>Appearance</Text>
        <TouchableNativeFeedback onPress={goToTheme}>
          <View style={{ marginTop: 20 }}>
            <Text style={styles.title}>Theme</Text>
            <View style={styles.iconOption}>
              <Text style={styles.iconOptionValue}>Light</Text>
              <Ionicons
                name="chevron-forward"
                size={24}
                color={colors.textMain}
              />
            </View>
          </View>
        </TouchableNativeFeedback>
      </View>
      {edited && <Button value="Save change" onPress={saveChange} />}
    </View>
  );
};
export default Settings;

const styles = StyleSheet.create({
  section: {
    display: "flex",
    flexDirection: "column",
    width: "90%",
  },
  section2: {
    display: "flex",
    flexDirection: "column",
    marginTop: 40,
    width: "90%",
    marginBottom: 30,
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
