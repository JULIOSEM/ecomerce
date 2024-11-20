import ProductGridComponent from "@/components/ProductsFlex";
import { fetchProducts } from "@/lib/server/fetchProducts";

async function Store() {
  const productos = await fetchProducts();
  return (
    <div
      className="min-h-screen flex flex-col justify-center items-center"
      style={{
        backgroundImage: `url('https://static.vecteezy.com/system/resources/previews/047/870/368/non_2x/black-3d-rhombus-pattern-abstract-background-science-technologic-conceptual-tetragonal-structure-dark-gray-wallpaper-three-dimensional-tech-clear-blank-subtle-textured-backdrop-vector.jpg')`,
        backgroundSize: "cover", 
        backgroundPosition: "center", 
        backgroundRepeat: "no-repeat", 
      }}
    >
      <div className="flex flex-wrap mb-36 justify-center">
        <ProductGridComponent
          products={Array.isArray(productos) ? productos : []}
        />
      </div>
    </div>
  );
}

export default Store;
