import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { tabBar } from "../styles";

type Props = {
  screen: string;
  setScreen: (page: string) => void;
}

const TabBar = ({screen, setScreen}: Props) => {

  function changeScreen(page: string){
    setScreen(page);
  }

  return (
    <View style={tabBar.container}>
      <TouchableOpacity 
        style={[tabBar.pill, screen === 'products' && tabBar.pillActive]} 
        activeOpacity={0.7}
        onPress={() => changeScreen('products')}
      >
        <Text style={[tabBar.pillText, screen === 'products' && tabBar.pillTextActive]}>Produtos</Text>
      </TouchableOpacity>
      <TouchableOpacity 
      style={[tabBar.pill, screen === 'categories' && tabBar.pillActive]} 
      activeOpacity={0.7}
      onPress={() => changeScreen('categories')}
      >
        <Text style={[tabBar.pillText, screen === 'categories' && tabBar.pillTextActive]}>Categorias</Text>
      </TouchableOpacity>
      <TouchableOpacity 
      style={[tabBar.pill, screen === 'users' && tabBar.pillActive]} 
      activeOpacity={0.7}
      onPress={() => changeScreen('users')}
      >
        <Text style={[tabBar.pillText, screen === 'users' && tabBar.pillTextActive]}>Usuários</Text>
      </TouchableOpacity>
    </View>
  );
};

export default TabBar;
