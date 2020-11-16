import { makePrivateRequest } from "core/utils/request";
import React from "react";
import { useForm } from "react-hook-form";
import BaseForm from "../../BaseForm";
import "./styles.scss";

type FormState = {
  name: string;
  price: string;
  category: string;
  description: string;
  imageUrl: string;
};

const Form = () => {
  const { register, handleSubmit, errors } = useForm<FormState>();

  const onSubmit = (data: FormState) => {

   makePrivateRequest({ url: "/products", method: "POST", data });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <BaseForm title="cadastrar um produto">
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
              <input
                ref={register({ required: "Campo Obrigatório" })}
                type="number"
                className="form-control 30 input-base"
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
                name="imageUrl"
                placeholder="Url da Imagem"
              />
              {errors.imageUrl &&(
                <div className="invalid-feedback d-block">
                  {errors.imageUrl.message}
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
