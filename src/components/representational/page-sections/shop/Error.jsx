import { Alert, Button } from "reactstrap";
// *** Icons
import { Error as ErrorIcon } from "../../icons/index";

const Error = ({ retry }) => (
  <Alert color={"danger"} className={"d-flex align-items-center gap-2 mb-0"}>
    <ErrorIcon />
    Failed to load data!
    <Button color={"primary"} onClick={retry}>
      Retry
    </Button>
  </Alert>
);

export default Error;
