
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App'

const AppLayOut=()=>{ 
return(
<div>
    <App />
  </div>
  )
}
 
const root =createRoot(document.getElementById('root'));
root.render(<AppLayOut/>)