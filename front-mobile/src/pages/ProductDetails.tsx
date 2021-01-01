import React, { useState, useEffect } from "react";
import { View, Text, ActivityIndicator, Image } from "react-native";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import { api } from "../services";
import arrow from "../assets/leftArrow.png";
import { theme } from "../styles";

const ProductDetails = ({
  route: {
    params: { id },
  },
}) => {
  const [product, setProduct] = useState({
    id: null,
    name: null,
    description: null,
    price: null,
    imgUrl: null,
    date: null,
    categories: [],
  });
  const [loading, setLoading] = useState(false);

  async function loadProductData() {
    setLoading(true);
    const res = await api.get(`products/${id}`);
    setProduct(res.data);
    setLoading(false);
  }

  useEffect(() => {
    loadProductData();
  }, []);

  return (
    <View>
      {loading ? (
        <ActivityIndicator size="large" />
      ) : (
        <View>
          <TouchableOpacity>
            <Image source={arrow} />
            <Text>Voltar</Text>
          </TouchableOpacity>
          <View>
            <Image
              source={{ uri: product.imgUrl }}
              style={theme.productImage}
            />
          </View>
          <Text>{product.name}</Text>
          <View>
            <Text>R$</Text>
            <Text>{product.price}</Text>
          </View>
          <ScrollView>
            <Text>{product.description}</Text>
          </ScrollView>
        </View>
      )}
    </View>
  );
};

export default ProductDetails;