import { StyleSheet, Text, View } from 'react-native'

import React from 'react'

const Header = ({title}) => { //RECIBE COMO PROPS EL TITULO
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{title}</Text> 
        </View>
  )
}

export default Header

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 90,
        paddingTop: 36,
        backgroundColor: '#f7287b',
        alignItems: 'center',
        justifyContent: 'center'
    },
    
    title: {
        color: 'black',
        fontSize: 30,
        fontWeight: 'bold'
}    
})