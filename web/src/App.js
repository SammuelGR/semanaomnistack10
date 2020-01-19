import React, { useEffect, useState } from 'react';

import './global.css';
import './App.css';
import './Sidebar.css';
import './Main.css';

function App() {
  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;

        setLatitude(latitude);
        setLongitude(longitude);
      },
      (err) => {
        console.log(err);
      },
      {
        timeout: 30000,
      }
    );
  }, []);

  return (
    <div id="app">
      <aside>
        <strong>Cadastrar</strong>
          <form>
            <div className="input-block">
              <label htmlFor="github_username">Usuário do Github</label>
              <input name="github_username" id="username_github" required />
            </div>
            
            <div className="input-block">
              <label htmlFor="techs">Tecnologias</label>
              <input name="techs" id="techs" required />
            </div>
            
            <div className="input-group">
              <div className="input-block">
                <label htmlFor="latitude">Latitude</label>
                <input 
                  type="number" 
                  name="latitude" 
                  id="latitude" 
                  required 
                  value={latitude} 
                  onChange={e => setLatitude(e.target.value)}
                />
              </div>

              <div className="input-block">
                <label htmlFor="longitude">Longitude</label>
                <input 
                  type="number" 
                  name="longitude" 
                  id="longitude" 
                  required 
                  value={longitude} 
                  onChange={e => setLongitude(e.target.value)}
                />
              </div>
            </div>

            <button type="submit">Salvar</button>
          </form>
      </aside>

      <main>
        <ul>
          <li className="dev-item">
            <header>
              <img src="https://avatars1.githubusercontent.com/u/23316518?s=460&v=4" alt="Sammuel Reis"/>
              <div className="user-info">
                <strong>Sammuel Reis</strong>
                <span>ReactJS, React Native, Node.js</span>
              </div>
            </header>
            <p>Desenvolvedor React Native</p>
            <a href="https://github.com/sammuelGR/">Acessar perfil no Github</a>
          </li>
          <li className="dev-item">
            <header>
              <img src="https://avatars1.githubusercontent.com/u/23316518?s=460&v=4" alt="Sammuel Reis"/>
              <div className="user-info">
                <strong>Sammuel Reis</strong>
                <span>ReactJS, React Native, Node.js</span>
              </div>
            </header>
            <p>Desenvolvedor React Native</p>
            <a href="https://github.com/sammuelGR/">Acessar perfil no Github</a>
          </li>
          <li className="dev-item">
            <header>
              <img src="https://avatars1.githubusercontent.com/u/23316518?s=460&v=4" alt="Sammuel Reis"/>
              <div className="user-info">
                <strong>Sammuel Reis</strong>
                <span>ReactJS, React Native, Node.js</span>
              </div>
            </header>
            <p>Desenvolvedor React Native</p>
            <a href="https://github.com/sammuelGR/">Acessar perfil no Github</a>
          </li>
          <li className="dev-item">
            <header>
              <img src="https://avatars1.githubusercontent.com/u/23316518?s=460&v=4" alt="Sammuel Reis"/>
              <div className="user-info">
                <strong>Sammuel Reis</strong>
                <span>ReactJS, React Native, Node.js</span>
              </div>
            </header>
            <p>Desenvolvedor React Native</p>
            <a href="https://github.com/sammuelGR/">Acessar perfil no Github</a>
          </li>
        </ul>
      </main>
    </div>
  );
}

export default App;

// Componente: Bloco isolado de HTML, CSS e JS, o qual não interfere no restante da aplicação
// Propriedade: Informações que um componente PAI passa para o componente FILHO
// Estado: Informações mantidas pelo componente (Lembrar: imutabilidade)
