import logo from './logo.svg';
import './App.css';
import React, { useCallback, useContext, useMemo, useState } from 'react';


const THEMES = {
          dark: {
                    background: '#000',
                    color: '#fff'
          },
          light: {
                    background: '#fff',
                    color: '#000'
          }
}

const ThemeContext = React.createContext({
          theme: THEMES.dark,
          toggleTheme: () => {}
})

function ThemedButton({children}) {
/*           return <ThemeContext.Consumer>
                    {value => {
                              return <button style={value}>{children}</button>
                    }}
          </ThemeContext.Consumer> */
          const {theme} = useContext(ThemeContext)
          return <button style={theme}>{children}</button>
}
function Toolbar() {
          return <div>
                    <ThemedButton>Inscription</ThemedButton>
          </div>
}


function Searchform() {
          return <div>
                              <input />
                              <ThemedButton>Rechercher</ThemedButton>
                    </div>
}

function App() {
/*           
return (
                    <div className="App">
                              <header className="App-header">
                                        <img src={logo} className="App-logo" alt="logo" />
                                        <p>
                                                  Edit <code>src/App.js</code> and save to reload.
                                        </p>
                                        <a
                                                  className="App-link"
                                                  href="https://reactjs.org"
                                                  target="_blank"
                                                  rel="noopener noreferrer"
                                        >
                                                  Learn React
                                        </a>
                              </header>
                    </div>
          );
           */
          const [theme, setTheme] = useState('light')

          const toggleTheme = useCallback(function() {
                    return setTheme(t => t === 'light' ? 'dark' : 'light')
          }, [])

          const value = useMemo(function()  {
                    return {
                              theme: theme === 'light' ? THEMES.light : THEMES.dark,
                              toggleTheme
                    }
          }, [toggleTheme, theme])
          return <div>
                    <ThemeContext.Provider value={value}>
                              <Searchform/>
                              <Toolbar/>
                              <ThemeSwitcher />
                    </ThemeContext.Provider>
          </div>
          
}
function ThemeSwitcher() {
          const {toggleTheme} = useContext(ThemeContext)
          return <button onClick={toggleTheme}>Changer le theme</button>
}

export default App;
