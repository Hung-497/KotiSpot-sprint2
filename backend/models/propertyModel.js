// {
//   "id": 1,
//   "title": "Modern apartment in Helsinki",
//   "description": "Bright two-bedroom apartment near the city centre.",
//   "listingType": "rent",
//   "propertyType": "apartment",
//   "price": 1250,
//   "city": "Helsinki",
//   "address": "Example Street 10",
//   "postalCode": "00100",
//   "rooms": 2,
//   "bedrooms": 1,
//   "bathrooms": 1,
//   "size": 55,
//   "images": [
//     "/images/property-001.jpg"
//   ],
//   "status": "active"
// }

let propertyArray = [];
let nextId = 1;

const getAll = () => {
  return propertyArray.filter((property) => property.status === "active");
};

const addOne = (propertyData) => {
  const {
    title,
    description,
    listingType,
    propertyType,
    price,
    city,
    address,
    postalCode,
    rooms,
    bedrooms,
    bathrooms,
    size,
    status,
  } = propertyData;

  if (
    !title ||
    !description ||
    !listingType ||
    !propertyType ||
    !price ||
    !city ||
    !address ||
    !postalCode ||
    !rooms ||
    !bedrooms ||
    !bathrooms ||
    !size ||
    !status
  ) {
    return false;
  }

  const newItem = {
    ...propertyData,
    id: nextId++,
  };

  propertyArray.push(newItem);
  return newItem;
};

const findById = (id) => {
  return propertyArray.find((property) => property.id === Number(id)) || false;
};

const updateOneById = (id, propertyData) => {
  const property = findById(id);
  if (property) {
    Object.assign(property, propertyData);
    return property;
  }
  return false;
};

const deleteOneById = (id) => {
  const property = findById(id);
  if (property) {
    const initialLength = propertyArray.length;
    propertyArray = propertyArray.filter(
      (property) => property.id !== Number(id),
    );
    return propertyArray.length < initialLength;
  }
  return false;
};

module.exports = {
  getAll,
  addOne,
  findById,
  updateOneById,
  deleteOneById,
};
