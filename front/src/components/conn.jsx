import '../styles/conn.scss';
import { useState } from 'react';
import axios from 'axios';
import Home from './home.jsx';

export default function Conn() {
    const [registrationData, setRegistrationData] = useState({
        email: '',
        firstName: '',
        lastName: '',
        password: ''
    });

    const [loginData, setLoginData] = useState({
        email: '',
        password: ''
    });

    const [isLoggedIn, setLoggedIn] = useState(false);

    const handleRegistration = async () => {
        try {
            const response = await axios.post('http://localhost:3069/register', registrationData);
            console.log(response.data);
        } catch (error) {
            console.error(error);
        }
    };

    const handleLogin = async () => {
        try {
            const response = await axios.post('http://localhost:3069/login', loginData);
            console.log(response.data);
            if (response === 200) {
                setLoggedIn(true);
            } else if (response.data.error) {
                alert(response.data.error);
            }
        } catch (error) {
            console.error(error);
        }
        if (isLoggedIn) {
            return (<Home />);
        }
    };


    return (
        <div className="conn-sct">
            <div className="regi">
                <div className="title-sct">
                    <p>Nouveau sur Y ?</p>
                    <label id='descr'>Inscrivez-vous sur Y et découvrez toutes les dernières actualités numériques</label>
                </div>
                <div className="form-sct">
                    <div className="form-input">
                        <p>Adresse mail :</p>
                        <input type="text" name="email" onChange={(e) => setRegistrationData({ ...registrationData, email: e.target.value })} />
                    </div>
                    <div className="form-input">
                        <p>Prénom :</p>
                        <input type="text" name="firstName" onChange={(e) => setRegistrationData({ ...registrationData, firstName: e.target.value })} />
                    </div>
                    <div className="form-input">
                        <p>Nom :</p>
                        <input type="text" name="lastName" onChange={(e) => setRegistrationData({ ...registrationData, lastName: e.target.value })} />
                    </div>
                    <div className="form-input">
                        <p>Password :</p>
                        <input type="password" name="password" onChange={(e) => setRegistrationData({ ...registrationData, password: e.target.value })} />
                    </div>

                    <div className="btn-sct">
                        <input type="button" value="M'inscrire" onClick={handleRegistration} />
                    </div>
                </div>
            </div>
            <div className="conn">
                <div className="title-sct">
                    <p>Me connecter</p>
                    <label id='descr'>Merci de bien vouloir vous connecter si vous posséder déjà un compte Y</label>
                </div>
                <div className="form-sct">
                <div className="form-input">
                        <p>Adresse mail :</p>
                        <input type="text" name="email" onChange={(e) => setLoginData({ ...loginData, email: e.target.value })} />
                    </div>
                    <div className="form-input">
                        <p>Mot de passe :</p>
                        <input type="password" name="password" onChange={(e) => setLoginData({ ...loginData, password: e.target.value })} />
                    </div>
                    <div className="btn-sct">
                        <input type="button" value="Me connecter" onClick={handleLogin} />
                    </div>
                </div>
            </div>
        </div>
    )
}