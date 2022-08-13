import * as yup from "yup";

//npn install yup
//yarn add yup
//criando o schema
//Shape é o corpo da validação q vai ser atribuida ao objeto formulario

const UserSchema = yup.object().shape({
  name: yup.string().required(),
  email: yup.string().email().required(),
  password: yup.string().min(6).max(10).required()
});

export default UserSchema;


