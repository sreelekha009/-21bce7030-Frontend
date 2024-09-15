import { useState } from "react";
import Navigation from "./Navigation/Nav";
import Products from "./Products/Products";
import products from "./db/data";
import Recommended from "./Recommended/Recommended";
import Sidebar from "./Sidebar/Sidebar";
import Card from "./components/Card";
import "./index.css";

const App = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [query, setQuery] = useState("");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); // State to manage sidebar visibility

  // Handle input filter change
  const handleInputChange = (event) => setQuery(event.target.value);

  // Handle category selection for filtering
  const handleCategoryChange = (event) => setSelectedCategory(event.target.value);

  // Filter products based on query and selected category
  const filteredData = products.filter(({ title, category, color, company, newPrice }) => {
    const matchesQuery = title.toLowerCase().includes(query.toLowerCase());
    const matchesCategory = selectedCategory
      ? [category, color, company, newPrice].includes(selectedCategory)
      : true;
    return matchesQuery && matchesCategory;
  });

  const toggleSidebarFilter = () => setIsSidebarOpen(!isSidebarOpen); // Toggle sidebar visibility

  return (
    <div className="app-container">
      <div className="content-container">
        <Navigation
          query={query}
          handleInputChange={handleInputChange}
          toggleSidebarFilter={toggleSidebarFilter} // Pass function to Navigation
        />
        <Recommended handleClick={handleCategoryChange} />
        <Products result={filteredData.map((product) => (
          <Card key={product.id} {...product} />
        ))} />
      </div>
      <Sidebar handleChange={handleCategoryChange} isOpen={isSidebarOpen} /> {/* Pass isOpen prop */}
    </div>
  );
};

export default App;
