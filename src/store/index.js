import { createStore, combineReducers, applyMiddleware } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import thunk from "redux-thunk";
import movieReducer from "container/clients/MovieList/module/reducers";
import movieDetailReducer from "container/clients/MovieDetail/module/reducers";
import movieManagerReducer from "container/admin/MovieManager/modules/reducer";
import editMovieInforReducer from "container/admin/MovieManager/Edit/modules/reducer";
import userMagenementReducer from "container/admin/UserManagement/modules/reducers";
import userEditUserReducer from "container/admin/UserManagement/UpdateUser/modules/reducers";
import clientMovieReducer from "container/clients/MovieInfor/modules/reducer";
import movieSeatPlanReducer from "container/clients/CheckOut/module/reducers";
import userLoginReducer from "container/shared/LoginUser/modules/reducers";
import thongTinDatVeReducer from "container/clients/CheckOut/userInfor/modules/reduces"
import { composeWithDevTools } from "redux-devtools-extension";


const rootReducer = combineReducers({
  movieReducer,
  movieDetailReducer,
  movieSeatPlanReducer,
  userLoginReducer,
  movieManagerReducer,
  clientMovieReducer,
  editMovieInforReducer,
  // user - admin
  userMagenementReducer,
  userEditUserReducer,
  thongTinDatVeReducer
});

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["userLoginReducer"],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(
  persistedReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

const persistor = persistStore(store);

// window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

export { store, persistor };

// lấy danh sách người dùng
//
