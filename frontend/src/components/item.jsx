function Item({ item }) {
  return (
    <div className="item">
      <h2>{item.name}</h2>
      <p>{item.description}</p>
    </div>
  );
}
export default Item;