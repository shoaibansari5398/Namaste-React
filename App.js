import React, {lazy,Suspense} from "react";
import ReactDOM from "react-dom/client";
import Header from "./Components/Header";
import Body from "./Components/Body";
import About from "./Components/About";
import Error from "./Components/Error";
import RestuarantMenu from "./Components/RestuarantMenu";
import { createBrowserRouter,RouterProvider,Outlet } from "react-router-dom";
// import Contact from "./Components/Contact";

const Contact = lazy(()=>import("./Components/Contact"))

const App = () => {
	return (
		<div>
			<Header />
			<Outlet/>
		</div>

  );
};

const appRouter = createBrowserRouter([
	{
		path: "/",
		element: <App />,
		children: [
			{
				path: "/",
				element: <Body />
			},
			{
				path: "/about",
				element: <About />
			},
			{
				path: "/restuarants/:id",
				element: <RestuarantMenu/>
			},
			{
				path: "/contact",
				element: <Suspense><Contact/></Suspense>
			}
		],
		errorElement: <Error />
	}
])

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
