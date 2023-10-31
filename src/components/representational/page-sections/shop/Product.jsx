// *** Styles
import styles from "./styles/Product.module.scss";

const Product = ({ data }) => (
  <div className={`${styles.product} d-flex align-items-center gap-2 p-2 border border-info rounded`}>
    <img alt={""} src={data.image} />

    <div>
      <p>{data.title}</p>
      <p>Category: {data.category}</p>
      <p>Price: ${data.price}</p>
      <p>{data.description}</p>
    </div>
  </div>
);

export default Product;
