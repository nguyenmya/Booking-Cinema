import Admin from "container/admin/AdminLayout/Admin";
import UserManagement from "container/admin/UserManagement/UserManagement";
import Home from "container/clients/Home/Home";
import MovieDetail from "container/clients/MovieDetail/MovieDetail";
import AddMovie from "container/admin/MovieManager/Add/AddMovie";
import EditMovie from "container/admin/MovieManager/Edit/EditMovie";
import ShowTime from "container/admin/MovieManager/ShowTime/ShowTime";
import MovieManager from "container/admin/MovieManager/MovieManager";
import LoginUser from "container/shared/LoginUser/LoginUser";
import CheckOut from "container/clients/CheckOut/CheckOut";
import UpdateUser from "container/admin/UserManagement/UpdateUser/UpdateUser";

export const clientRoutes = [
  {
    path: "/",
    component: Home,
    exact: true,
    isPrivate: false,
  },
  {
    path: "/movie-detail/:movieId",
    component: MovieDetail,
    exact: false,
    isPrivate: false,
  },
  {
    path: "/CheckOut/:id",
    component: CheckOut,
    exact: false,
    isPrivate: true,
  },
  {
    path: "/Login",
    component: LoginUser,
    exact: false,
    isPrivate: false,
  },
];

export const adminRoutes = [
  {
    path: "/Admin/MovieManager",
    component: MovieManager,
    exact: true,
    isPrivate: true,
  },
  {
    path: "/Admin/MovieManager/AddMovie",
    component: AddMovie,
    exact: false,
    isPrivate: true,
  },
  {
    path: "/Admin/MovieManager/EditMovie/:id",
    component: EditMovie,
    exact: false,
  },

  {
    path: "/Admin/MovieManager/ShowTime/:id",
    component: ShowTime,
    exact: false,
    isPrivate: true,
  },
  // User
  {
    path: "/Admin/UserManagement",
    component: UserManagement,
    exact: true,
    isPrivate: true,
  },
  {
    path: "/Admin/UserManagement/EditUser/:taiKhoan",
    component: UpdateUser,
    exact: true,
  },
];
