

// const fruit =[{id : 1,name:"Apple" , calories: 95},
//               {id : 2,name:"Orange" ,calories: 45},
//               {id : 3,name:"banana",calories: 105},
//               {id : 4,name:"Coconut",calories: 195},
//               {id : 5,name:"Pineappl",calories: 57}];
// for sorting 

//  fruit.sort((a,b)=> a.name.localeCompare(a.name)); // for ALPHABETICSL COMPORE 
// fruit.sort((a,b)=> b.name.localeCompare(a.name)); //  Reverse compare





function List(props){

    const itemsList  = props.items;

    const listItems = itemsList.map(items => <li key={items.id}>{items.name}</li>)

    return(
       <ol>
        {listItems}
       </ol> 
    );
}

export default List 