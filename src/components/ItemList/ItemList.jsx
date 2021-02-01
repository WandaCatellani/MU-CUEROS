import Item from "../Item/Item";
import "./ItemList.scss";

const ItemList = ({ items }) => {
  return (
    <div className={"itemList"}>
      <div className="contenedor">
        {items.map((item, i) => {
          return <Item item={item} key={i} />;
        })}
      </div>
    </div>
  );
};

export default ItemList;
