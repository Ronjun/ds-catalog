import React, { useState } from "react";
import { Text, View } from "react-native";
import { TabBar } from "../../components";
import { theme } from "../../styles";

import Categories from './Categories';
import Users from './Users';
import Products from './Products';

const Dashboard = () => {

  const [screen, setScreen] = useState('products');

  return (
    <View >
      <TabBar screen={screen} setScreen={setScreen}/>
      {screen === 'products' && <Products />}
      {screen === 'categories' && <Categories />}
      {screen === 'users' && <Users />}
    </View>
  );
};

export default Dashboard;
