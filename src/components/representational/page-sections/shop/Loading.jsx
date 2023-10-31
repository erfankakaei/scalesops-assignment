import { Spinner } from "reactstrap";

const Loading = () => (
  <div className={"d-flex justify-content-center gap-1"}>
    <Spinner color="primary" type="grow" />
    <Spinner color="secondary" type="grow" />
    <Spinner color="success" type="grow" />
    <Spinner color="danger" type="grow" />
    <Spinner color="warning" type="grow" />
    <Spinner color="info" type="grow" />
    <Spinner color="dark" type="grow" />
  </div>
);

export default Loading;
