import React from "react";
import { View, StyleSheet, Text, Alert } from "react-native";
import { colors } from "../Layout/GlobalStyles";
import { Ionicons } from "@expo/vector-icons";
import IconButton from "../Button/IconButton";

const PlayContent = () => {
  return (
    <View style={styles.root}>
      <View style={styles.content}>
        <View style={styles.info}>
          <Text style={styles.nameSong}>Lofi Hip Hop</Text>
          <Text style={styles.autor}>Autor name</Text>
        </View>
        <IconButton
          icon={<Ionicons name="repeat" size={24} color={colors.textMain} />}
          onPress={() => Alert.alert("Press")}
        />
      </View>
      <View style={styles.actions}>
        <IconButton
          icon={<Ionicons name="play-back" size={24} color={colors.textMain} />}
          onPress={() => Alert.alert("Press")}
        />
        <IconButton
          icon={<Ionicons name="play" size={24} color={colors.textMain} />}
          onPress={() => Alert.alert("Press")}
        />
        <IconButton
          icon={<Ionicons name="play-forward" size={24} color={colors.textMain} />}
          onPress={() => Alert.alert("Press")}
        />
      </View>
    </View>
  );
};
export default PlayContent;

const styles = StyleSheet.create({
  root: {
    marginTop: 15,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    backgroundColor: colors.backgorundSecondary,
    borderRadius: 5,
    height: 120,
    padding: 10,
  },
  content: {
    display: "flex",
    flexDirection: "row",
    alignItems: 'flex-start',
    width: "100%",
    justifyContent: "space-between",
  },
  info: {
    display: "flex",
    flexDirection: "column",
  },
  nameSong: {
    color: colors.textMain,
    fontSize: 20,
    fontWeight: "bold",
  },
  autor: {
    color: colors.textSecondary,
    fontSize: 16,
  },
  actions: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
  }
});
