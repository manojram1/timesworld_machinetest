import App from "../App"
import HomePage from "./homepage/components/HomePage"
import LoginPage from "./login/components/LoginPage"



const routes = [
    {
    path: "/",
    element: <App />,
    children: [
        {
          path: "",
          element: <LoginPage />,
        },
        {
            path: "home",
            element: <HomePage />,
          },
    ]
    },

]

export default routes