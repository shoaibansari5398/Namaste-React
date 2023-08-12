import { useParams } from "react-router-dom";
import useRestuarantMenu from "../utils/useRestuarantMenu";

const RestuarantMenu = () => {

	const { id } = useParams();

	useRestuarantMenu(id);

	if (menu === null) {
		return <h1>Loading...</h1>
	}

	const { name,cuisines,costForTwoMessage,sla } = menu?.cards[0]?.card?.card?.info
	const {itemCards} = menu.cards[2].groupedCard.cardGroupMap.REGULAR.cards[1].card.card

	return(
		<div className="restuarant-menu" >
			<h2 className="restuarant-title">{name}</h2>
			<p className="cuisine-menu">{cuisines.join(",")}</p>
			<br></br>
			<div>
				<p><strong>ETA:</strong> {sla.deliveryTime} minutes - {costForTwoMessage }</p>
				<p></p>
			</div>
			<br></br>
			<br></br>
			<div className="dish-container">
				<ul>
					{
						itemCards.map(dish => {
							const { name, price,defaultPrice,id } = dish.card.info
							return (
								<div key={id}>
									{/* {console.log("dish:",dish)} */}
									<li><strong>{name}</strong> - ₹{price || defaultPrice/100}</li>
									<br></br>
								</div>
							)
						})
					}
				</ul>
			</div>
		</div>
	)
}

export default RestuarantMenu;
