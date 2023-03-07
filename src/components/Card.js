import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
{/*lo reemplamos por la view que contenia a todo el modal*/ }

const Card = ({ style, children }) => {
{  /* React.useEffect(() => {
        console.log('Card mounted');
        console.log('Card childre', children);
    }, []) asi verificamos con el useEffect los hijos*/}
    return (  
    <View style={[styles.cardContainer, style]}>{/*arry en el componente para los estilos*/}
      {children}
    </View>
  )
}
export default Card
const styles = StyleSheet.create({
    cardContainer: {
        shadowColor: 'black',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowRadius: 6,
        shadowOpacity: 0.25,
        elevation: 5,
        borderRadius: 10,
        backgroundColor: 'white',
    },
})