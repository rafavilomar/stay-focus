import React from "react";
import { StyleSheet } from "react-native";

export const DarkTheme = {
  dark: true,
  colors: {
    primary: '#6C4D8B',
    background: '#101010',
    card: 'rgba(107, 102, 112, 0.3)',
    text: '#E5E5E5',
    border: 'rgba(107, 102, 112, 0.5)',
    notification: '#6B6670',
  }
};
export const LightTheme = {
  dark: true,
  colors: {
    primary: '#6C4D8B',
    background: '#EFEFF5',
    card: '#FDE9FF',
    text: '#101010',
    border: '#73677E',
    notification: '#FFFFFF',
  }
};

export const DarkThemes = {
  background: "#101010",
  backgroundSecondary: "#FDE9FF",
  backgroundTertiary: "#FFFFFF",
  main: "#6C4D8B",
  textMain: "#101010",
  textSecondary: "#73677E",
  border: "#6B6670",
  fieldText: "#73677E",
};

export const LightThemes = {
  background: "#EFEFF5",
  backgroundSecondary: "#FDE9FF",
  backgroundTertiary: "#FFFFFF",
  main: "#6C4D8B",
  textMain: "#101010",
  textSecondary: "#73677E",
  border: "#6B6670",
  fieldText: "#73677E",
};

export const colors = () => {

  return  DarkThemes;
  
};

const GlobalStyles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    paddingVertical: 10,
    height: "100%",
  },
});
export default GlobalStyles;
