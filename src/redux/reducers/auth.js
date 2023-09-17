import { persistReducer } from 'redux-persist';
import storageSession from 'redux-persist/lib/storage/session';

const actionTypes = {
  SetToken: 'SET_TOKEN',
  LogOut : 'LOGOUT'
};

const initialAuthState = {
  token: null,
};
export function logout() {
  return {type: "LOGOUT"}
}
const persistConfig = {
  key: 'AuthenticationForJTK',
  storage: storageSession,
  whitelist: ['token'],
};

const authReducer = (state = initialAuthState, action) => {
  if (action.type === actionTypes.SetToken) {
    const { token } = action.payload;
    state =  { ...state, token };
  }
  else if(action.type === actionTypes.LogOut){
    state =  {...state, token : null};
  }
  return state;
};

export default persistReducer(persistConfig, authReducer);
