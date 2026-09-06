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

const isNonEmptyString = (value) => typeof value === "string" && value.trim() !== "";
const isPositiveNumber = (value) => typeof value === "number" && Number.isFinite(value) && value > 0;

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

  const requiredStrings = [
    title,
    description,
    listingType,
    propertyType,
    city,
    address,
    postalCode,
    status,
  ];

  if (!requiredStrings.every(isNonEmptyString)) {
    return false;
  }

  if (!["sale", "rent"].includes(listingType)) {
    return false;
  }

  if (!isPositiveNumber(price) || !isPositiveNumber(size)) {
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

const findByFilter = (propertyData) => {
  let copy = {
    ...propertyData,
    "status" : "active"
  }
  return propertyArray.filter((property) => Object.keys(copy).every(key => copy[key] === property[key]));
  
}

const findByKeyword = (keyword) => {
  return propertyArray.find((property) => property.title.includes(keyword)||property.description.includes(keyword)) || false;
}

module.exports = {
  getAll,
  addOne,
  findById,
  updateOneById,
  deleteOneById,
  findByFilter,
  findByKeyword,
};
