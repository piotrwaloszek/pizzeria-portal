import { connect } from 'react-redux';
import Waiter from './Waiter';
import { getAll, fetchFromAPI, getLoadingState, updateTableAPI } from '../../../redux/tablesRedux';
const mapStateToProps = (state) => ({
  tables: getAll(state),
  loading: getLoadingState(state),
});

const mapDispatchToProps = (dispatch) => ({
  fetchTables: () => dispatch(fetchFromAPI()),
  updateTable: (id, newStatus) => dispatch(updateTableAPI(id, newStatus)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Waiter);
