import React, { useEffect, useState } from 'react';
import { ActivityIndicator, Alert, Text, View } from 'react-native';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { ProductCard, SearchInput } from '../../../components';
import { deleteProduct, getProducts } from '../../../services';
import { admin, text } from '../../../styles';
import { Product } from '../../../types';

type Props= {
  setScreen: (args: string) => void;
  setProductId: (id:number) => void
}

const ListProducts = ({setScreen, setProductId}: Props) => {

  const [search, setSearch] = useState("");
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(false);
  

  async function handleDelete(id:number) {
    setLoading(true);
    Alert.alert(
      "Deseja Excluir",
      "Os dados serão deletados permanentemente",
      [
        {
          text: "voltar",
          style: "cancel",
        },
        {
          text: "confirmar",
          onPress: async () => {
            await deleteProduct(id);
            fillProducts();
          },
          style: "default",
        },
      ]
    );
    setLoading(false);
  }

  function handleEdit(id: number) {
    setProductId(id);
    setScreen("editProduct");
  }


  async function fillProducts() {
    setLoading(true);
    const res = await getProducts();
    setProducts(res.data.content);
    setLoading(false);
  }

  useEffect(() => {
    fillProducts();
  }, [deleteProduct])

  const data = search.length > 0 ?
    products.filter((product) =>
      product.name.toLowerCase().includes(search.toLowerCase())
    ) : products;

  return (
    <ScrollView style={admin.container}>
      <TouchableOpacity style={admin.addButton} onPress={() => setScreen("newProduct")}>
        <Text style={text.addButtonText}>Adicionar</Text>
      </TouchableOpacity>
      <SearchInput placeholder="Nome do produto" search={search} setSearch={setSearch}/>
      {loading? (
       <ActivityIndicator size="large" />
     ) : (
       data.map((product) =>(
         <ProductCard {...product} key={product.id} role="admin" handleDelete={handleDelete} handleEdit={handleEdit}/>
       )))
     }
    </ScrollView>
  )
}

export default ListProducts;