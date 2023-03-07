import { StyleSheet, View } from 'react-native';

import  Header  from './src/components/header';
import StartGameScreen from './src/screen/StartGameScreen';

export default function App() {
  return (
    <View style={styles.container}>
      <Header title='Adivina el Numero' />
      <StartGameScreen/>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1
  },
});
