import Filter from "./filter";
import Information from "./information";
import ShoppingAddForm from "./shopping-add-form";
import ShoppingList from "./shopping-list";

function App() {
  const data = [
    {
      id: 1,
      size: 14,
      title: "Buy Bananas",
      active: false,
    },
    {
      id: 2,
      size: 10,
      title: "Buy Ananas",
      active: true,
    },
    {
      id: 3,
      size: 14,
      title: "Buy Milk",
      active: false,
    },
  ];

  return (
    <div className="app">
      <div className="wrapper">
        <div className="card">
          <Information />

          <ShoppingAddForm />

          <ShoppingList data={data} />
          <Filter />
        </div>
        <img src="/earth.svg" alt="" />
      </div>
    </div>
  );
}

export default App;
