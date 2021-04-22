import React from "react";
import { View } from "react-native";
import RadioOption from "../components/Field/RadioOption";
import GlobalStyles from "../components/Layout/GlobalStyles";

type props = {
  changeTheme: Function;
  theme: string;
};

const Theme: React.FC<props> = ({ changeTheme, theme }) => {
  return (
    <View style={GlobalStyles.container}>
      <RadioOption
        value="Adaptive"
        onPress={() => null}
        active={false}
        helper="The theme adapts to the time of your phone. In the day the light theme and at night the dark theme."
      />
      <RadioOption
        value="Light"
        onPress={() => changeTheme("light")}
        active={theme === "light" ? true : false}
      />
      <RadioOption
        value="Dark"
        onPress={() => changeTheme("dark")}
        active={theme === "dark" ? true : false}
      />
    </View>
  );
};
export default Theme;
