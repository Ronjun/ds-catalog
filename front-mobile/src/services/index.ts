import axios from 'axios';
import { userToken } from './auth';

export const api = axios.create({
  
  baseURL: "https://ronaldo-dscatalog.herokuapp.com",
  
})

export const TOKEN = 'Basic ZHNjYXRhbG9nOmRzY2F0YWxvZzEyMw==';

export function getProducts(){
  const res = api.get(`/products?linesPerPage=9999999&direction=DESC&orderBy=id`);
  return res;
}

export function getCategories(){
  const res = api.get(`/categories?direction=DESC&orderBy=name`);
  return res;
}

export async function createProduct(data: object){
  const authToken = await userToken();
  const res = api.post(`/products`, data, {
    headers:{
      Authorization: `Bearer ${authToken}`,
    },
  });
  return res;
}