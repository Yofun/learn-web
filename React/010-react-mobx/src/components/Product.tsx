import { observer } from "mobx-react";
import { useStore } from "../store";
import { ProductModel } from "../store/product";

const Product = () => {
  const { product, card } = useStore();

  const handleAdd = (pro: ProductModel) => {
    card.add(pro);
  };

  return (
    <>
      <h3>商品列表</h3>
      <ul style={{ width: 600 }}>
        {product.products.map((v) => (
          <li key={v.id} style={{ display: "flex", alignItems: "center" }}>
            <p>{v.name}</p>
            <p style={{ flex: "1", textAlign: "right", marginRight: 10 }}>
              {v.price} * {v.count}
            </p>
            <button disabled={v.count <= 0} onClick={() => handleAdd(v)}>
              +
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default observer(Product);
