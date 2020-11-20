import { makePrivateRequest, makeRequest } from "core/utils/request";
import React, { useEffect, useState } from "react";
import { useForm, Controller } from "react-hook-form";
import BaseForm from "../../BaseForm";
import Select from 'react-select';
import { toast } from 'react-toastify';
import { useHistory, useParams } from "react-router-dom";
import "./styles.scss";
import { Category } from "core/types/Product";

type FormState = {
  name: string;
  price: string;
  categories: Category[];
  description: string;
  imgUrl: string;
}

type ParamsType = {
  productId: string;
}

const Form = () => {
  const { register, handleSubmit, errors, setValue, control } = useForm<FormState>();
  const history = useHistory();
  const { productId } = useParams<ParamsType>();
  const [isLoadingCategories, setIsLoadingCategories] = useState(false);
  const [categories, setCategories] = useState<Category[]>([]);
  const isEditing = productId !== 'create';

  useEffect(() =>{
    if(isEditing){
      makeRequest({url: `/products/${productId}`})
      .then(response => {
        setValue('name', response.data.name);
        setValue('price', response.data.price);
        setValue('categories', response.data.categories);
        setValue('description', response.data.description);
        setValue('imgUrl', response.data.imgUrl);
      })
    }
  }, [productId, isEditing, setValue]);

  useEffect(() => {
    setIsLoadingCategories(true);
    makeRequest({url: "/categories"})
      .then(response => setCategories(response.data.content))
      .finally(() => setIsLoadingCategories(false));
  },[]);

  const onSubmit = (data: FormState) => {
   makePrivateRequest({ 
     url: isEditing? `/products/${productId}` : "/products", 
     method: isEditing? "PUT" : "POST", 
     data 
  })
    .then(() => {
      toast.info("Produto salvo com sucesso!");
      history.push("/admin/products");
    })
    .catch(() =>{
      toast.error("Erro ao salvar produto!");
    })
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <BaseForm 
        title={isEditing? "Editar um produto" : "cadastrar um produto"}
      >
        <div className="row">
          <div className="col-6">
            <div className="margin-bottom-30">
              <input
                ref={register({
                  required: "Campo Obrigatório",
                  minLength: { value: 5, message: "O campo deve conter no mínimo 5 caracteres"},
                  maxLength: { value: 60, message: "O campo deve ter no máximo 60 caracteres"}
                })}
                type="text"
                className="form-control input-base"
                name="name"
                placeholder="Nome do Produto"
              />
              {errors.name &&(
                <div className="invalid-feedback d-block">
                  {errors.name.message}
                </div>
              )}
            </div>
            <div className="margin-bottom-30">
              <Controller
                name="categories"
                rules={{ required: true }}
                as={Select} 
                isLoading={isLoadingCategories}
                control={control}
                options={categories}
                getOptionLabel={(option: Category) =>option.name}
                getOptionValue={(option: Category) => String(option.id)} 
                placeholder="Categorias"
                classNamePrefix="categories-select"
                isMulti
              />
              {errors.categories && (
                <div className="invalid-feedback d-block">
                  Campo obrigatório
                </div>
              )}
            </div>
            <div className="margin-bottom-30">
              <input
                ref={register({ required: "Campo Obrigatório" })}
                type="number"
                className="form-control input-base"
                name="price"
                placeholder="Preço"
              />
              {errors.price &&(
                <div className="invalid-feedback d-block">
                  {errors.price.message}
                </div>
              )}
            </div>
            <div className="margin-bottom-30">
              <input
                ref={register({ required: "Campo Obrigatório" })}
                type="text"
                className="form-contro input-base"
                name="imgUrl"
                placeholder="Url da Imagem"
              />
              {errors.imgUrl &&(
                <div className="invalid-feedback d-block">
                  {errors.imgUrl.message}
                </div>
              )}
            </div>
          </div>
          <div className="col-6">
            <textarea
              ref={register({ required: "Campo Obrigatório" })}
              name="description"
              cols={30}
              rows={10}
              className="form-control input-base"
              placeholder="Descrição"
            />
            {errors.description &&(
                <div className="invalid-feedback d-block">
                  {errors.description.message}
                </div>
              )}
          </div>
        </div>
      </BaseForm>
    </form>
  );
};

export default Form;
