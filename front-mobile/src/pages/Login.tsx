import React, { useEffect, useState } from "react";
import { Text, TouchableOpacity, View, Image } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import { text, theme } from "../styles";

import eyesOpened from '../assets/eyesOpened.png';
import eyesClosed from '../assets/eyesClosed.png';
import arrow from '../assets/arrow.png';
import { isAuthenticated, login } from "../services/auth";
import { useNavigation } from "@react-navigation/native";

const Login = () => {

  const[hidePassword, setHidePassword] = useState(true);
  const[userInfo, setUserInfo] = useState({username: '', password: ''})
  const[userFetchData, setUserFetchData] = useState({});
  const navigation = useNavigation();

  async function handleLogin(){
    const data = await login(userInfo);
    setUserFetchData(data);
    navigation.navigate("Dashboard");
  }

  return (
    <View style={theme.container}>
      <View style={theme.card}>
        <Text style={text.loginTitle}>Login</Text>
        <View style={theme.form}>
          <TextInput
            placeholder="Email"
            autoCapitalize="none"
            keyboardType="email-address"
            style={theme.textInput}
            value={userInfo.username}
            onChangeText={(e) =>{
              const newUserInfo ={...userInfo};
              newUserInfo.username = e;
              setUserInfo(newUserInfo);
            }}
          />
          <View style={theme.passwordContainer}>
            <TextInput
              placeholder="Senha"
              autoCapitalize="none"
              style={theme.textInput}
              value={userInfo.password}
              secureTextEntry={hidePassword}
              onChangeText={(e) =>{
                const newUserInfo ={...userInfo};
                newUserInfo.password = e;
                setUserInfo(newUserInfo);
              }}
            />
            <TouchableOpacity
              style={theme.toggle}
              onPress={() => setHidePassword(!hidePassword)}
            >
              <Image source={hidePassword ? eyesOpened : eyesClosed} style={theme.eyes}/>
            </TouchableOpacity>
          </View>
        </View>
        <TouchableOpacity style={theme.primaryButton} activeOpacity={0.8} onPress={() => handleLogin()}>
          <View style={theme.buttonTextContainer}>
            <Text style={text.primaryText}>Fazer Login</Text>
          </View>
          <View style={theme.arrowContainer}>
            <Image source={arrow} />
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Login;
