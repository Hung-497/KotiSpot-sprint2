import { useState } from "react";
import { Link } from "react-router-dom";

import Listing from "../components/Listing";
import ListingDetails from "../components/ListingDetails";

const SellerDashboard = ({
    propertyListings,
    deleteListing,
    updateListing
}) => {

    const [selectedListing, setSelectedListing] = useState(null);

    const [edit, setEdit] = useState(false);

    const handleEdit = (listing) => {
        setSelectedListing({ ...listing });
        setEdit(true);
    };

    const handleSave = () => {
        updateListing(selectedListing);

        setEdit(false);
        setSelectedListing(null);
    };

    const handleCancel = () => {
        setEdit(false);
        setSelectedListing(null);
    };

    return (
        <div>

            <h1>Seller dashboard</h1>

            <Link to="/listings">
                <button>+ Create new listing</button>
            </Link>


            {!edit ? (

                <div>

                    <h2>My Listings</h2>

                    <div className="property-cards">

                        {propertyListings.map((listing) => (

                            <div key={listing.id}>

                                <Listing
                                    listing={listing}
                                    onClick={setSelectedListing}
                                />

                                <button
                                    onClick={() => handleEdit(listing)}
                                >
                                    Edit
                                </button>

                                <button
                                    onClick={() =>
                                        deleteListing(listing.id)
                                    }
                                >
                                    Delete
                                </button>

                            </div>

                        ))}

                    </div>


                    {selectedListing && (
                        <ListingDetails
                            listing={selectedListing}
                            onClose={() => setSelectedListing(null)}
                        />
                    )}

                </div>

            ) : (

                <div>

                    <h2>Edit your listing</h2>


                    <div>
                        <label>Title:</label>

                        <input
                            type="text"
                            value={selectedListing.title}
                            onChange={(event) =>
                                setSelectedListing({
                                    ...selectedListing,
                                    title: event.target.value
                                })
                            }
                        />
                    </div>


                    <div>
                        <label>Location:</label>

                        <input
                            type="text"
                            value={selectedListing.location}
                            onChange={(event) =>
                                setSelectedListing({
                                    ...selectedListing,
                                    location: event.target.value
                                })
                            }
                        />
                    </div>


                    <div>
                        <label>Address:</label>

                        <input
                            type="text"
                            value={selectedListing.address}
                            onChange={(event) =>
                                setSelectedListing({
                                    ...selectedListing,
                                    address: event.target.value
                                })
                            }
                        />
                    </div>


                    <div>
                        <label>Postal code:</label>

                        <input
                            type="text"
                            value={selectedListing.postalCode}
                            onChange={(event) =>
                                setSelectedListing({
                                    ...selectedListing,
                                    postalCode: event.target.value
                                })
                            }
                        />
                    </div>


                    <div>
                        <label>Property type:</label>

                        <select
                            value={selectedListing.propertyType}
                            onChange={(event) =>
                                setSelectedListing({
                                    ...selectedListing,
                                    propertyType: event.target.value
                                })
                            }
                        >
                            <option value="">Select property type</option>
                            <option value="apartment">Apartment</option>
                            <option value="house">House</option>
                            <option value="room">Room</option>
                            <option value="studio">Studio</option>
                        </select>
                    </div>


                    <div>
                        <label>Rooms:</label>

                        <input
                            type="number"
                            value={selectedListing.rooms}
                            onChange={(event) =>
                                setSelectedListing({
                                    ...selectedListing,
                                    rooms: event.target.value
                                })
                            }
                        />
                    </div>


                    <div>
                        <label>Bedrooms:</label>

                        <input
                            type="number"
                            value={selectedListing.bedrooms}
                            onChange={(event) =>
                                setSelectedListing({
                                    ...selectedListing,
                                    bedrooms: event.target.value
                                })
                            }
                        />
                    </div>


                    <div>
                        <label>Bathrooms:</label>

                        <input
                            type="number"
                            value={selectedListing.bathrooms}
                            onChange={(event) =>
                                setSelectedListing({
                                    ...selectedListing,
                                    bathrooms: event.target.value
                                })
                            }
                        />
                    </div>


                    <div>
                        <label>Size:</label>

                        <input
                            type="number"
                            value={selectedListing.size}
                            onChange={(event) =>
                                setSelectedListing({
                                    ...selectedListing,
                                    size: event.target.value
                                })
                            }
                        />
                    </div>


                    <div>
                        <label>Condition:</label>

                        <select
                            value={selectedListing.condition}
                            onChange={(event) =>
                                setSelectedListing({
                                    ...selectedListing,
                                    condition: event.target.value
                                })
                            }
                        >
                            <option value="">Select condition</option>
                            <option value="new">New</option>
                            <option value="excellent">Excellent</option>
                            <option value="good">Good</option>
                            <option value="needsRenovation">
                                Needs renovation
                            </option>
                        </select>
                    </div>


                    <div>
                        <label>Description:</label>

                        <input
                            type="text"
                            value={selectedListing.description}
                            onChange={(event) =>
                                setSelectedListing({
                                    ...selectedListing,
                                    description: event.target.value
                                })
                            }
                        />
                    </div>


                    <div>
                        <label>Available from:</label>

                        <input
                            type="date"
                            value={selectedListing.availableFrom}
                            onChange={(event) =>
                                setSelectedListing({
                                    ...selectedListing,
                                    availableFrom: event.target.value
                                })
                            }
                        />
                    </div>


                    {selectedListing.listingType === "forRent" && (

                        <div>

                            <h3>Rental details</h3>

                            <div>
                                <label>Monthly rent (€):</label>

                                <input
                                    type="text"
                                    value={selectedListing.monthlyRent}
                                    onChange={(event) =>
                                        setSelectedListing({
                                            ...selectedListing,
                                            monthlyRent: event.target.value
                                        })
                                    }
                                />
                            </div>


                            <div>
                                <label>Security deposit (€):</label>

                                <input
                                    type="text"
                                    value={selectedListing.securityDeposit}
                                    onChange={(event) =>
                                        setSelectedListing({
                                            ...selectedListing,
                                            securityDeposit: event.target.value
                                        })
                                    }
                                />
                            </div>


                            <div>
                                <label>Minimum rental period:</label>

                                <select
                                    value={selectedListing.minimumRentalPeriod}
                                    onChange={(event) =>
                                        setSelectedListing({
                                            ...selectedListing,
                                            minimumRentalPeriod:
                                                event.target.value
                                        })
                                    }
                                >
                                    <option value="">
                                        Select a minimum rental period
                                    </option>

                                    <option value="1 Month">
                                        1 month
                                    </option>

                                    <option value="3 Months">
                                        3 months
                                    </option>

                                    <option value="6 Months">
                                        6 months
                                    </option>

                                    <option value="12 Months">
                                        12 months
                                    </option>

                                    <option value="24 Months">
                                        24 months
                                    </option>

                                    <option value="No minimum">
                                        No minimum
                                    </option>

                                </select>
                            </div>


                            <div>
                                <label>
                                    Additional costs / Utilities (€):
                                </label>

                                <input
                                    type="text"
                                    value={selectedListing.additionalCosts}
                                    onChange={(event) =>
                                        setSelectedListing({
                                            ...selectedListing,
                                            additionalCosts:
                                                event.target.value
                                        })
                                    }
                                />
                            </div>

                        </div>
                    )}


                    {selectedListing.listingType === "forSale" && (

                        <div>

                            <h3>Sale details</h3>

                            <div>
                                <label>Price (€):</label>

                                <input
                                    type="text"
                                    value={selectedListing.price}
                                    onChange={(event) =>
                                        setSelectedListing({
                                            ...selectedListing,
                                            price: event.target.value
                                        })
                                    }
                                />
                            </div>

                        </div>
                    )}


                    <br />

                    <button onClick={handleSave}>
                        Save
                    </button>

                    <button onClick={handleCancel}>
                        Cancel
                    </button>

                </div>

            )}

        </div>
    );
};

export default SellerDashboard;

