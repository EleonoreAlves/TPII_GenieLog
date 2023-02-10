import { StatusBar } from 'expo-status-bar';
import {Alert,TextInput, StyleSheet, Text, View,TouchableOpacity } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.flex1}
        placeholder="Email"
      />
      <TextInput
        placeholder="Mot de Passe"
        style={styles.flex1}
      />
      <TouchableOpacity onPress={() =>  {Alert.alert('Action sélectionnée : \n Connexion\n ')}}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>Se Connecter
          </Text>
          </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() =>  {Alert.alert('Action Sélectionnée :\n Mise à jour du mot de passe')}}>
          <View style={styles.button1}>
            <Text style={styles.text}>Mot de Passe oublié?
          </Text>
          </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() =>  {Alert.alert('Action Sélectionnée : \n Inscription')}}>
          <View style={styles.button1}>
            <Text style={styles.text}
            onSubmitEditing={()=>
              {
                Alert.alert('Bonjour');
              }}>S'inscrire
          </Text>
          </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    textAlign : 'center',
    justifyContent: 'center',
  },
  button: {
    marginBottom: 30,
    width: 260,
    alignItems: 'center',
    backgroundColor: 'red',
    borderRadius : 5,
  },
  button1:{
    marginBottom: 30,
    width: 260,
    alignItems: 'center',
    borderRadius : 5,
    color:'black',
  },
  flex1:{
    marginBottom: 30,
    width: 260,
    alignItems: 'center',
    backgroundColor: 'pink',
    textAlign : 'center',
    borderRadius : 5,
  },
 
  buttonText:{
    textAlign: 'center',
    padding: 20,
    color: 'white',
  },
});
