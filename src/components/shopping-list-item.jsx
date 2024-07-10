const ShoppingListItem = (props) => {
  const { item, onDeleteItem, onToggleActiveItem } = props;

  return (
    <div key={item.id} className={`list-item ${item.active && "active"}`}>
      <div className="item-info">
        <span>{item.size}</span>
        <p>{item.title}</p>
      </div>
      <div className="item-actions">
        <span className="check" onClick={onToggleActiveItem}>
          &#10003;
        </span>
        <span className="times" onClick={onDeleteItem}>
          &times;
        </span>
      </div>
    </div>
  );
};

export default ShoppingListItem;
