import React from "react";

import {createStackNavigator} from '@react-navigation/stack'
import {NavigationContainer} from '@react-navigation/native'

//SCREENS
import Home from './screens/Home'
import Settings from './screens/Settings'

export default function App() {

  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Home' component={Home}/>
        <Stack.Screen name='Settings' component={Settings}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

