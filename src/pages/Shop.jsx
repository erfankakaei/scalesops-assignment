import { useCallback, useEffect, useMemo, useState } from "react";
import {
  Alert,
  Button,
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  CardText,
  Input,
} from "reactstrap";
// *** Representational components
// ** Page-sections
import Loading from "../components/representational/page-sections/shop/Loading";
import Product from "../components/representational/page-sections/shop/Product";
// ** Icons
import { Error, Search } from "../components/representational/icons/index";
// *** Icons
import styles from "./Shop.module.scss";

const Shop = () => {
  // ** States
  const [error, setError] = useState(true);
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);
  const [searchPhrase, setSearchPhrase] = useState("");
  // ** Functions
  const fetchData = useCallback(async () => {
    setError(false);
    setIsLoading(true);
    setSearchPhrase("");
    try {
      const receivedData = await fetch("https://fakestoreapi.com/products");
      const parsedData = await receivedData.json();
      setData(parsedData);
      setIsLoading(false);
    } catch (err) {
      setError(true);
    }
  }, []);
  // ** Effects
  useEffect(fetchData, []);
  // ** Variables
  const filteredData = useMemo(
    () =>
      !searchPhrase
        ? data
        : data.filter((item) => item.title.startsWith(searchPhrase)),
    [data, searchPhrase],
  );

  return (
    <div className={styles.shop}>
      <Card>
        <CardHeader>
          <CardTitle className={"m-0"}>Welcome</CardTitle>
        </CardHeader>

        <CardHeader className={"d-flex align-items-center gap-1"}>
          <Search />
          <CardTitle className={`${styles["search-title"]} m-0`}>
            Search by title:
          </CardTitle>
          <Input
            placeholder={"Search"}
            value={searchPhrase}
            onChange={(e) => setSearchPhrase(e.target.value)}
          />
        </CardHeader>

        <CardBody>
          {error ? (
            <Alert
              color={"danger"}
              className={"d-flex align-items-center gap-2 mb-0"}
            >
              <Error />
              Failed to load data!
              <Button color={"primary"} onClick={fetchData}>
                Retry
              </Button>
            </Alert>
          ) : isLoading ? (
            <Loading />
          ) : (
            <>
              <div
                className={`${styles["count-and-reload"]} d-flex justify-content-between align-items-center`}
              >
                <CardText className={"m-0"}>
                  {filteredData.length
                    ? `Found ${filteredData.length} product(s):`
                    : "No products found"}
                </CardText>
                <Button color={"success"} onClick={fetchData}>
                  Reload & clear filters
                </Button>
              </div>

              {filteredData.length ? (
                <div
                  className={`${styles["products-container"]} d-flex flex-wrap mt-4`}
                >
                  {filteredData.map((item) => (
                    <Product key={item.id} data={item} />
                  ))}
                </div>
              ) : null}
            </>
          )}
        </CardBody>
      </Card>
    </div>
  );
};

export default Shop;
