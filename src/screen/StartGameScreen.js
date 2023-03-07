import {
    Button,
    StyleSheet,
    Text,
    TextInput,
    View,
} from 'react-native'

import React from 'react-native'
import Card from '../components/Card'

const StartGameScreen = () => {
    
  return (
    <View stile={styles.container}>
          <Text style={styles.title}>Comenzar el Juego</Text>
          <Card style={styles.inputContainer}>
              <Text style={styles.inputDescriptionText}>Selecciona el Numero</Text>
              <TextInput />
              <View style={styles.buttonsContainer}>
                  <Button title='Limpiar' onPress={() => {}}/>
                  <Button title='Confirmar' onPress={() => {}}/>
              </View>
       </Card>
    </View>
  )
}
export default StartGameScreen
const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        alignItems: 'center',
        
    },
    title: {
        fontSize: 20,
        marginVertical: 10
    },
    InputContainer: {
        width: 300,
        maxWidth: '80%',
        padding: 20,
        alignItems: 'center'
    },
    inputDescriptionText: {
        textAlign: 'center'
    },
    buttonsContainer: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        paddingHorizontal: 15
    }
    
    
})