import React, { useState } from 'react';
import { About, Awards, Contact, Experience, Footer, Header, Navbar, Skills,
} from './Containers'
import './App.scss';

function App() {
  const [mode, setMode] = useState('light');
  return (
    <div className="app" app-theme={mode}>
      <Navbar mode={mode} setMode={setMode} />
      <Header />
      <About />
      <Experience mode={mode} />
      <Skills />
      <Awards />
      <Contact />
      <Footer mode={mode} />
    </div>
  );
}

export default App;
