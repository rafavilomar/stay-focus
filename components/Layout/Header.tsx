import React from "react";
import { StyleSheet, Text, View } from "react-native";
import IconButton from "../Button/IconButton";
import { Ionicons } from "@expo/vector-icons";

import { useNavigation, useTheme } from "@react-navigation/native";

export const BigHeader = () => {
  const navigation = useNavigation();
  const {colors} = useTheme()

  const styles = StyleSheet.create({
    header: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      padding: 0,
      width: "100%",
    },
    BigHeader_text: {
      fontWeight: "bold",
      fontSize: 34,
      color: colors.text,
    },
    headerTitle: {
      flex: 1,
      fontSize: 20,
      fontWeight: "700",
      textAlign: "center",
    },
  });

  return (
    <View style={styles.header}>
      <Text style={styles.BigHeader_text}>Home</Text>
      <IconButton
        icon={
          <Ionicons name="settings-sharp" size={30} color={colors.text} />
        }
        onPress={() => navigation.navigate("Settings")}
      />
    </View>
  );
};

type props = {
  title: string;
  backScreen: string;
  checkPress?: Function;
};
export const Header: React.FC<props> = ({ title, backScreen, checkPress }) => {
  const navigation = useNavigation();
  const {colors} = useTheme()

  const styles = StyleSheet.create({
    header: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      padding: 0,
      width: "100%",
    },
    BigHeader_text: {
      fontWeight: "bold",
      fontSize: 34,
      color: colors.text,
    },
    headerTitle: {
      flex: 1,
      fontSize: 20,
      fontWeight: "700",
      textAlign: "center",
      color: colors.text,
    },
  });

  return (
    <View style={styles.header}>
      <IconButton
        icon={<Ionicons name="arrow-back" size={24} color={colors.text} />}
        onPress={() => navigation.navigate(`${backScreen}`)}
      />
      <Text style={styles.headerTitle}>{title}</Text>
      {checkPress ? (
        <IconButton
          icon={
            <Ionicons
              name="md-checkmark-sharp"
              size={24}
              color={colors.text}
            />
          }
          onPress={() => checkPress()}
        />
      ) : (
        <View style={{ height: 44, width: 44 }}></View>
      )}
    </View>
  );
};