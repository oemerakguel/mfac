import ItemsList from "./components/itemsList";
import { useEffect, useState } from "react";

// Import items from API.

async function fetchItems() {
  const response = await fetch(import.meta.env.VITE_API_URL  + "/items");
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return response.json();
}

function App() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetchItems()
      .then((data) => setItems(data))
      .catch((error) => console.error("Error fetching items:", error));
  }, []);

  return (
    <div>
      <h1 className="text-2xl text-red-500">Hallo Welt</h1>
      <ItemsList items={items} />
    </div>
  );
}

export default App;
