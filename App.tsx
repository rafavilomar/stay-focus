import React from "react";

import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer, useTheme } from "@react-navigation/native";
import { StatusBar } from "react-native";

//SCREENS
import Home from "./screens/Home";
import Settings from "./screens/Settings";
import Theme from "./screens/Theme";
import { BigHeader, Header } from "./components/Layout/Header";
import { LightTheme, DarkTheme } from "./components/Layout/GlobalStyles";
import { getKey, saveKey } from "./storage";

export default function App() {
  const Stack = createStackNavigator();
  const [theme, setTheme] = React.useState<string>("light");

  const changeTheme = (value: string) => {
    saveKey("theme", value).then((result) => result && setTheme(result));
  };

  React.useEffect(() => {
    getKey("theme").then((result) => result && setTheme(result));
  }, []);

  return (
    <NavigationContainer theme={theme === "light" ? LightTheme : DarkTheme}>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            headerTitle: (props) => <BigHeader />,
            headerStyle: {
              elevation: 0,
              backgroundColor:
                theme === "light"
                  ? LightTheme.colors.background
                  : DarkTheme.colors.background,
            },
          }}
        />
        <Stack.Screen
          name="Settings"
          component={Settings}
          options={{
            headerTitle: (props) => (
              <Header title="Settings" backScreen="Home" />
            ),
            headerStyle: {
              elevation: 2,
              backgroundColor:
                theme === "light"
                  ? LightTheme.colors.background
                  : DarkTheme.colors.background,
            },
            headerLeft: () => null,
          }}
        />
        <Stack.Screen
          name="Theme"
          options={{
            headerTitle: (props) => (
              <Header title="Theme" backScreen="Settings" />
            ),
            headerStyle: {
              elevation: 2,
              backgroundColor:
                theme === "light"
                  ? LightTheme.colors.background
                  : DarkTheme.colors.background,
            },
            headerLeft: () => null,
          }}
        >
          {(props) => <Theme changeTheme={changeTheme} theme={theme} />}
        </Stack.Screen>
      </Stack.Navigator>
      <StatusBar barStyle={"default"} />
    </NavigationContainer>
  );
}
