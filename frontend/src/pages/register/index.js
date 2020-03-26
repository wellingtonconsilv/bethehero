import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import api from '../../services/api';

import './style.css'
import logoImg from '../../assets/logo.svg';

export default function Register() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [city, setCity] = useState('');
    const [uf, setUf] = useState('');
    const [whatsapp, setWhatsapp] = useState('');


    const history = useHistory();

  async function handleRegister(e) {
        e.preventDefault();
        const ong = {
            name,
            email,
            city,
            uf,
            whatsapp
        };

        try {
            const response = await api.post('ongs', ong);
            alert(`Seu ID de acesso: ${response.data.id}`);
            history.push('/');
        } catch (err) {
            alert(err)
        }

    }

    return (
        <div className="register-container">
            <div className="content">
                <section>
                    <img src={logoImg} alt="Be The Hero" />


                    <h1>Cadastro</h1>
                    <p>Faça seu cadastro, entre na plataforma e ajude pessoas a encontrarem os casos da sua ONG.</p>

                    <Link className="link" to="/" >
                        <FiArrowLeft size={16} color="#E02041" />
                        Já tenho cadastro
                    </Link>

                </section>
                <form onSubmit={handleRegister}>
                    <input
                        value={name}
                        onChange={e => setName(e.target.value)}
                        placeholder="Nome da ONG"
                    />
                    <input
                        value={email}
                        onChange={e => setEmail(e.target.value)} placeholder="E-mail" type="email" />
                    <input
                        value={whatsapp}
                        onChange={e => setWhatsapp(e.target.value)}
                        placeholder="whatsapp"
                    />

                    <div className="input-group">
                        <input
                            value={city}
                            onChange={e => setCity(e.target.value)}
                            placeholder="Cidade"
                        />
                        <input
                            value={uf}
                            onChange={e => setUf(e.target.value)}
                            placeholder="Uf" style={{ width: 80 }}
                        />
                    </div>

                    <button className="button" type="submit">Cadastrar</button>
                </form>
            </div>
        </div>
    );
}