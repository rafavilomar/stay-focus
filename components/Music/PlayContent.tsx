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
          icon={<Ionicons name="repeat" size={22} color={colors.textMain} />}
          onPress={() => Alert.alert("Press")}
        />
      </View>
      <View style={{ height: 27 }}></View>
      <View style={styles.actions}>
        <IconButton
          icon={
            <Ionicons
              name="md-play-skip-back"
              size={22}
              color={colors.textMain}
            />
          }
          onPress={() => Alert.alert("Press")}
        />
        <IconButton
          icon={
            <Ionicons
              name="play"
              size={34}
              color={colors.textMain}
              style={{ paddingLeft: 6 }}
            />
          }
          onPress={() => Alert.alert("Press")}
        />
        <IconButton
          icon={
            <Ionicons
              name="md-play-skip-forward"
              size={22}
              color={colors.textMain}
            />
          }
          onPress={() => Alert.alert("Press")}
        />
      </View>
    </View>
  );
};
export default PlayContent;

const styles = StyleSheet.create({
  root: {
    width: "90%",
    borderColor: colors.border,
    borderWidth: 1,
    marginTop: 15,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    backgroundColor: colors.backgorundSecondary,
    borderRadius: 15,
    padding: 15,
    flex: 1,
    maxHeight: 220,
    minHeight: 180,
    shadowColor: "#A17FC1",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 2,
  },
  content: {
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-start",
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
    justifyContent: "center",
    alignItems: "center",
  },
});
