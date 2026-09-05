import { properties } from "../../data"

const Property = ( {property} ) => {
const {image, address, location, price, area} = property;
return(
    <div className = "property-card">
        <img className = "property-image" src = {image} alt = "house image"></img>
        <div className="property-info">
            <div>{address}</div>
            <div>{location}</div>
            <div>{price}</div>
            <div>{area}</div>
        </div>
    </div>
)
}

export default Property