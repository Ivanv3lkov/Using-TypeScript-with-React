import { Provider } from 'react-redux';
import { reducer } from '../reducer';
import { createStore } from 'redux';
import { ConnectedTaskList } from '../components/TaskList';

const store = createStore(reducer);

export default () => (
  <Provider store={store}>
    <ConnectedTaskList />
  </Provider>
);
