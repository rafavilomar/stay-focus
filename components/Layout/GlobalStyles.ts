import { StyleSheet } from 'react-native'

export const colors = {
    background: '#FFFFFF',
    backgroundSecondary: '#FDE9FF',
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
        alignItems: 'center',
        paddingVertical: 10,
        height: '100%',
    },

})
export default GlobalStyles