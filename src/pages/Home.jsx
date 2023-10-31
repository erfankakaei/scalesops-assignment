import { Button, Card, CardBody } from "reactstrap";

const Home = () => (
  <div className={"d-flex justify-content-center align-items-center vh-100"}>
    <Card>
      <CardBody>
        <Button color={"primary"} className={"d-block mb-3"} href={"shop"}>
          Enter shop
        </Button>

        <Button href={"extra-notes"}>Please read this section</Button>
      </CardBody>
    </Card>
  </div>
);

export default Home;
