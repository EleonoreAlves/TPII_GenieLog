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

const ModuleItem = () =>{
    const [id, setId] = useState("");
    const [name, setName] = useState("");
    const [description, setDiscription] = useState("");
    const [year, setYear] = useState("");
    const [teacher, setTeacher] = useState("");
    const [imageUrl, setImageUrl] = useState("");

    return(
        <View>
            <Text>
                {name}+{year}+{description}
            </Text>
        </View>
    )
};
export default ModuleItem;