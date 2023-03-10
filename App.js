import { StyleSheet, View } from 'react-native';

import React from 'react'
import  Header  from './src/components/header';
import StartGameScreen from './src/screen/StartGameScreen';
import GameScreen from './src/screen/GameScreen';


export default function App() {

   const [userNumber, setUserNumber] = React.useState();

  const startGameHandler = (selectedNumber) => {
    setUserNumber(selectedNumber);
  };

  return (


    <View style={styles.container}>
      <Header title='Adivina el Numero' />
      {
        !userNumber
          ? <StartGameScreen onStartGame={startGameHandler} />
          : <GameScreen userOption={userNumber} />
      }
      <StartGameScreen/>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1
  },
});
