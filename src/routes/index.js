import config from "~/config";
import Home from "~/pages/Home";
import About from "~/pages/About";

const publicRoutes = [
  { path: config.routes.home, component: Home },
  { path: config.routes.about, component: About },
];

//Đăng nhập mới vào được không thì sẽ chuyển tới trang đăng nhập
const privateRoutes = [];

export { publicRoutes, privateRoutes };
