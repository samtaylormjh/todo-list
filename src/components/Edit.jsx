import { Form } from "react-final-form"
import { Link } from "react-router-dom"
import { Button, Container } from "reactstrap"
import TodoForm from "./TodoForm"
import { updateTodo } from "./actions"

import { connect } from "react-redux"

function mapStateToProps(state, ownProps) {
  const { todos } = state
  const selectedTodo = todos.find((t) => t.id == ownProps.match.params.id)
  return { selectedTodo }
}

function Edit(props) {
  let selectedTodo = props.selectedTodo
  selectedTodo = {
    completed: selectedTodo.completed,
    id: selectedTodo.id,
    userId: selectedTodo.userId,
    todo: selectedTodo.title,
  }
  const submitHandler = (values) => {
    props.updateTodo(values)
    props.history.push("/")
  }

  return (
    <>
      <br />
      <Form
        component={TodoForm}
        onSubmit={submitHandler}
        initialValues={selectedTodo}
      />
      <Container>
        <Link to="/">
          <Button color="danger">Back</Button>
        </Link>
      </Container>
    </>
  )
}

export default connect(mapStateToProps, { updateTodo })(Edit)
