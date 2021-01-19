import React from "react";
import { Text, View, TouchableOpacity, Image } from "react-native";
import { text, theme } from "../styles";
import { useNavigation } from '@react-navigation/native';

interface ProductProps {
  id: number;
  name: string;
  imgUrl: string;
  price: number;
  role?: string;
  handleDelete: (id: number) => void;
}

const ProductCard = ({ id, name, imgUrl, price, role, handleDelete }: ProductProps) => {

  const navigation = useNavigation();

  return (
    <TouchableOpacity style={theme.productCard} onPress={() => role? ' ': navigation.navigate("ProductDetails", {id})}>
      <Image source={{ uri: imgUrl }} style={theme.productImage} />
      <View style={theme.productDescription}>
        <Text style={text.productName}>{name}</Text>
        <View style={theme.priceContainer}>
          <Text style={text.currency}>R$ </Text>
          <Text style={text.productPrice}>{price}</Text>
        </View>
        {
          role === 'admin' && (
            <View style={theme.buttonContainer}>
              <TouchableOpacity style={theme.deleteBtn} onPress={() => handleDelete(id)}>
                <Text style={text.deleteTxt}>Excluir</Text>
              </TouchableOpacity>
              <TouchableOpacity style={theme.editBtn}>
                <Text style={text.editTxt}>Editar</Text>
              </TouchableOpacity>
            </View>
          )
        }
      </View>
    </TouchableOpacity>
  );
};

export default ProductCard;
