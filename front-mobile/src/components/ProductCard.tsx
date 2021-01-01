import React from "react";
import { Text, View, TouchableOpacity, Image } from "react-native";
import { text, theme } from "../styles";
import { useNavigation } from '@react-navigation/native';

interface ProductProps {
  id: number;
  name: string;
  imgUrl: string;
  price: number;
}

const ProductCard = ({ id, name, imgUrl, price }: ProductProps) => {

  const navigation = useNavigation();

  return (
    <TouchableOpacity style={theme.productCard} onPress={() => navigation.navigate("ProductDetails", {id})}>
      <Image source={{ uri: imgUrl }} style={theme.productImage} />
      <View style={theme.productDescription}>
        <Text style={text.productName}>{name}</Text>
        <View style={theme.priceContainer}>
          <Text style={text.currency}>R$ </Text>
          <Text style={text.productPrice}>{price}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default ProductCard;
