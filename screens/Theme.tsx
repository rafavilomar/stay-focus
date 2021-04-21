import React from 'react'
import { Alert, View } from 'react-native'
import RadioOption from '../components/Field/RadioOption'
import GlobalStyles from '../components/Layout/GlobalStyles'

const Theme = () => {
    const testPress = () => {
        Alert.alert("Test funtion");
      };
    return (
    <View style={GlobalStyles.container} >
        <RadioOption value='Adaptive' onPress={testPress} active={true} helper='The theme adapts to the time of your phone. In the day the light theme and at night the dark theme.'/>
        <RadioOption value='Light' onPress={testPress} active={false}/>
        <RadioOption value='Dark' onPress={testPress} active={false}/>
        
    </View>
    )
}
export default Theme