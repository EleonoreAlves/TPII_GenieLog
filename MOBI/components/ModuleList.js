import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Alert,
} from "react-native";
import getAllModules from "../api/modules";

const ModuleList = () =>{
    const [id, setId] = useState("");
    const [nom, setNom] = useState("");
    const [descriptif, setDiscriptif] = useState("");
    const [annee, setAnnee] = useState("");
    const [img, setImg] = useState("");
};