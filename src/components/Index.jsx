import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Container, Button, Table } from "reactstrap";
import { connect } from "react-redux";
import { getTodos, deleteTodo } from "./actions";
import _ from "lodash";

function mapStateToProps(state) {
  return { todos: state.todos };
}

function Index(props) {
  useEffect(() => {
    if (props.todos.length === 0) {
      props.getTodos();
    }
  }, []);

  let sortedTodos = _.sortBy(props.todos, "id").reverse();

  return (
    <Container>
      <br />
      <Link to="/new">
        <Button color="primary">Add Todo +</Button>
      </Link>
      <Table size="sm">
        <thead>
          <tr>
            <th>Completed</th>
            <th>Todos</th>
            <th>ID</th>
          </tr>
        </thead>
        <tbody>
          {_.map(sortedTodos, (todo) => (
            <Todo key={todo.id} todo={todo} deleteTodo={props.deleteTodo} />
          ))}
        </tbody>
      </Table>
    </Container>
  );
}

export default connect(mapStateToProps, { getTodos, deleteTodo })(Index);

function Todo(props) {
  const todo = props.todo;
  if (todo.completed === true) {
    todo.completed = <div>&#10003;</div>;
  }
  return (
    <tr>
      <td>{todo.completed}</td>
      <td>{todo.title}</td>
      <td>{todo.id}</td>
      <td>
        <Link to={`/${todo.id}/edit`}>
          <Button>Edit</Button>
        </Link>{" "}
        <Button
          color="danger"
          onClick={() => {
            props.deleteTodo(todo);
          }}
        >
          Delete
        </Button>
      </td>
    </tr>
  );
}
