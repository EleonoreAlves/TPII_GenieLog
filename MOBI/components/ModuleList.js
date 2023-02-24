import React, { useState,useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Alert,
  FlatList,
} from "react-native";
import modules from "../api/modules";
import getAllModules from "../api/modules";

const ModuleList = () =>{
    [modules,SetModules]=useState([]);
    getAllModules().then((modules)=>SetModules(modules));
    const module =getAllModules(id,year,name,description, teacher,imageUrl);
    <View>
        <Flatlist renderImage/>
    </View>
    useEffect(() => {
        modules.name='Le nom du module est {name}'
    });;
};