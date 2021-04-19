import React from "react";
import { StyleSheet, Text, View } from "react-native";
import IconButton from "../Button/IconButton";
import {Ionicons} from '@expo/vector-icons'
import { colors } from "./GlobalStyles";

import { useNavigation } from '@react-navigation/native';

export const BigHeader = () => {

  const navigation = useNavigation()

  return (
    <View style={styles.bigHeader}>
      <Text style={styles.BigHeader_text}>Home</Text>
      <IconButton icon={<Ionicons name='settings-sharp' size={30} color={colors.textMain} />} onPress={() => navigation.navigate('Settings')} />
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
    fontWeight: "bold",
    fontSize: 34,
    color: colors.textMain,
  },
});