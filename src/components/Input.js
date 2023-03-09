import { StyleSheet, TextInput } from 'react-native'
import React from 'react'

const Input = ({ style, ...otherPros }) => { //se reemplaza el textInput por este que acabamos de crear, en StartGameScreen, para hacer el contador de numeros
// eact.useEffect(() => { console.log('othersProps', otherPros)}, [])
    
  return (
          <TextInput style={[styles.input, style]} {...otherPros} />
  )
}
export default Input
const styles = StyleSheet.create({
    input: {
        height: 35,
        borderBottomColor: 'grey',
        borderBottomWidth: 2,
        marginVertical: 10
    }
})