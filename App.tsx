import React from "react";

import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

//SCREENS
import Home from "./screens/Home";
import Settings from "./screens/Settings";
import Theme from "./screens/Theme";
import { BigHeader, Header } from "./components/Layout/Header";

export default function App() {
  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ headerTitle: (props) => <BigHeader /> , headerStyle: {elevation: 0}}}
        />
        <Stack.Screen
          name="Settings"
          component={Settings}
          options={{
            headerTitle: (props) => (
              <Header title="Settings" backScreen="Home" />
            ),
            headerLeft: () => null,
          }}
        />
        <Stack.Screen
          name="Theme"
          component={Theme}
          options={{
            headerTitle: (props) => (
              <Header title="Theme" backScreen="Settings" />
            ),
            headerLeft: () => null,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
