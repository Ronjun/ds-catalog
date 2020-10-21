import { makeRequest } from "core/utils/request";
import React, { useState } from "react";
import BaseForm from "../../BaseForm";
import "./styles.scss";

type FormState = {
  name: string,
  price: string,
  category: string,
  description: string,
}

const Form = () => {
  const [formData, setFormData] = useState<FormState>({
    name:'',
    price: '',
    category: '',
    description: '',
  });

  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const name = event.target.name;
    const value = event.target.value;
    
    setFormData(data => ({ ...data, [name]: value}));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) =>{
    event.preventDefault();
    const payload = {
      ...formData,
      imgUrl: 'https://compass-ssl.xbox.com/assets/c8/9d/c89d04a8-ba6d-496d-aa7e-5b1cf0d60ea9.jpg?n=10202018_Panes-3-Up-0_Hero-SX_347x347.jpg',
      categories: [{id: formData.category}],
    }

    makeRequest({ url: '/products', method: 'POST', data: payload})
  }

  return (
    <form onSubmit={handleSubmit}>
      <BaseForm title="cadastrar um produto">
        <div className="row">
          <div className="col-6">
            <input
              type="text"
              className="form-control mb-5"
              onChange={handleOnChange}
              value={formData.name}
              name="name"
              placeholder="Nome do Produto"
            />
            <select
              value={formData.category}
              name="category"
              className="form-control mb-5"
              onChange={handleOnChange}
            >
              <option value="2">Eletronicos</option>
              <option value="3">Computadores </option>
              <option value="1">Livros</option>
            </select>
            <input
              type="text"
              className="form-control mb-5"
              onChange={handleOnChange}
              value={formData.price}
              name="price"
              placeholder="Preço"
            />
          </div>
          <div className="col-6">
            <textarea 
            name="description" 
            cols={30} 
            rows={10}
            onChange={handleOnChange}
            value={formData.description}
            className="form-control"
            />
          </div>
        </div>
      </BaseForm>
    </form>
  );
};

export default Form;
