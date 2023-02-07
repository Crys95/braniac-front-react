/* eslint-disable comma-dangle */
/* eslint-disable quotes */
/* eslint-disable import/no-cycle */
import { AnyAction, combineReducers } from 'redux';
import SignReducer from './login/index.store';


const combinedReducers = combineReducers({
  sign: SignReducer,
});

const rootReducer = (
  state: ReturnType<typeof combinedReducers>,
  action: AnyAction
): ReturnType<typeof combinedReducers> => {
  if (action.type === "root/resetState") {
    return combinedReducers(undefined, action);
  }

  return combinedReducers(state, action);
};

export default rootReducer;
