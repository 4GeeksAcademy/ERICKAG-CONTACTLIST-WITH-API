import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./views/home";
import injectContext from "./store/appContext";
import RegisterContact from "./views/RegisterContact.jsx";
import EditContact from "./views/EditContact.jsx";

const Layout = () => {
	const basename = process.env.BASENAME || "";
	return (
		<div>
			<BrowserRouter basename={basename}>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/register" element={<RegisterContact />} />
					<Route path="/editContact" element={<EditContact></EditContact>} />
					<Route path="*" element={<h1>Not found!</h1>} />
				</Routes>
			</BrowserRouter>
		</div>
	);
};
export default injectContext(Layout);