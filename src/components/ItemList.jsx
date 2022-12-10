import {Item} from "./Item"

export const List = ({items}) => {
    return (
        <section  className="d-flex flex-wrap justify-content-center">
        {items.map(item => (
        <Item key={item.id} item={item} />
        ))}
    </section>
    ) 
    
}