import React from 'react';
import { Route, Switch } from "react-router-dom";
import './App.css';
import HomePage from "./components/pages/HomePage";
import ItemIndex from "./components/pages/ItemIndex";
import ItemForm from './components/forms/ItemForm';

// function App() {
//   const [allItems, addItem] = useState([]);
//   const [item, setItem] = useState("");

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     addItem([...allItems, item]);
//   }

//   return (
//     <form onSubmit = {handleSubmit}>
//       <input 
//       value={item}
//       onChange={e => setItem(e.target.value)}
//       />
//       <strong>
//         <p>Current item is: {item}</p>
//       </strong>
//       <ul>
//         All items are: {allItems.map((i) => {
//           return(
//             <li key={i}>
//               {i}
//             </li>
//           );
//         })}
//       </ul>
//     </form>
//   );
// }

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={HomePage}/>
        <Route exact path="/item/all" component={ItemIndex}/>
        <Route exact path="/item/new" component={ItemForm}/>
      </Switch>
    </div>
  );
}

export default App;
