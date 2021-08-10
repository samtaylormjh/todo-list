import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Container, Button, Table, Input } from "reactstrap";
import { connect } from "react-redux";
import { getTodos } from "./actions";
import _ from "lodash";

function mapStateToProps(state) {
  return { todos: state.todos };
}

function Index(props) {
  useEffect(() => {
    props.getTodos();
  }, []);

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
          {_.map(props.todos, (todo) => (
            <Todo key={todo.id} todo={todo} />
          ))}
        </tbody>
      </Table>
    </Container>
  );
}

export default connect(mapStateToProps, { getTodos })(Index);

function Todo(props) {
  const todo = props.todo;

  return (
    <tr>
      <td>
        <Input type="checkbox" checked={todo.completed} />
      </td>
      <td>{todo.title}</td>
      <td>{todo.id}</td>
      <td>
        <Button>Edit</Button> <Button color="danger">Delete</Button>
      </td>
    </tr>
  );
}
