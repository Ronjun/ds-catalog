import React, { useEffect, useState } from 'react';
import { ActivityIndicator, Text, View } from 'react-native';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { ProductCard, SearchInput } from '../../../components';
import { deleteProduct, getProducts } from '../../../services';
import { admin, text } from '../../../styles';
import { Product } from '../../../types';

type Props= {
  setScreen: (args: string) => void;
}

const ListProducts = ({setScreen}: Props) => {

  const [search, setSearch] = useState("");
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(false);

  async function handleDelete(id:number) {
    setLoading(true);
    const res = await deleteProduct(id);
    fillProducts();
    setLoading(false);

  }

  async function fillProducts() {
    setLoading(true);
    const res = await getProducts();
    setProducts(res.data.content);
    setLoading(false);
  }

  useEffect(() => {
    fillProducts();
  }, [])

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
         <ProductCard {...product} key={product.id} role="admin" handleDelete={handleDelete}/>
       )))
     }
    </ScrollView>
  )
}

export default ListProducts;