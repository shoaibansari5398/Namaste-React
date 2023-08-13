import { Link } from "react-router-dom";

import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {

	const onlineStatus = useOnlineStatus();

	return (
		<div className="flex justify-between shadow-md bg-slate-300 p-2">
			<Link ti="/"><h3>FoodApp</h3></Link>
			<div className="flex">
				<Link to="/" className="px-4">
					<p>Online Status: {onlineStatus ? "🟢" : "🔴" }</p>
				</Link>
				<Link to="/" className="px-4">
				<p>Home</p>
				</Link>
				<Link to="/about" className="px-4">
				<p>About</p>
				</Link>
				<Link to="/contact" className="px-4">
				<p>Contact</p>
				</Link>
				{/* <Link to="/cart" className="px-4"> */}
				<p>Cart</p>
				{/* </Link> */}
			</div>
		</div>
	)
}
export default Header;
