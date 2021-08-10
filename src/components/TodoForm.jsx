import { Field } from "react-final-form";
import { Container, FormGroup, Label, Input, Col, Button } from "reactstrap";

const required = (value) => (value ? undefined : "Required");

const composeValidators =
  (...validators) =>
  (value) =>
    validators.reduce(
      (error, validator) => error || validator(value),
      undefined
    );

export default function TodoForm(props) {
  return (
    <div>
      <Container>
        <FormGroup row>
          <Label for="todo" sm={2}>
            Todo
          </Label>
          <Col sm={3}>
            <Field
              component={InputField}
              name="todo"
              label="Todo"
              validate={composeValidators(required)}
            />
          </Col>
        </FormGroup>
        <Button type="submit">Submit</Button>
      </Container>
    </div>
  );
}

const InputField = (props) => {
  const { input, meta } = props;
  return (
    <div>
      <FormGroup>
        <Input
          valid={meta.touched && meta.valid}
          invalid={meta.touched && meta.invalid}
          {...input}
          type="text"
          placeholder={props.label}
        />
      </FormGroup>
    </div>
  );
};
