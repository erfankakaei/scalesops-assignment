import { useCallback, useEffect, useMemo, useState } from "react";
import { Alert, Button, Card, CardHeader, CardBody, CardTitle, CardText, Input } from "reactstrap";
// *** Representational components
// ** Page-sections
import Search from "../components/representational/page-sections/shop/Search";
import Error from "../components/representational/page-sections/shop/Error";
import Loading from "../components/representational/page-sections/shop/Loading";
import Content from "../components/representational/page-sections/shop/Content";
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
    () => (!searchPhrase ? data : data.filter((item) => item.title.startsWith(searchPhrase))),
    [data, searchPhrase],
  );

  return (
    <div className={styles.shop}>
      <Card>
        <CardHeader>
          <CardTitle className={"m-0"}>Welcome</CardTitle>
        </CardHeader>

        <Search searchPhrase={searchPhrase} setSearchPhrase={setSearchPhrase} />

        <CardBody>
          {error ? (
            <Error retry={fetchData} />
          ) : isLoading ? (
            <Loading />
          ) : (
            <Content filteredData={filteredData} reload={fetchData} />
          )}
        </CardBody>
      </Card>
    </div>
  );
};

export default Shop;
