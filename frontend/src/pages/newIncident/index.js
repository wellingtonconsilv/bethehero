import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import api from '../../services/api';

import './style.css'

import logoImg from '../../assets/logo.svg'

export default function NewIncident() {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [value, setValue] = useState('');

    const ongId = localStorage.getItem('ongId');

    const history = useHistory();

    async function handleRegister(e) {
        e.preventDefault();
        const incident = {
            title,
            description,
            value
        };

        try {
            await api.post(`incidents/`, incident, {
                headers: {
                    Authorization: ongId
                }
            });

            history.push('/incidents')
        } catch (err) {
            alert('Erro ao cadastrar o caso.');
        }
    }



    return (
        <div className="new-incident-container">
            <div className="content">
                <section>
                    <img src={logoImg} alt="Be The Hero" />


                    <h1>Cadastrar novo caso</h1>
                    <p>Descreva o caso detalhadamente para encontrar um héroi para resolver isso.</p>

                    <Link className="link" to="/incidents" >
                        <FiArrowLeft size={16} color="#E02041" />
                        Voltar para home
                    </Link>

                </section>

                <form onSubmit={handleRegister}>
                    <input
                        value={title}
                        onChange={e => setTitle(e.target.value)}
                        placeholder="Título do caso"
                    />

                    <textarea
                        value={description}
                        onChange={e => setDescription(e.target.value)}
                        placeholder="Descrição"
                    />

                    <input
                        value={value}
                        onChange={e => setValue(e.target.value)}
                        placeholder="Valor em reais"
                    />

                    <button className="button" type="submit">Cadastrar</button>
                </form>
            </div>
        </div>
    );
}