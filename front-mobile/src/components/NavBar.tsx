import React, { useEffect, useState } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import menu from "../assets/menu.png";
import { Image, View, Text } from "react-native";
import { nav, text } from "../styles";
import { TouchableNativeFeedback } from "react-native-gesture-handler";
import { doLogout, isAuthenticated } from "../services/auth";

const NavBar = () => {
  const [show, setShow] = useState(false);
  const navigation = useNavigation();
  const route = useRoute();
  const [authenticated, setAuthenticated] = useState(false);

  function navigate(path: any) {
    if (path) {
      navigation.navigate(path);
      setShow(false);
    }
    setShow(false);
  }

  async function logged() {
    const result = await isAuthenticated();

    result ? setAuthenticated(true) : setAuthenticated(false);
  }

  function Logout() {
    doLogout();
    navigation.navigate("Login");
  }

  useEffect(() => {
    logged();
  }, []);

  return (
    <>
      {authenticated ? (
        <TouchableNativeFeedback style={nav.logoutBtn} onPress={() => Logout()}>
          <Text style={text.logoutText}>Sair</Text>
        </TouchableNativeFeedback>
      ) : (
        <TouchableNativeFeedback
          style={nav.drawer}
          onPress={() => setShow(!show)}
        >
          <Image source={menu} />
          {show ? (
            <View style={nav.options}>
              <TouchableNativeFeedback
                style={nav.option}
                onPress={() => navigate("Home")}
              >
                <Text
                  style={[
                    nav.textOption,
                    route.name === "Home" ? nav.textActive : null,
                  ]}
                >
                  Home
                </Text>
              </TouchableNativeFeedback>
              <TouchableNativeFeedback
                style={nav.option}
                onPress={() => navigate("Catalog")}
              >
                <Text
                  style={[
                    nav.textOption,
                    route.name === "Catalog" ? nav.textActive : null,
                  ]}
                >
                  Catálogo
                </Text>
              </TouchableNativeFeedback>
              <TouchableNativeFeedback
                style={nav.option}
                onPress={() => navigate("Login")}
              >
                <Text
                  style={[
                    nav.textOption,
                    route.name === "Admin" ? nav.textActive : null,
                  ]}
                >
                  Admin
                </Text>
              </TouchableNativeFeedback>
            </View>
          ) : null}
        </TouchableNativeFeedback>
      )}
    </>
  );
};

export default NavBar;
