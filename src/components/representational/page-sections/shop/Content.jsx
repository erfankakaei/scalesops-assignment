import { Button, CardText } from "reactstrap";
// *** Sub-components
import Product from "./Product";
// *** Styles
import styles from "./styles/Content.module.scss";

const Content = ({ filteredData, reload }) => (
  <>
    <div
      className={`${styles["count-and-reload"]} d-flex justify-content-between align-items-center`}
    >
      <CardText className={"m-0"}>
        {filteredData.length
          ? `Found ${filteredData.length} product(s):`
          : "No products found"}
      </CardText>
      <Button color={"success"} onClick={reload}>
        Reload & clear filters
      </Button>
    </div>

    {filteredData.length ? (
      <div className={`${styles["products-container"]} d-flex flex-wrap mt-4`}>
        {filteredData.map((item) => (
          <Product key={item.id} data={item} />
        ))}
      </div>
    ) : null}
  </>
);

export default Content;
