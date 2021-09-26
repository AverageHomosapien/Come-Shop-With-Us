import { FC } from "react";

interface ShoppingListProps {
    listName: string;
}

const ShoppingList : FC<ShoppingListProps> = (props) : JSX.Element => {
    return (
        <div className="shopping-list">
        <h1>Shopping List for {props.listName}</h1>
        <ul>
            <li>Instagram</li>
            <li>WhatsApp</li>
            <li>Occulus</li>
        </ul>
        </div>   
    );
}

export default ShoppingList;