import { Card, CardText } from "reactstrap";

const ExtraNotes = () => (
  <Card className={"m-3 p-3"}>
    <CardText>
      Hello,
      <br />
      Thanks for reaching out to me.
    </CardText>

    <CardText>Your requested assignment is ready. There's just something I wanted to point out.</CardText>

    <CardText>
      Per your request, the project's been set up using Bootstrap classes, but I personally prefer and work with
      Tailwind in order to simplify and minify my code. So if there's any unusual behaviour in the usage of classes, and
      you think a better approach exists, I just want you to know that it's due to my lack of experience working with
      Bootstrap.
    </CardText>
  </Card>
);

export default ExtraNotes;
