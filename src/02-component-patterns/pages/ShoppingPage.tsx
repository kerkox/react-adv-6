import { ProductCard, ProductImage, ProductTitle, ProductButtons } from "../components";
import '../styles/custom-styles.css';

const product = {
  id: "1",
  title: "Coffee Mug",
  img: "./coffee-mug.png",
};


export const ShoppingPage = () => {
  return (
    <div>
      <h1>ShoppingPage</h1>
      <hr />
      <div style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}>
        <ProductCard product={product} className="bg-dark text-white">
          <ProductCard.Image img={product.img} className="custom-image" />
          <ProductCard.Title title={product.title} className="text-white" />
          <ProductCard.Buttons className="custom-buttons" />
        </ProductCard>

        <ProductCard
          product={product}
          className="bg-dark text-white"
          style={{ boxShadow: "10px 10px 10px rgba(0,0,0,0.2)" }}
        >
          <ProductImage img={product.img} className="custom-image" />
          <ProductTitle title={product.title} className="text-white" />
          <ProductButtons className="custom-buttons" />
        </ProductCard>

        <ProductCard
          product={product}
          style={{
            backgroundColor: "#70D1F8",
          }}
        >
          <ProductImage
            img={product.img}
            style={{ boxShadow: "10px 10px 10px rgba(0,0,0,0.2)" }}
          />
          <ProductTitle title={product.title} />
          <ProductButtons
            style={{
              display: "flex",
              justifyContent: "end",
            }}
          />
        </ProductCard>
      </div>
    </div>
  );
};
