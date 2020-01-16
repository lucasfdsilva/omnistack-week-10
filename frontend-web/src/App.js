import React from 'react';

import './Global.css'
import './App.css'
import'./Sidebar.css'
import'./Main.css'

function App() {

  return (
    <div id="app">
      <aside>
        <strong>Register</strong>
        <form>
          
          <div className="input-block">
            <label htmlFor="github_username">Github Username</label>
            <input name="github_username" id="github_username" required/>
          </div>

          <div className="input-block">
            <label htmlFor="techs">Technologies</label>
            <input name="techs" id="techs" required/>
          </div>

          <div className="input-group">
            <div className="input-block">
              <label htmlFor="latitude">Latitude</label>
              <input name="latitude" id="latitude" required/>
            </div>

            <div className="input-block">
              <label htmlFor="longitude">Longitude</label>
              <input name="longitude" id="longitude" required/>
            </div>
          </div>

          <button type="submit">Create Account</button>
        </form>
      </aside>

      <main>
        <ul>
          <li className="dev-item">
            <header>
              <img src="https://avatars2.githubusercontent.com/u/58776007?v=4" alt="Lucas DaSilva"/>
              <div className="user-info">
                <strong>Lucas DaSilva</strong>
                <span>"ReactJS", "ReactNative","NodeJS"</span>
              </div>
            </header>
            <p>Bio text</p>
            <a href="https://github.com/lucasfdsilva">Access Github Profile</a>
          </li>

          <li className="dev-item">
            <header>
              <img src="https://avatars2.githubusercontent.com/u/58776007?v=4" alt="Lucas DaSilva"/>
              <div className="user-info">
                <strong>Lucas DaSilva</strong>
                <span>"ReactJS", "ReactNative","NodeJS"</span>
              </div>
            </header>
            <p>Bio text</p>
            <a href="https://github.com/lucasfdsilva">Access Github Profile</a>
          </li>

          <li className="dev-item">
            <header>
              <img src="https://avatars2.githubusercontent.com/u/58776007?v=4" alt="Lucas DaSilva"/>
              <div className="user-info">
                <strong>Lucas DaSilva</strong>
                <span>"ReactJS", "ReactNative","NodeJS"</span>
              </div>
            </header>
            <p>Bio text</p>
            <a href="https://github.com/lucasfdsilva">Access Github Profile</a>
          </li>

          <li className="dev-item">
            <header>
              <img src="https://avatars2.githubusercontent.com/u/58776007?v=4" alt="Lucas DaSilva"/>
              <div className="user-info">
                <strong>Lucas DaSilva</strong>
                <span>"ReactJS", "ReactNative","NodeJS"</span>
              </div>
            </header>
            <p>Bio text</p>
            <a href="https://github.com/lucasfdsilva">Access Github Profile</a>
          </li>
        </ul>
      </main>
    </div>
  );

}

export default App;
