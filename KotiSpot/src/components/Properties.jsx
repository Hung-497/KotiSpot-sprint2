import Property from "./Property";
import { properties } from "../../data";

const Properties = () => {
    return(
        <ul className = "properties">
            {properties.map((property) => (
                <Property key= {property.id} property={property}/>
            ))}
        </ul>
    )
}

export default Properties