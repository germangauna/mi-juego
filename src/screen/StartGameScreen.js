import {
    Button,
    Keyboard,
    StyleSheet,
    Text,
    TouchableWithoutFeedback,
    View
} from 'react-native'
import React from 'react'
import Card from '../components/Card'
import Colors from '../constantes/Colors'
import Input from ' ../components/Input'

const StartGameScreen = () => {

    const [enteredValue, setEnteredValue] = React.useState('')
{/*funcionalidad del handler hacemos un useState con el valor ingresado,
todo lo que sea distinto a un numero lo cambia por un vacio, lo declaramos abajo */ }
    const numberInputHandler = inputText => {
         setEnteredValue(inputText.replace(/[^0-9]/g,''))
    }
    
    return (
        <TouchableWithoutFeedback onPress={() => {//esta funcion hace que el teclado desaparesca una vez que se usa
            Keyboard.dismiss()
        }}>
    <View style={styles.container}>
          <Text style={styles.title}>Comenzar el Juego</Text>
          <Card style={styles.inputContainer}>
            <Text style={styles.inputDescriptionText}>Selecciona el Numero</Text>
            {/*todas estas propts son las que hacen el contador de numeros*/ }      
              <Input style={styles.input}
                  blurOnSubmit
                  autoCapitalize='none'
                  autoCorrect={false}
                  keyBoardType='number-pad'
                  maxLength={2}
                  value={enteredValue}
                  onChangeText={numberInputHandler}
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
</TouchableWithoutFeedback>
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
        marginVertical: 10,
        textAlign: 'center'
    },
    inputContainer: {
        width: 300,
        maxWidth: '80%',
        padding: 20,
       alignItems:'center'
    },
    inputDescriptionText: {
        textAlign: 'center'
    },
    input: {
        width: 50,
        textAlign: 'center',
    },
    buttonsContainer: {
        flexDirection: 'row',
        width: '80%',
        justifyContent: 'space-between',
        paddingHorizontal: 15
    },
    button: {
    width: 100
}

    
    
})