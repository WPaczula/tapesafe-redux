import { bindActionCreators, Dispatch } from "redux";
import { connect } from "react-redux";
import { selectUsers, selectLoading } from "features/users/selectors";
import { loadUsers } from "features/users/actions";
import { RootState } from "store";
import App from "./App";

const mapStateToProps = (state: RootState) => ({
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
