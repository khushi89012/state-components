import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
// import { Button } from './components/button';


function App() {
 const [theme, setTheme] = useState('light')

  return (
    <div className="App">
  


  <Button variant="outlined">Primary</Button>
      <Button color="secondary">Defalut</Button>
      <Button variant="contained" color="success">
       Dashed
      </Button>
      <Button  >
 Text
</Button>
      <Button variant="outlined" href="#outlined-buttons">
  Link
</Button>
  




     {/* <Button theme={theme} onClick={()=>{
       setTheme(theme === 'light' ? 'dark' : 'light')
     }}>
     Primary
       </Button> */}
       {/* <Button theme ={theme} onclick={()=>{
          setTheme(theme === 'light' ? 'dark' : 'light')
       }}>Secondry</Button>
       <Button>Dashed</Button>
       <Button>Text Button</Button>
       <Button theme={theme} onClick={()=>{
       setTheme(theme === 'light' ? 'dark' : 'light')
     }} >
      Link Button
       </Button> */}

    </div>
  )
}

export default App
