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
import {
  updateProduct,
  getCategories,
  getProducts,
  findById,
} from "../../../services";
import { TextInputMask } from "react-native-masked-text";

type Props = {
  setScreen: (args: string) => void;
  productId: number;
};

const EditProduct = ({ setScreen, productId }: Props) => {
  const [loading, setLoading] = useState(false);
  const [product, setProduct] = useState<Product>({
    id: 0,
    name: "",
    description: "",
    imgUrl: "",
    price: "",
    categories: [],
  });
  const [categories, setCategories] = useState<Category[]>([]);
  const [showCategories, setShowCategories] = useState(false);

  async function handleSave() {
    setLoading(true);

    const data = { ...product };
    try {
      await updateProduct(data);
      setScreen("products");
      Toast.showSuccess("Produto salvo com sucesso!");
    } catch (error) {
      Toast.show("Erro ao salvar...");
    }
    setLoading(false);
  }

  async function loadCategories() {
    setLoading(true);
    const res = await getCategories();
    setCategories(res.data.content);
    setLoading(false);
  }

  async function loadProduct() {
    setLoading(true);
    const res = await findById(productId);
    setProduct(res.data);
    setLoading(false);
  }

  function getRaw(args: any) {
    const str = args;
    const res = str.slice(2).replace(/\./g, "").replace(/,/g, ".");
    return res;
  }

  useEffect(() => {
    loadCategories();
    loadProduct();
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
                  {categories.map((cat: Category) => {
                    const { id, name } = cat;
                    return (
                      <TouchableOpacity
                        style={theme.modalItem}
                        key={id}
                        onPress={() => {
                          setProduct({
                            ...product,
                            categories: [{ id, name }],
                          });
                          setShowCategories(!showCategories);
                        }}
                      >
                        <Text>{name}</Text>
                      </TouchableOpacity>
                    );
                  })}
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
              <Text>
                {product.categories.length > 0 && product.categories[0].name}
              </Text>
            </TouchableOpacity>
            <TextInputMask
              type="money"
              keyboardType={"numeric"}
              style={theme.formInput}
              placeholder="Preço"
              value={product.price}
              onChangeText={(input) => setProduct({ ...product, price: getRaw(input) })}
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

export default EditProduct;
