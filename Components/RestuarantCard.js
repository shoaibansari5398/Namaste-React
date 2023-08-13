

const RestuarantCard = ({ cardDetails }) => {


	// const [name, cuisines, avgRating, costForTwoString] = cardDetails?.data?.data;

	return (
		<div className="w-64 mx-3 my-2 p-4 hover:shadow-md hover:rounded-md">
			<img src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/${cardDetails.data.data.cloudinaryImageId}` }alt="restuarant-image"/>
			<p className="font-bold my-2">{cardDetails?.data?.data?.name}</p>
			<p className="break-words my-2">{cardDetails?.data?.data?.cuisines?.join(",")}</p>
			<p className="my-2">	{cardDetails.data.data.avgRating }</p>
			<p className="my-2">{cardDetails.data.data.costForTwoString }</p>
		</div>
	)

}

export default RestuarantCard;
