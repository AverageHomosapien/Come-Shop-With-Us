import { FC } from "react";

// functional component & interface rather than component (to use typescript with passing props)
// https://dev.to/mconner89/passing-props-in-react-using-typescript-20lm

// Can't use component (need a functional component) because need to pass props in constructor
//      -- Component needs to define props in constructor

type ShoppingListProps = {
    listName: string;
}

const ShoppingListComponent : FC<ShoppingListProps> = (props) : JSX.Element => {
    return (<>
        <div className="shopping-list">
        <h1>Shopping List for {props.listName}</h1>
        <ul>
            <li>Instagram</li>
            <li>WhatsApp</li>
            <li>Occulus</li>
        </ul>
        </div>   
    </>);
}

export default ShoppingListComponent;