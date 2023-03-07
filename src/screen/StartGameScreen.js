import {
    Button,
    StyleSheet,
    Text,
    Input,
    View,

} from 'react-native'

import React from 'react-native'
import Card from '../components/Card'
import Colors from '../constantes/Colors'

const StartGameScreen = () => {
    
  return (
    <View stile={styles.container}>
          <Text style={styles.title}>Comenzar el Juego</Text>
          <Card style={styles.inputContainer}>
              <Text style={styles.inputDescriptionText}>Selecciona el Numero</Text>
              <Input style={styles.input}
                  bluOnSubmit
                  autoCopitalize='none'
                  autoCorrect={false}
                  keyBoardType='number-pad'
                  maxLength={2}
              />
              <View style={styles.buttonsContainer}>
                  <View style={styles.button}> 
                      <Button title='Limpiar' onPress={() => {}} color={Colors.accent}/> 
                  </View>
                  <View style={styles.button}> 
                      <Button title='Confirmar' onPress={() => {}} color={Colors.primary}/>
                  </View>
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
    },
    button: {
    width: 100
}

    
    
})