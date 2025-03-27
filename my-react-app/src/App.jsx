import Header from "./Header"
import List from "./List";


function App() {
  const fruit =[{id : 1,name:"Apple" , calories: 95},
    {id : 2,name:"Orange" ,calories: 45},
    {id : 3,name:"banana",calories: 105},
    {id : 4,name:"Coconut",calories: 195},
    {id : 5,name:"Pineappl",calories: 57}];
   return (
    <>
    <Header/>
    <List  items = {fruit} category="fruit" />
    </>
   );
}

export default App 