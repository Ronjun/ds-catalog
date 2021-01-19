import React, { useEffect, useState } from "react";
import Toast from "react-native-tiny-toast";
import {
  ActivityIndicator,
  View,
  Text,
  Modal,
  Image,
  TouchableOpacity,
  Alert,
} from "react-native";
import { ScrollView, TextInput } from "react-native-gesture-handler";
import { Product, Category } from "../../../types";
import arrow from "../../../assets/leftArrow.png";
import { text, theme } from "../../../styles";
import { createProduct, getCategories } from "../../../services";
import { TextInputMask } from "react-native-masked-text";
import { parse } from "query-string";

type Props = {
  setScreen: (args: string) => void;
};

const FormProduct = ({ setScreen }: Props) => {
  const [loading, setLoading] = useState(false);
  const [edit, setEdit] = useState(false);
  const [product, setProduct] = useState<Product>({
    id: 0,
    name: "",
    description: "",
    imgUrl: "",
    price: '',
    categories: [],
  });
  const [categories, setCategories] = useState<Category[]>([]);
  const [showCategories, setShowCategories] = useState(false);

  function handleSave() {
    !edit && newProduct();
  }

  async function newProduct() {
    setLoading(true);
    const cat = replaceCategory();
    const data = { ...product, categories: [{ id: cat }], price: getRaw() };
    try {
      await createProduct(data);
      Toast.showSuccess("Produto salvo com sucesso!");
    } catch (error) {
      Toast.show("Erro ao salvar...");
    }
    setLoading(false);
  }

  function replaceCategory() {
    const cat = categories.find((category) => category.name);
    return cat?.id;
  }

  async function loadCategories() {
    setLoading(true);
    const res = await getCategories();
    setCategories(res.data.content);
    setLoading(false);
  }

  function getRaw(){
    const str = (product.price).toString();
    const res = str.slice(2).replace(/\./g,'').replace(/,/g, '.');
    return res;
  }

  useEffect(() => {
    loadCategories();
  }, []);

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
            <TextInput
              style={theme.formInput}
              placeholder="Nome do Produto"
              value={product.name}
              onChangeText={(input) => setProduct({ ...product, name: input })}
            />
            <TouchableOpacity
              onPress={() => setShowCategories(!showCategories)}
              style={theme.selectInput}
            >
              <Text
                style={product?.categories.length === 0 && { color: "#9e9e9e" }}
              >
                {product.categories.length === 0
                  ? "Escolha uma categoria"
                  : product.categories}
              </Text>
            </TouchableOpacity>
            <TextInputMask
              type='money'
              keyboardType={"numeric"}
              style={theme.formInput}
              placeholder="Preço"
              value={product.price}
              onChangeText={(input) =>
                setProduct({ ...product, price: input })
              }
            />
            <TextInput
              style={theme.formInput}
              placeholder="URL da imagem"
              value={product.imgUrl}
              onChangeText={(input) =>
                setProduct({ ...product, imgUrl: input })
              }
            />
            <TextInput
              style={theme.textArea}
              multiline
              placeholder="Descrição"
              value={product.description}
              onChangeText={(input) =>
                setProduct({ ...product, description: input })
              }
            />
            <View style={theme.buttonContainer}>
              <TouchableOpacity
                style={theme.deleteBtn}
                onPress={() => {
                  Alert.alert(
                    "Deseja cancelar?",
                    "Os dados inseridos não serão salvos",
                    [
                      {
                        text: "voltar",
                        style: "cancel",
                      },
                      {
                        text: "confirmar",
                        onPress: () => setScreen("products"),
                        style: "default",
                      },
                    ]
                  );
                }}
              >
                <Text style={text.deleteTxt}>Cancelar</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={theme.saveBtn}
                onPress={() => handleSave()}
              >
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
