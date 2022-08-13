import './App.css';
import  UserSchema  from "./Validations/UserSchema";

function App() {

  const newUser = async (event) => {
    event.preventDefault();
    let formUser = {
      name: event.target[0].value,
      email: event.target[1].value,
      password: event.target[2].value, 
    }
    console.log("Data: ");
    console.log(formUser);
    const isValid = await UserSchema.isValid(formUser);
    console.log(isValid);
  }

  return (
    <div className="App">
     <form onSubmit={newUser}>
      <input type="text" name="name" placeholder="John"/>
      <input type="text"  name="email" placeholder="email@gmail.com"/>
      <input type="password" name="password" placeholder="password123"/>
      <button type="submit">Salvar</button>
     </form>
    </div>
  );
}

export default App;
