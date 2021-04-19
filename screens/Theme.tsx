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
        <RadioOption value='Auto' onPress={testPress} active={true} helper='Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui alias officia dolor commodi.'/>
        <RadioOption value='Light' onPress={testPress} active={false}/>
        <RadioOption value='Dark' onPress={testPress} active={false}/>
        
    </View>
    )
}
export default Theme