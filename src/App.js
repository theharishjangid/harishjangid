import React, { useState } from 'react';
import { About, Contact, Experience, Footer, Header, Navbar, Skills,
} from './Containers'
import './App.scss';

function App() {
  const [mode, setMode] = useState('light');
  return (
    <div className="app" app-theme={mode}>
      <Navbar mode={mode} setMode={setMode}/>
      <Header />
      <About />
      <Experience />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
