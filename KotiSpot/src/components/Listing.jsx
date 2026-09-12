const Listing = ({ listing, onClick }) => {
    const price =
        listing.listingType === "forRent"
            ? `€${listing.monthlyRent} / month`
            : `€${listing.price}`;

    return (
        <div
            className="property-card"
            onClick={() => onClick(listing)}
        >
            {listing.photos.length > 0 && (
                <img
                    src={URL.createObjectURL(listing.photos[0])}
                    alt={listing.title}
                    className="property-card-image"
                />
            )}

            <div className="property-card-content">
                <h3>{listing.title}</h3>

                <p>{listing.address}</p>

                <p>{listing.location}</p>

                <strong>{price}</strong>
            </div>
        </div>
    );
};

export default Listing;