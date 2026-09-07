const sampleProperty = {
  id: 1,
  ownerId: 1,

  title: "Modern apartment in Helsinki",
  description: "Bright two-bedroom apartment near the city centre.",

  listingType: "rent",
  propertyType: "residential",
  propertySubType: "apartment",

  price: 1250,
  currency: "EUR",

  city: "Helsinki",
  address: "Example Street 10",
  postalCode: "00100",

  rooms: 2,
  bedrooms: 1,
  bathrooms: 1,
  size: 55,

  features: {
    balcony: true,
    elevator: true,
    parking: true,
    furnished: true,
    petsAllowed: true,
    sauna: false,
  },

  rentalDetails: {
    availableFrom: "2026-10-01",
    deposit: 1250,
    minimumRentalPeriod: 12,
    additionalCosts: "Electricity and water are included.",
  },

  images: [
    {
      id: 1,
      url: "/images/property-001.jpg",
      description: "Living room",
      isMain: true,
    },
  ],

  status: "active", // Possible values: "active", "inactive", "sold", "rented"
  createdAt: "2026-09-06T12:00:00Z",
  updatedAt: "2026-09-06T12:00:00Z",
};

let propertyArray = [sampleProperty];
let favouritesArray = [1];
let nextId = 2;

const getAll = () => {
  return propertyArray.filter((property) => property.status === "active");
};

const isNonEmptyString = (value) =>
  typeof value === "string" && value.trim() !== "";

const isPositiveNumber = (value) =>
  typeof value === "number" && Number.isFinite(value) && value > 0;

const isNonNegativeNumber = (value) =>
  typeof value === "number" && Number.isFinite(value) && value >= 0;

const isPositiveInteger = (value) => Number.isInteger(value) && value > 0;

const isNonNegativeInteger = (value) => Number.isInteger(value) && value >= 0;

const isValidDateString = (value) =>
  isNonEmptyString(value) &&
  /^\d{4}-\d{2}-\d{2}$/.test(value) &&
  !Number.isNaN(Date.parse(value));

const defaultFeatures = {
  balcony: false,
  elevator: false,
  parking: false,
  furnished: false,
  petsAllowed: false,
  sauna: false,
};

const featureNames = Object.keys(defaultFeatures);

const isValidFeatures = (features) => {
  if (features === undefined) return true; // Features are optional
  if (!features || typeof features !== "object" || Array.isArray(features))
    return false;
  return Object.entries(features).every(
    ([key, value]) => featureNames.includes(key) && typeof value === "boolean",
  );
};

const validateProperty = (propertyData) => {
  if (!propertyData || typeof propertyData !== "object") {
    return false;
  }

  const {
    ownerId,
    title,
    description,
    listingType,
    propertyType,
    propertySubType,
    currency,
    price,
    city,
    address,
    postalCode,
    rooms,
    bedrooms,
    bathrooms,
    size,
    status,
    rentalDetails,
    features,
  } = propertyData;

  const requiredStrings = [
    title,
    description,
    propertyType,
    propertySubType,
    currency,
    city,
    address,
    postalCode,
  ];

  if (!requiredStrings.every(isNonEmptyString)) {
    return false;
  }

  if (!["sale", "rent"].includes(listingType)) {
    return false;
  }

  if (!["active", "inactive", "sold", "rented"].includes(status)) {
    return false;
  }

  if (
    !isPositiveInteger(ownerId) ||
    !isPositiveNumber(price) ||
    !isPositiveInteger(rooms) ||
    !isNonNegativeInteger(bedrooms) ||
    !isNonNegativeInteger(bathrooms) ||
    !isPositiveNumber(size)
  ) {
    return false;
  }

  if (listingType === "rent") {
    if (
      !rentalDetails ||
      !isValidDateString(rentalDetails.availableFrom) ||
      !isPositiveInteger(rentalDetails.minimumRentalPeriod)
    ) {
      return false;
    }

    if (
      rentalDetails.deposit !== undefined &&
      !isNonNegativeNumber(rentalDetails.deposit)
    ) {
      return false;
    }

    if (
      rentalDetails.additionalCosts !== undefined &&
      !isNonEmptyString(rentalDetails.additionalCosts)
    ) {
      return false;
    }
  }

  if (listingType === "sale" && rentalDetails !== undefined) {
    return false;
  }

  if (!isValidFeatures(features)) {
    return false;
  }

  return true;
};

const addOne = (propertyData) => {
  if (!validateProperty(propertyData)) {
    return false;
  }

  const now = new Date().toISOString();
  const newItem = {
    ...propertyData,
    features: { ...defaultFeatures, ...propertyData.features },
    id: nextId++,
    createdAt: now,
    updatedAt: now,
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
    const updatedProperty = {
      ...property,
      ...propertyData,
      features: propertyData.features !== undefined
        ? { ...property.features, ...propertyData.features }
        : property.features,
      id: property.id,
      createdAt: property.createdAt,
      updatedAt: new Date().toISOString(),
    };

    if (!validateProperty(updatedProperty)) {
      return false;
    }

    Object.assign(property, updatedProperty);
    return property;
  }
  return false;
};

