import React from "react";
import { View, StyleSheet, Animated } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import IconButton from "../Button/IconButton";
import { useTheme } from "@react-navigation/native";

const PlayContent = () => {
 
  const {colors} = useTheme()
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
    actions: {
      display: "flex",
      flexDirection: "row",
      width: "100%",
      justifyContent: "center",
      alignItems: "center",
    },
  });

  return (
    <View style={styles.root}>
      <IconButton
        icon={ sound ? <Ionicons name="volume-high" color={colors.text} size={24} /> : <Ionicons name="volume-mute" color={colors.text} size={24} /> }
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