import React, { useState, useEffect } from 'react';
import { ActivityIndicator, ScrollView, Text } from 'react-native';
import { ProductCard, SearchInput } from '../components';
import { api } from '../services';
import { text, theme } from '../styles';
import { Product } from '../types';


const Catalog = () => {
  const [search, setSearch] = useState("");
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(false);

  async function fillProducts() {
    const res = await api.get(`/products?linesPerPage=999999&direction=ASC&orderBy=name`);
    setProducts(res.data.content);
  }

  useEffect(() => {
    fillProducts();
  }, [])

  const data = search.length > 0 ?
    products.filter((product) =>
      product.name.toLowerCase().includes(search.toLowerCase())
    ) : products;
  
  return(
    <ScrollView contentContainerStyle={theme.scrollContainer}>
      <Text style={text.bold}>Catálogo de produtos</Text>
      <SearchInput placeholder="Nome do produto" search={search} setSearch={setSearch}/>
     {loading? (
       <ActivityIndicator size="large" />
     ) : (
       data.map((product) =>(
         <ProductCard {...product} key={product.id} handleDelete={()=> {}} handleEdit={()=> {}}/>
       )))
     }
    </ScrollView>
  )
}

export default Catalog;