const deleteOneById = (id) => {
  const property = findById(id);
  if (property) {
    if(checkFavourite(Number(id))){
      deleteOneFavourite(id);
    }
    const initialLength = propertyArray.length;
    propertyArray = propertyArray.filter(
      (property) => property.id !== Number(id),
    );
    return propertyArray.length < initialLength;
  }
  return false;
};
  
const findByFilter = (listingType = "any",
  propertyType = "any",
  propertySubType = "any", 
  minPrice = 0, 
  maxPrice = 99999999, 
  currency = "EUR", 
  city = "any", 
  minRooms = 0, 
  maxRooms = 99, 
  minBedrooms = 0, 
  maxBedrooms = 99, 
  minBathrooms = 0, 
  maxBathrooms = 99,
  minSize = 0, 
  maxSize = 99999, 
  balcony = false, 
  elevator = false, 
  parking = false, 
  furnished = false, 
  petsAllowed = false, 
  sauna = false, 
  status = "active",) => {
  let copy = propertyArray;
  // return copy;
  for (const x of copy) {
    if(!(x.listingType == listingType || listingType == "any")){
      copy.splice(copy.findIndex((element) => element == x), 1)
      continue;
    }
    if(!(x.propertyType == propertyType || propertyType == "any")){
      copy.splice(copy.findIndex((element) => element == x), 1)
      continue;
    }
    if(!(x.propertySubType == propertySubType || propertySubType == "any")){
      copy.splice(copy.findIndex((element) => element == x), 1)
      continue;
    }
    // Prices have to be adapted for different currencies
    if(!(x.price <= maxPrice)){
      copy.splice(copy.findIndex((element) => element == x), 1)
      continue;
    }
    if(!(x.price >= minPrice)){
      copy.splice(copy.findIndex((element) => element == x), 1)
      continue;
    }
    if(!(x.city == city || city == "any")){
      copy.splice(copy.findIndex((element) => element == x), 1)
      continue;
    }
    if(!(x.rooms <= maxRooms)){
      copy.splice(copy.findIndex((element) => element == x), 1)
      continue;
    }
    if(!(x.rooms >= minRooms)){
      copy.splice(copy.findIndex((element) => element == x), 1)
      continue;
    }
    if(!(x.bedrooms <= maxBedrooms)){
      copy.splice(copy.findIndex((element) => element == x), 1)
      continue;
    }
    if(!(x.bedrooms >= minBedrooms)){
      copy.splice(copy.findIndex((element) => element == x), 1)
      continue;
    }
    if(!(x.bathrooms <= maxBathrooms)){
      copy.splice(copy.findIndex((element) => element == x), 1)
      continue;
    }
    if(!(x.bathrooms >= minBathrooms)){
      copy.splice(copy.findIndex((element) => element == x), 1)
      continue;
    }
    if(!(x.size <= maxSize)){
      copy.splice(copy.findIndex((element) => element == x), 1)
      continue;
    }
    if(!(x.size >= minSize)){
      copy.splice(copy.findIndex((element) => element == x), 1)
      continue;
    }
    if(!(x.features.balcony == balcony || balcony == false)){
      copy.splice(copy.findIndex((element) => element == x), 1)
      continue;
    }
    if(!(x.features.elevator == elevator || elevator == false)){
      copy.splice(copy.findIndex((element) => element == x), 1)
      continue;
    }
    if(!(x.features.parking == parking || parking == false)){
      copy.splice(copy.findIndex((element) => element == x), 1)
      continue;
    }
    if(!(x.features.furnished == furnished || furnished == false)){
      copy.splice(copy.findIndex((element) => element == x), 1)
      continue;
    }
    if(!(x.features.petsAllowed == petsAllowed || petsAllowed == false)){
      copy.splice(copy.findIndex((element) => element == x), 1)
      continue;
    }
    if(!(x.features.sauna == sauna || sauna == false)){
      copy.splice(copy.findIndex((element) => element == x), 1)
      continue;
    }
    if(!(x.status == status)){
      copy.splice(copy.findIndex((element) => element == x), 1)
      continue;
    }
  }

  return copy;
};

const findByKeyword = (keyword) => {
  return (
    propertyArray.find(
      (property) =>
        property.title.includes(keyword) ||
        property.description.includes(keyword),
    ) || false
  );
};


const getAllFavourites = () => {
    let arr = []
    for (let i = 0; i < favouritesArray.length; i++) {
        arr.push(propertyArray[i])
    }
    return arr;
};
const addOneFavourite = (id) => {
    if(propertyArray.find((property) => property.id === Number(id)) != undefined) {
        favouritesArray.push(id);
        return getAllFavourites();
    }
    return false;
}
const checkFavourite = (id) => {
    if (favouritesArray.includes(Number(id))){
        return true;
    }
    return false;
}
//NOTE: id must be deleted when item is removed from propertyArray
const deleteOneFavourite = (id) => {
    if(favouritesArray.includes(Number(id))) {
        favouritesArray.splice(Number(id), 1)
        return getAllFavourites();
    }
    return false;
}


module.exports = {
  getAll,
  addOne,
  validateProperty,
  findById,
  updateOneById,
  deleteOneById,
  findByFilter,
  findByKeyword,
  getAllFavourites,
  addOneFavourite,
  deleteOneFavourite
};
