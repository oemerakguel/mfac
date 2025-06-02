import Item from "./item";

function ItemsList({ items }) {
  return (
    <div className="items-list">
      {items.map((item) => (
        <div key={item.id} className="item">
          <Item item={item} />
        </div>
      ))}
    </div>
  );
}

export default ItemsList;
