import { connect } from 'react-redux';
import { actionCreators } from '../store';

function Todo({ text, onBtnClick }) {
  return (
    <li>
      {text} <button onClick={onBtnClick}>DELETE</button>
    </li>
  );
}

function mapDispatchToProps(dispatch, ownProps) {
  return {
    onBtnClick: () => dispatch(actionCreators.deleteToDo(ownProps.id)),
  };
}

export default connect(null, mapDispatchToProps)(Todo);
