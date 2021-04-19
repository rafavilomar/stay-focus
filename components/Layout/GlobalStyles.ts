import React from 'react'
import { StyleSheet } from 'react-native'

export const colors = {
    background: '#FFFFFF',
    backgorundSecondary: '#E5E5E5',
    main: '#6C4D8B',
    textMain: '#101010',
    textSecondary: '#73677E',
    border: '#6B6670',
    fieldText: '#73677E'
}

const GlobalStyles = StyleSheet.create({
    container: {
        backgroundColor: colors.background,
        display: 'flex',
        flexDirection: 'column',
        paddingHorizontal: 20,
        paddingVertical: 10,
        height: '100%'
    },

})
export default GlobalStyles