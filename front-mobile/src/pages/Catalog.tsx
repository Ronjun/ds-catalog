import React, { useState, useEffect } from 'react';
import { ScrollView, Text } from 'react-native';
import { ProductCard, SearchInput } from '../components';
import { api } from '../services';
import { theme } from '../styles';


const Catalog = () => {
  const [search, setSearch] = useState("");
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  async function fillProducts() {
    const res = await api.get(`/products?page=0&linesPerPage=12&direction=ASC&orderBy=name`);
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
      <Text>Catálogo de produtos</Text>
      <SearchInput placeholder="Nome do produto" search={search} setSearch={setSearch}/>
     {
       data.map((product) =>(
         <ProductCard {...product} key={product.id}/>
       ))
     }
    </ScrollView>
  )
}

export default Catalog;