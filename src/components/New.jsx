import { Form } from "react-final-form";
import { Link } from "react-router-dom";
import { Button, Container } from "reactstrap";
import TodoForm from "./TodoForm";
import { connect } from "react-redux";
import { addTodo } from "./actions";

function mapStateToProps(state) {
  return { todos: state.todos };
}

function New(props) {
  let { todos } = props;
  const submitHandler = (values) => {
    values = {
      userId: 1,
      id: Math.max.apply(
        Math,
        todos.map((t) => {
          return t.id + 1;
        })
      ),
      title: values.todo,
      completed: false,
    };
    props.addTodo(values);
    props.history.push("/");
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

export default connect(mapStateToProps, { addTodo })(New);
