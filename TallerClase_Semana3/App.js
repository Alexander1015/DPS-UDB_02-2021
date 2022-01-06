import React from 'react';
import { Text, View, StyleSheet , Image } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Image style={styles.img} source={require('./assets/Logo.png')}/>
      <Text><Text style={styles.title}>Nombre Completo:</Text> <Text style={styles.options}>Edgard Alexander Barrera Flamenco</Text></Text>
      <Text><Text style={styles.title}>Hobbies:</Text> <Text style={styles.options}>Dibujar, Escuchar musica y Leer</Text></Text>
      <Text><Text style={styles.title}>Lenguaje de Programación Favorito:</Text> <Text style={styles.options}>PHP y C#</Text></Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  img: {
    marginHorizontal: 'auto',
    marginBottom: 10,
    width: 100,
    height: 100,
  },
  title: {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 20,
    paddingRight: 25,
  },
  options: {
    fontSize: 15,
  },
});
