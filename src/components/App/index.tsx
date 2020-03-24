import { bindActionCreators, Dispatch } from "redux";
import { connect } from "react-redux";
import { selectUsers, selectLoading } from "selectors/users";
import { loadUsers } from "actions/users";
import { Store } from "reducers";
import App from "./App";

const mapStateToProps = (state: Store) => ({
  users: selectUsers(state),
  loading: selectLoading(state)
});

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators(
    {
      loadUsers
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(App);
