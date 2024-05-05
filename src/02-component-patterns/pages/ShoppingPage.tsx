import {
  ProductButtons,
  ProductCard,
  ProductImage,
  ProductTitle,
} from "../components";
import { products } from "../data/products";
import "../styles/custom-styles.css";

const product = products[0];



export const ShoppingPage = () => {
  
  return (
    <div>
      <h1>ShoppingPage</h1>
      <hr />
      <ProductCard
        key={product.id}
        product={product}
        className="bg-dark text-white"
        initialValues={{
          count: 4,
          maxCount: 10,
        }}
      >
        {({ reset, increaseBy, count, isMaxCountReached }) => (
          <>
            <ProductImage className="custom-image" />
            <ProductTitle className="text-white" />
            <ProductButtons className="custom-buttons" />
            <button onClick={reset}>Reset</button>
            <button onClick={() => increaseBy(-2)}>-2</button>
            { !isMaxCountReached && <button onClick={() => increaseBy(2)}>+2</button>}
            <span>Count: {count}</span>
          </>
        )}
      </ProductCard>
    </div>
  );
};
