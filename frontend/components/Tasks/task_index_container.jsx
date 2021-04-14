import { connect } from 'react-redux';
import TaskIndex from './task_index';
// Actions
import { tasksByProjectId } from '../../reducers/selectors';
import { createStep } from '../../actions/step_actions';

const mapStateToProps = (state, { todo_id }) => ({
  tasks: stepsByTodoId(state, todo_id),
  todo_id
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  createTask: (...args) => dispatch(createTask(...args))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TaskIndex)