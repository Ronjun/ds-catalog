import React, { useState } from "react";
import { ActivityIndicator, View, Text, Modal, Image, TouchableOpacity, } from "react-native";
import {
  ScrollView,
  TextInput,
  TouchableNativeFeedback,
  
} from "react-native-gesture-handler";
import { Product } from "../../../types";
import arrow from "../../../assets/leftArrow.png";
import { text, theme } from "../../../styles";

type Props = {
  setScreen: (args: string) => void;
};

const FormProduct = ({ setScreen }: Props) => {
  const [loading, setLoading] = useState(false);
  const [edit, setEdit] = useState(false);
  const [product, setProduct] = useState<Product>();
  const [categories, setCategories] = useState([
    {
      id: 3,
      name: "Computadores",
    },
    {
      id: 1,
      name: "Games",
    },
    {
      id: 2,
      name: "Eletronicos",
    },
    {
      id: 4,
      name: "Livros",
    },
  ]);
  const [showCategories, setShowCategories] = useState(false);

  return (
    <View style={theme.formContainer}>
      {loading ? (
        <ActivityIndicator size="large" />
      ) : (
        <View style={theme.formCard}>
          <ScrollView>
            <Modal
              visible={showCategories}
              animationType="fade"
              transparent={true}
              presentationStyle="overFullScreen"
            >
              <View style={theme.modalContainer}>
                <ScrollView contentContainerStyle={theme.modalContent}>
                  {categories.map((cat) => (
                    <TouchableOpacity
                      style={theme.modalItem}
                      key={cat.id}
                      onPress={() => {
                        setProduct({ ...product, categories: cat.name });
                        setShowCategories(!showCategories);
                      }}
                    >
                      <Text>{cat.name}</Text>
                    </TouchableOpacity>
                  ))}
                </ScrollView>
              </View>
            </Modal>

            <TouchableOpacity
              style={theme.goBackContainer}
              onPress={() => setScreen("products")}
            >
              <Image source={arrow} />
              <Text style={text.goBackText}>Voltar</Text>
            </TouchableOpacity>
            <TextInput style={theme.formInput} placeholder="Nome do Produto" />
            <TouchableOpacity
              onPress={() => setShowCategories(!showCategories)}
              style={theme.selectInput}
            >
              <Text
                style={
                  product?.categories === undefined && { color: "#9e9e9e" }
                }
              >
                {
                  product?.categories === undefined
                  ? "Escolha uma categoria"
                  : product?.categories
                }
              </Text>
            </TouchableOpacity>
            <TextInput style={theme.formInput} placeholder="Preço" />
            <TextInput style={theme.formInput} placeholder="URL da imagem" />
            <TextInput
              style={theme.textArea}
              multiline
              placeholder="Descrição"
            />
            <View style={theme.buttonContainer}>
              <TouchableOpacity style={theme.deleteBtn}>
                <Text style={text.deleteTxt}>Cancelar</Text>
              </TouchableOpacity>
              <TouchableOpacity style={theme.saveBtn}>
                <Text style={text.saveTxt}>Salvar</Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </View>
      )}
    </View>
  );
};

export default FormProduct;
