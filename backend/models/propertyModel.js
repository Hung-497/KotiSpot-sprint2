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
  } = propertyData;

  const requiredStrings = [
    title,
    description,
    propertyType,
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

  return true;
};

const addOne = (propertyData) => {
  if (!validateProperty(propertyData)) {
    return false;
  }

  const now = new Date().toISOString();
  const newItem = {
    ...propertyData,
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
  validateProperty,
  findById,
  updateOneById,
  deleteOneById,
  findByFilter,
  findByKeyword,
};
