import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
{/*se reemplaza el textinpu por este que acabamos de crear, en StartGameScreen*/}
const Input = (style, ...otherPros) => {
  return (
    <View>
          <TextInput style={[styles.input, style]} {...otherPros} />
    </View>
  )
}
export default Input
const styles = StyleSheet.create({
    input: {
        height: 30,
        borderBottomColor: 'grey',
        borderBottomWidth: 1,
        marginVertical: 10
    }
})