import { Form } from "react-final-form";
import { Link } from "react-router-dom";
import { Button, Container } from "reactstrap";
import TodoForm from "./TodoForm";

function New() {
  const submitHandler = () => {
    console.log("submit");
  };
  return (
    <>
      <br />
      <Form component={TodoForm} onSubmit={submitHandler} />
      <Container>
        <Link to="/">
          <Button color="danger">Back</Button>
        </Link>
      </Container>
    </>
  );
}

export default New;
