import { Product } from "@/interfaces";
import { CardProduct } from "@/components";

const products: Product[] = [
  {
    id: "1",
    title: "Produto 1",
    price: 100,
    image: "/assets/product-01.png",
    description: "Descrição do produto 1",
    brand: "Marca 1",
  },
  {
    id: "2",
    title: "Produto 2",
    price: 200,
    image: "/assets/product-02.png",
    description: "Descrição do produto 2",
    brand: "Marca 2",
  },
  {
    id: "3",
    title: "Produto 3",
    price: 300,
    image: "/assets/product-03.png",
    description: "Descrição do produto 3",
    brand: "Marca 3",
  },
  {
    id: "4",
    title: "Produto 4",
    price: 400,
    image: "/assets/product-04.jpg",
    description: "Descrição do produto 4",
    brand: "Marca 4",
  },
];

export default function Home() {
  return (
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {products.map((product) => (
          <CardProduct key={product.id} {...product} />
        ))}
      </div>
    </div>
  );
}
