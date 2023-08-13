import { useParams } from "react-router-dom";
import useRestuarantMenu from "../utils/useRestuarantMenu";

const RestuarantMenu = () => {

	const { id } = useParams();

	const menu = useRestuarantMenu(id);

	if (menu === null) {
		return <h1>Loading...</h1>
	}

	const { name,cuisines,costForTwoMessage,sla } = menu?.cards[0]?.card?.card?.info
	const {itemCards} = menu.cards[2].groupedCard.cardGroupMap.REGULAR.cards[1].card.card

	return(
		<div className="text-center" >
			<h2 className="font-bold my-2">{name}</h2>
			<p className="my-2">{cuisines.join(",")}</p>
			<br></br>
			<div>
				<p><strong>ETA:</strong> {sla.deliveryTime} minutes - {costForTwoMessage }</p>
				<p></p>
			</div>
			<br></br>
			<br></br>
			<div className="">
				<ul>
					{
						itemCards.map(dish => {
							const { name, price,defaultPrice,id } = dish.card.info
							return (
								<div key={id}>
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
