import { Spinner } from "reactstrap";

const SuspenseFallback = () => (
  <div className={"vh-100 d-flex justify-content-center align-items-center"}>
    <Spinner color={"primary"} />
  </div>
);

export default SuspenseFallback;
