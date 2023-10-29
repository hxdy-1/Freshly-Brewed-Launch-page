import "./App.css";
import LaunchPage from "./pages/LaunchPage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import QuestionsPage from "./pages/QuestionsPage";

function App() {
	const router = createBrowserRouter([
		{
			path: "/",
			element: <LaunchPage />,
		},
		{
			path: "/questions",
			element: <QuestionsPage />,
		},
	]);
	return <RouterProvider router={router} />;
}

export default App;
