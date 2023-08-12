

const RestuarantCard = ({ cardDetails }) => {


	// const [name, cuisines, avgRating, costForTwoString] = cardDetails?.data?.data;

	return (
		<div className="restuarant-card">
			<img src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/${cardDetails.data.data.cloudinaryImageId}` }alt="restuarant-image"/>
			<p>{cardDetails?.data?.data?.name}</p>
			<p>{cardDetails?.data?.data?.cuisines?.join(",")}</p>
			<p>{cardDetails.data.data.avgRating }</p>
			<p>{cardDetails.data.data.costForTwoString }</p>
		</div>
	)

}

export default RestuarantCard;
