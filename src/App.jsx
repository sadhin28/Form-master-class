import './App.css'
import Anti from './Component/Anti/Anti'
import Dad from './Component/Dad/Dad'
import RefForm from './Component/RefForm/RefForm'
import Simple_form from './Component/Simple_form/Simple_form'
import StatefullForm from './Component/StatefullForm/StatefullForm'
import Uncle from './Component/Uncle/Uncle'
import HookForm from './Custom-hooks-form/HookForm'

function App() {


  return (
     <div>
        {/* <Simple_form></Simple_form> */}
         {/* <StatefullForm></StatefullForm> */}
         {/* <RefForm></RefForm> */}
         {/* <HookForm></HookForm> */}
         <Dad></Dad>
         <Uncle></Uncle>
         <Anti></Anti>
     </div>
  )
}

export default App
