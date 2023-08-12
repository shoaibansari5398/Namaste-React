import { Link } from "react-router-dom";

import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {

	const onlineStatus = useOnlineStatus();

	return (
		<div className="navbar">
			<h3>FoodApp</h3>
			<div className="navbar-items">
				<Link to="/">
					<p>Online Status: {onlineStatus ? "🟢" : "🔴" }</p>
				</Link>
				<Link to="/">
				<p>Home</p>
				</Link>
				<Link to="/about">
				<p>About</p>
				</Link>
				<Link to="/contact">
				<p>Contact</p>
				</Link>
				<Link to="/cart">
				<p>Cart</p>
				</Link>
			</div>
		</div>
	)
}
export default Header;
