import React from "react";
import { TextInput, View, StyleSheet, Text, Alert} from "react-native";
import IconButton from "../Button/IconButton";
import { Ionicons } from "@expo/vector-icons";
import { colors } from "../Layout/GlobalStyles";

type props = {
  title: string;
  value: number;
  onChange: Function;
};

const FieldTwoButtons: React.FC<props> = ({
  title,
  value,
  onChange,
}) => {

  const changeValue = (value: any) => {
    onChange(parseInt(value))
  }

  const plusPress = () => {
    value++
    changeValue(value)
  }

  const restPress = () => {
    value--
    changeValue(value)
  }

  return (
    <View style={styles.root}>
      <Text style={styles.title}>{title}</Text>
      <View style={styles.content}>
        <TextInput
          style={styles.field}
          onChangeText={text => changeValue(text)}
          keyboardType='numeric'
          value={`${value}`}
        />
        <View style={styles.action}>
          <IconButton
            icon={<Ionicons name="remove" size={24} color={colors.textMain} />}
            onPress={() => restPress()}
          />
          <IconButton
            icon={<Ionicons name="add" size={24} color={colors.textMain} />}
            onPress={() => plusPress()}
          />
        </View>
      </View>
    </View>
  );
};
export default FieldTwoButtons;

const styles = StyleSheet.create({
  root: {
    display: "flex",
    flexDirection: "column",
    borderBottomWidth: 1,
    borderColor: colors.border,
    marginTop: 20,
  },
  title: {
    fontSize: 14,
    color: colors.textSecondary,
  },
  content: {
    display: "flex",
    flexDirection: "row"
  },
  field: {
    width: "100%",
    flex: 1,
    fontSize: 16,
    fontWeight: "700",
    height: 40,
    borderWidth: 0,
    color: colors.fieldText,
  },
  action: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    width: 100,
  },
});
