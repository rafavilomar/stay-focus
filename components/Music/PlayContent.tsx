import React from "react";
import { View, StyleSheet, Text, Alert, Animated } from "react-native";
import { colors } from "../Layout/GlobalStyles";
import { Ionicons } from "@expo/vector-icons";
import IconButton from "../Button/IconButton";

const PlayContent = () => {
 
  const [sound, setSound] = React.useState<boolean>(true)
  
  const animationValue = [
    React.useRef(new Animated.Value(10)).current,
    React.useRef(new Animated.Value(10)).current,
    React.useRef(new Animated.Value(10)).current,
    React.useRef(new Animated.Value(10)).current,
    React.useRef(new Animated.Value(10)).current,
    React.useRef(new Animated.Value(10)).current,
    React.useRef(new Animated.Value(10)).current,
    React.useRef(new Animated.Value(10)).current,
    React.useRef(new Animated.Value(10)).current,
    React.useRef(new Animated.Value(10)).current,
    React.useRef(new Animated.Value(10)).current,
    React.useRef(new Animated.Value(10)).current,
    React.useRef(new Animated.Value(10)).current,
    React.useRef(new Animated.Value(10)).current,
    React.useRef(new Animated.Value(10)).current,
  ];
  const animation = (time: number, index: number) => {
    Animated.loop(
      Animated.timing(animationValue[index], {
        toValue: sound ? 40 : 10,
        duration: time,
        useNativeDriver: false,
      })
    ).start();
  };
  return (
    <View style={styles.root}>
      <IconButton
        icon={ sound ? <Ionicons name="volume-high" color={colors.textMain} size={24} /> : <Ionicons name="volume-mute" color={colors.textMain} size={24} /> }
        onPress={() => setSound(!sound)}
      />
      <View style={styles.content}>
        <Animated.View
          style={[styles.fadingContainer, { height: animationValue[0] }]}
        >
          {animation(300, 0)}
          <></>
        </Animated.View>
        <Animated.View
          style={[styles.fadingContainer, { height: animationValue[1] }]}
        >
          {animation(800, 1)}
          <></>
        </Animated.View>
        <Animated.View
          style={[styles.fadingContainer, { height: animationValue[2] }]}
        >
          {animation(500, 2)}
          <></>
        </Animated.View>
        <Animated.View
          style={[styles.fadingContainer, { height: animationValue[3] }]}
        >
          {animation(1000, 3)}
          <></>
        </Animated.View>
        <Animated.View
          style={[styles.fadingContainer, { height: animationValue[4] }]}
        >
          {animation(700, 4)}
          <></>
        </Animated.View>
        <Animated.View
          style={[styles.fadingContainer, { height: animationValue[0] }]}
        >
          {animation(300, 0)}
          <></>
        </Animated.View>
        <Animated.View
          style={[styles.fadingContainer, { height: animationValue[1] }]}
        >
          {animation(800, 1)}
          <></>
        </Animated.View>
        <Animated.View
          style={[styles.fadingContainer, { height: animationValue[2] }]}
        >
          {animation(500, 2)}
          <></>
        </Animated.View>
        <Animated.View
          style={[styles.fadingContainer, { height: animationValue[3] }]}
        >
          {animation(1000, 3)}
          <></>
        </Animated.View>
        <Animated.View
          style={[styles.fadingContainer, { height: animationValue[4] }]}
        >
          {animation(700, 4)}
          <></>
        </Animated.View>
        <Animated.View
          style={[styles.fadingContainer, { height: animationValue[0] }]}
        >
          {animation(300, 0)}
          <></>
        </Animated.View>
        <Animated.View
          style={[styles.fadingContainer, { height: animationValue[1] }]}
        >
          {animation(800, 1)}
          <></>
        </Animated.View>
        <Animated.View
          style={[styles.fadingContainer, { height: animationValue[2] }]}
        >
          {animation(500, 2)}
          <></>
        </Animated.View>
        <Animated.View
          style={[styles.fadingContainer, { height: animationValue[3] }]}
        >
          {animation(1000, 3)}
          <></>
        </Animated.View>
        <Animated.View
          style={[styles.fadingContainer, { height: animationValue[4] }]}
        >
          {animation(700, 4)}
          <></>
        </Animated.View>
        <Animated.View
          style={[styles.fadingContainer, { height: animationValue[0] }]}
        >
          {animation(300, 0)}
          <></>
        </Animated.View>
        <Animated.View
          style={[styles.fadingContainer, { height: animationValue[1] }]}
        >
          {animation(800, 1)}
          <></>
        </Animated.View>
        <Animated.View
          style={[styles.fadingContainer, { height: animationValue[2] }]}
        >
          {animation(500, 2)}
          <></>
        </Animated.View>
        <Animated.View
          style={[styles.fadingContainer, { height: animationValue[3] }]}
        >
          {animation(1000, 3)}
          <></>
        </Animated.View>
        <Animated.View
          style={[styles.fadingContainer, { height: animationValue[4] }]}
        >
          {animation(700, 4)}
          <></>
        </Animated.View>
        <Animated.View
          style={[styles.fadingContainer, { height: animationValue[1] }]}
        >
          {animation(800, 1)}
          <></>
        </Animated.View>
        <Animated.View
          style={[styles.fadingContainer, { height: animationValue[2] }]}
        >
          {animation(500, 2)}
          <></>
        </Animated.View>
        <Animated.View
          style={[styles.fadingContainer, { height: animationValue[3] }]}
        >
          {animation(1000, 3)}
          <></>
        </Animated.View>
        <Animated.View
          style={[styles.fadingContainer, { height: animationValue[4] }]}
        >
          {animation(700, 4)}
          <></>
        </Animated.View>
      </View>
    </View>
  );
};
export default PlayContent;

const styles = StyleSheet.create({
  fadingContainer: {
    backgroundColor: "#B0588F",
    width: 10,
    marginLeft: 5,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
  },
  fadingText: {
    fontSize: 28,
  },
  root: {
    width: "90%",
    display: "flex",
    flexDirection: "row",
    alignItems: 'flex-end'
  },
  content: {
    marginLeft: 19,
    display: "flex",
    flexDirection: "row",
    height: 100,
    alignItems: "flex-end",
    flex: 1,
    overflow: 'hidden'
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
