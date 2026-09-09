import house_image from "./src/assets/house1.jpg"

export const navLinks = [
    { id: 1, href: "/rent", text: "For Rent" },
    { id: 2, href: "/buy", text: "Buy" },
    { id: 3, href: "/sell", text: "Sell" },
    { id: 4, href: "/contact", text: "Contact us" },
];

export const authLinks = [
    { id: 1, href: "/login", text: "Login" },
    { id: 2, href: "/register", text: "Register" },
];

export const properties = [
    {
        id: 1,
        image: house_image,
        location: "Helsinki",
        address: "Mannerheimintie 25",
        postalCode: "00100",
        price: 385000,
        size: 78,
        rooms: 3,
        propertyType: "apartment",
        listingType: "buy"
    },
    {
        id: 2,
        image: house_image,
        location: "Espoo",
        address: "Tapiolantie 12",
        postalCode: "02100",
        price: 520000,
        size: 125,
        rooms: 4,
        propertyType: "house",
        listingType: "buy"
    },
    {
        id: 3,
        image: house_image,
        location: "Tampere",
        address: "Hämeenkatu 18",
        postalCode: "33100",
        price: "1250/month",
        size: 62,
        rooms: 2,
        propertyType: "apartment",
        listingType: "rent"
    },
    {
        id: 4,
        image: house_image,
        location: "Turku",
        address: "Aurakatu 45",
        postalCode: "20100",
        price: 310000,
        size: 105,
        rooms: 4,
        propertyType: "house",
        listingType: "buy"
    },
    {
        id: 5,
        image: house_image,
        location: "Oulu",
        address: "Kirkkokatu 8",
        postalCode: "90100",
        price: "750/month",
        size: 32,
        rooms: 1,
        propertyType: "studio",
        listingType: "rent"
    },
    {
        id: 6,
        image: house_image,
        location: "Vantaa",
        address: "Tikkurilantie 30",
        postalCode: "01300",
        price: 265000,
        size: 70,
        rooms: 3,
        propertyType: "apartment",
        listingType: "buy"
    },
    {
        id: 7,
        image: house_image,
        location: "Jyväskylä",
        address: "Vapaudenkatu 22",
        postalCode: "40100",
        price: "1450/month",
        size: 95,
        rooms: 4,
        propertyType: "house",
        listingType: "rent"
    },
    {
        id: 8,
        image:house_image,
        location: "Rovaniemi",
        address: "Rovakatu 15",
        postalCode: "96200",
        price: "650/month",
        size: 24,
        rooms: 1,
        propertyType: "room",
        listingType: "rent"
    }
];

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
