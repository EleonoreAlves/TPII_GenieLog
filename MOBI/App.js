import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { NavigationContainer} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {Alert,TextInput, StyleSheet, Text, View,TouchableOpacity,Button } from 'react-native';
import ModuleList from "./components/ModuleList";

const HomeScreen = ({ navigation }) => {
  const [mail,setMail]=useState("")
  const [mdp,setMdp]=useState("")
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.flex1}
        placeholder="Email"
        onChangeText={(text)=>{setMail(text)}}
      />
      <TextInput
        placeholder="Mot de Passe"
        style={styles.flex1}
        onChangeText={(text)=>{setMdp(text)}}
      />
      <TouchableOpacity onPress={() =>  {Alert.alert('Action sélectionnée : Connexion', ` ${mail} ${mdp}  `)}}>
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
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate("Details")}
      />
    </View>
  );
};
const DetailsScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>This is the details screen</Text>
      <ModuleList />
      <Button
        title="Go to Details... again"
        onPress={() => navigation.push("Details")}
      />
      <Button title="Go back" onPress={() => navigation.goBack()} />
      <Button title="Go to Home" onPress={() => navigation.navigate("Home")} />
    </View>
  );
};
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
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
