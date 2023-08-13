import { useEffect, useState } from "react";
import RestuarantCard from "./RestuarantCard";
import RESTUARANT_DATA from "../data";
import { Link } from "react-router-dom";



const Body = () => {

	const [data, setData] = useState(RESTUARANT_DATA.cards);
	const [filteredData, setFilteredData] = useState(data)
	const [searchText,setSearchText] = useState(data)



	useEffect(() => {
		const filtered = data.filter(card => card.cardType === 'restaurant')
		setData(filtered)
		setFilteredData(filtered)
		// console.log("new_data:",filtered)
		// console.log(data)
	}, [])

	const filterDataHandler = () => {
		const filter = data.filter(card => card.data.data.avgRating >= 4)
		// const filter = data.cards
		// console.log(filter)
		setFilteredData(filter)
	}

	const searchHandler = () => {
		const searchedItem = data.filter(card => card.data.data.name.toLowerCase().includes(searchText.toLowerCase()))
		console.log(searchedItem)
		setFilteredData(searchedItem)
	}


	return (
		<div className="body-container">

			<div className="flex my-4">
				<div className="ml-4">
					<input type="text" onChange={(e)=>setSearchText(e.target.value)} className="border-black border rounded-md" />
					<button className="bg-slate-200 py-1 px-2 mx-2 rounded-md hover:bg-slate-300" onClick={searchHandler}>Search</button>
				</div>
				<button className="bg-slate-200 py-1 px-3 mx-2 rounded-md" onClick={filterDataHandler}>
					Filter
				</button>
			</div>
			<div className="grid grid-cols-5 ">
				{
					filteredData.map(card => <Link key={ card.data.data.id} to={"/restuarants/" +  card.data.data.id }><RestuarantCard cardDetails={card}  /></Link>)
				}
			</div>
		</div>
	)
}
export default Body;
