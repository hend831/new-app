
import ProductCard from "./components/ProductCard";
import Button from "./components/ui/Button";
import Modal from "./components/ui/Modal";
import { productList } from "./data";
import { useState } from "react";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const renderProductList = productList.map(product => <ProductCard key={product.id} product={product} />);

  return (
    <main className="container px-2xl">
      <Button onClick={() => setIsOpen(true)} className="bg-indigo-700 w-full py-2 text-white">
        Add
      </Button>
      <div className="m-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 md:gap-4 xl:gap-5">
        {renderProductList}
      </div>
      <Modal isOpen={isOpen} close={() => setIsOpen(false)} title="Add New Product" > 
        <div className="flex space-x-2 items-center">
        <Button className="bg-gray-400 hover:bg-gray-500 w-full py-2 text-white">cancel</Button>
        <Button className="bg-indigo-700 w-full hover:bg-indigo-500 py-2 text-white">submit</Button>
        </div>
         </Modal>
   
       
        
    </main>
  );
}

export default App;