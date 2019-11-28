import React , {useState} from 'react';
import api from '../../services/api';


export default function Login( {history}) {

//destructuring
const [email, setEmail] = useState('');

async function handleSubmit(event) {
  event.preventDefault();
  const response = await api.post(
    '/sessions',
    { 
      email: email
    }
  );
  //Store ID globally
  const {_id} = response.data;
  localStorage.setItem('user', _id);
  history.push('/dashboard');

}

    return (

        <>
            <p>
                Ofereça spots para programadores e encontre talentos para sua empresa.
            </p>

            <form onSubmit={handleSubmit} method="post">
                <label htmlFor="email">E-mail</label>
                <input
                    type="label"
                    id="email"
                    placeholder="Endereço de E-mail"
                    value={email}
                    onChange={event => setEmail(event.target.value)}
                />
                <button className="btn" type="submit">Entrar</button>
            </form>
        </>
    )
}