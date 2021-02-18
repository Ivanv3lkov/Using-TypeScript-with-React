import { Task } from './types';
import { FetchTasksAction } from './actions';

export interface AppState {
  tasks: Task[];
}

const defaultState = {
  tasks: []
};

export const reducer = (
  state: AppState = defaultState,
  action: FetchTasksAction
) => {
  switch (action.type) {
    case 'FETCH_TASKS':
      return {
        ...state,
        tasks: action.tasks
      };
  }
  return state;
};
