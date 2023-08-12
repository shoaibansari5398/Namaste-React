import { useEffect, useState } from "react";
import MENU_URL from "./connstants";


const useRestuarantMenu = (id) => {

	const [resMenu,setResMenu] = useState(null)

	useEffect(() => {
		fetchData();
	}, [])

	const fetchData = async () => {
		const data = await fetch(MENU_URL+id);
		const json = await data.json();
		setResMenu(json.data);
		console.log(json.data);
	}

	return resMenu;
}

export default useRestuarantMenu;
