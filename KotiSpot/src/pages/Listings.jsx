import { Link } from "react-router-dom";
import { useState } from "react";
import Listing from "../components/Listing";

const Listings = ({ propertyListings, setPropertyListings }) => {
    const [listingType, setListingType] = useState("");
    const [newListing, setNewListing] = useState({
        title: "",
        location: "",
        address: "",
        postalCode: "",
        propertyType: "",
        bedrooms: "",
        bathrooms: "",
        size: "",
        rooms: "",
        features: [],
        description: "",
        monthlyRent: "",
        availableFrom: "",
        securityDeposit: "",
        minimumRentalPeriod: "",
        additionalCosts: "",
        photos: [],
        price: "",
        condition: ""
    });

    const handleInputChange = (event) => {
        const { name, value } = event.target;

        setNewListing((prevListing) => ({
            ...prevListing,
            [name]: value
        }));
    };

    const handleFeatureChange = (event) => {
        const { value, checked } = event.target;

        setNewListing((prevListing) => ({
            ...prevListing,
            features: checked
                ? [...prevListing.features, value]
                : prevListing.features.filter((feature) => feature !== value)
        }));
    };

    const handlePhotoChange = (event) => {
        const files = Array.from(event.target.files);

        setNewListing((prevListing) => ({
            ...prevListing,
            photos: [...prevListing.photos, ...files]
        }));
    };

    const addListing = () => {
        if (
            newListing.title.trim() !== "" &&
            newListing.location.trim() !== "" &&
            newListing.address.trim() !== "" &&
            newListing.postalCode.trim() !== "" &&
            newListing.propertyType.trim() !== "" &&
            newListing.bedrooms.trim() !== "" &&
            newListing.bathrooms.trim() !== "" &&
            newListing.size.trim() !== "" &&
            newListing.rooms.trim() !== "" &&
            newListing.description.trim() !== "" &&
            newListing.availableFrom.trim() !== "" &&
            newListing.condition.trim() !== ""
        ) {
            const listingToAdd = {
                ...newListing,
                listingType: listingType,
                id: Date.now()

            };

            if (
                listingType === "forRent" &&
                newListing.monthlyRent.trim() !== "" &&
                newListing.securityDeposit.trim() !== "" &&
                newListing.minimumRentalPeriod.trim() !== "" &&
                newListing.additionalCosts.trim() !== ""
            ) {
                setPropertyListings((prevListings) => [
                    ...prevListings,
                    listingToAdd
                ]);
            }

            if (
                listingType === "forSale" &&
                newListing.price.trim() !== ""
            ) {
                setPropertyListings((prevListings) => [
                    ...prevListings,
                    listingToAdd
                ]);
            }
        }
        setNewListing({
            title: "",
            location: "",
            address: "",
            postalCode: "",
            propertyType: "",
            bedrooms: "",
            bathrooms: "",
            size: "",
            rooms: "",
            features: [],
            description: "",
            monthlyRent: "",
            availableFrom: "",
            securityDeposit: "",
            minimumRentalPeriod: "",
            additionalCosts: "",
            photos: [],
            price: "",
            condition: ""
        })
    };

    const handleListingType = (event) => {
        setListingType(event.target.value);
    };

    return (
        <div>
            <h1>Create property listing</h1>

            <div>
                <h2>Listing purpose</h2>

                <label>
                    For rent
                    <input
                        type="radio"
                        value="forRent"
                        checked={listingType === "forRent"}
                        onChange={handleListingType}
                    />
                </label>

                <label>
                    For sale
                    <input
                        type="radio"
                        value="forSale"
                        checked={listingType === "forSale"}
                        onChange={handleListingType}
                    />
                </label>
            </div>

            <div>
                <h2>Property information</h2>

                <div>
                    <label>Title</label>
                    <input
                        type="text"
                        name="title"
                        value={newListing.title}
                        onChange={handleInputChange}
                    />
                </div>

                <div>
                    <label>Location</label>
                    <input
                        type="text"
                        name="location"
                        value={newListing.location}
                        onChange={handleInputChange}
                    />
                </div>

                <div>
                    <label>Address</label>
                    <input
                        type="text"
                        name="address"
                        value={newListing.address}
                        onChange={handleInputChange}
                    />
                </div>

                <div>
                    <label>Postal code</label>
                    <input
                        type="text"
                        name="postalCode"
                        value={newListing.postalCode}
                        onChange={handleInputChange}
                    />
                </div>

                <div>
                    <label>Property type</label>
                    <select
                        name="propertyType"
                        value={newListing.propertyType}
                        onChange={handleInputChange}
                    >
                        <option value="">Select property type</option>
                        <option value="apartment">Apartment</option>
                        <option value="house">House</option>
                        <option value="room">Room</option>
                        <option value="studio">Studio</option>
                    </select>
                </div>

                <div>
                    <label>Rooms</label>
                    <input
                        type="number"
                        name="rooms"
                        value={newListing.rooms}
                        onChange={handleInputChange}
                    />
                </div>

                <div>
                    <label>Bedrooms</label>
                    <input
                        type="number"
                        name="bedrooms"
                        value={newListing.bedrooms}
                        onChange={handleInputChange}
                    />
                </div>

                <div>
                    <label>Bathrooms</label>
                    <input
                        type="number"
                        name="bathrooms"
                        value={newListing.bathrooms}
                        onChange={handleInputChange}
                    />
                </div>

                <div>
                    <label>Size</label>
                    <input
                        type="number"
                        name="size"
                        value={newListing.size}
                        onChange={handleInputChange}
                    />
                </div>
                <div>
                    <label>Condition</label>
                    <select
                        name="condition"
                        value={newListing.condition}
                        onChange={handleInputChange}
                    >
                        <option value="">Select condition</option>
                        <option value="new">New</option>
                        <option value="excellent">Excellent</option>
                        <option value="good">Good</option>
                        <option value="needsRenovation">Needs renovation</option>
                    </select>

                </div>

                <div>
                    <label>Features</label>

                    <div>
                        <label>
                            <input
                                type="checkbox"
                                value="balcony"
                                checked={newListing.features.includes("balcony")}
                                onChange={handleFeatureChange}
                            />
                            Balcony
                        </label>

                        <label>
                            <input
                                type="checkbox"
                                value="elevator"
                                checked={newListing.features.includes("elevator")}
                                onChange={handleFeatureChange}
                            />
                            Elevator
                        </label>

                        <label>
                            <input
                                type="checkbox"
                                value="parking"
                                checked={newListing.features.includes("parking")}
                                onChange={handleFeatureChange}
                            />
                            Parking
                        </label>

                        <label>
                            <input
                                type="checkbox"
                                value="furnished"
                                checked={newListing.features.includes("furnished")}
                                onChange={handleFeatureChange}
                            />
                            Furnished
                        </label>

                        <label>
                            <input
                                type="checkbox"
                                value="petsAllowed"
                                checked={newListing.features.includes("petsAllowed")}
                                onChange={handleFeatureChange}
                            />
                            Pets allowed
                        </label>

                        <label>
                            <input
                                type="checkbox"
                                value="sauna"
                                checked={newListing.features.includes("sauna")}
                                onChange={handleFeatureChange}
                            />
                            Sauna
                        </label>
                    </div>
                </div>
                <div>
                    <label>Description</label>
                    <input
                        type="text"
                        value={newListing.description}
                        name="description"
                        onChange={handleInputChange}
                    />
                </div>
            </div>
            {listingType === "forRent" && (
                <div>
                    <div>Rental details</div>
                    <div>
                        <label>Monthly rent (€)</label>
                        <input
                            type="text"
                            value={newListing.monthlyRent}
                            name="monthlyRent"
                            onChange={handleInputChange}
                        />
                    </div>
                    <div>
                        <label>Available from </label>
                        <input
                            type="date"
                            value={newListing.availableFrom}
                            name="availableFrom"
                            onChange={handleInputChange}
                        />
                    </div>
                    <div>
                        <label>Security deposit (€)</label>
                        <input
                            type="text"
                            value={newListing.securityDeposit}
                            name="securityDeposit"
                            onChange={handleInputChange}
                        />
                    </div>
                    <div>
                        <label>Minimum rental period </label>
                        <select
                            value={newListing.minimumRentalPeriod}
                            name="minimumRentalPeriod"
                            onChange={handleInputChange}>
                            <option value="">Select a minimum rental period</option>
                            <option value="1 Month">1 month</option>
                            <option value="3 Months">3 months</option>
                            <option value="6 Months">6 months</option>
                            <option value="12 Months">12 months</option>
                            <option value="24 Months">24 months</option>
                            <option value="No minimum">No minimum</option>
                        </select>
                    </div>
                    <div>
                        <label>Additional costs/Utilities (€) </label>
                        <input
                            type="text"
                            value={newListing.additionalCosts}
                            name="additionalCosts"
                            onChange={handleInputChange}
                        ></input>
                    </div>
                </div>
            )}
            {listingType === "forSale" && (
                <div>
                    <div>Sale details</div>
                    <div>
                        <label>Price (€)</label>
                        <input
                            type="text"
                            name="price"
                            value={newListing.price}
                            onChange={handleInputChange}
                        ></input>
                    </div>
                    <div>
                        <label>Available from</label>
                        <input
                            type="date"
                            name="availableFrom"
                            value={newListing.availableFrom}
                            onChange={handleInputChange}
                        ></input>
                    </div>
                </div>
            )}
            <div>
                <label>Property photos</label>

                <input
                    type="file"
                    accept="image/*"
                    multiple
                    onChange={handlePhotoChange}
                />
            </div>
            <button type="button" onClick={addListing}>
                Add listing
            </button>
        </div>
    );
};

export default Listings;
