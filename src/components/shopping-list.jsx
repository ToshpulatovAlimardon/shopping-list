import ShoppingListItem from "./shopping-list-item";

const ShoppingList = ({ data, onDelete, onToggleActive }) => {
  return (
    <div className="shopping-list">
      {data.length ? (
        data.map((item) => (
          <ShoppingListItem
            item={item}
            key={item.id}
            onDeleteItem={() => onDelete(item.id)}
            onToggleActiveItem={() => onToggleActive(item.id)}
          />
        ))
      ) : (
        <img src="/404.webp" alt="" />
      )}
    </div>
  );
};

export default ShoppingList;
