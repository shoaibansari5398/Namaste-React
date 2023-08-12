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

			<div className="filters">
				<div className="search-container">
					<input type="text" onChange={(e)=>setSearchText(e.target.value)} />
					<button className="btn-search" onClick={searchHandler}>Search</button>
				</div>
				<button className="filter-btn" onClick={filterDataHandler}>
					Filter
				</button>
			</div>
			<div className="card-container">
				{
					filteredData.map(card => <Link key={ card.data.data.id} to={"/restuarants/" +  card.data.data.id }><RestuarantCard cardDetails={card}  /></Link>)
				}
			</div>
		</div>
	)
}
export default Body;
