# Sprint 2 Backlog and User Stories

## KotiSpot Real-Estate Platform

Story points are preliminary estimates that the development team should review during Sprint Planning.

## Sprint Goal

Develop a responsive React representation of KotiSpot's main property-seeker, account, listing-management, and administration journeys while independently building the corresponding Express backend with an MVC structure. Agree on the API endpoints and JSON data structures that will connect the two applications in Sprint 3.

## Sprint 2 Scope Rules

- The frontend uses static or mock data that follows the agreed API data structures.
- The backend provides the required models, controllers, routes, middleware, CRUD operations, validation, and error handling.
- The backend begins with mock or array data and is refactored to MongoDB and Mongoose after those topics are covered in class.
- Backend endpoints are tested manually with Postman or a similar tool.
- The frontend and backend are developed independently and are not connected during Sprint 2.
- Login, registration, and role-based views are simulations only. Do not implement real authentication, email codes, JWTs, sessions, or passwords.
- Do not add automated API testing or API documentation during Sprint 2.

## Selected Product Backlog

| Priority | Product Backlog ID | Sprint 2 User Story | Product Backlog Item | Story Points | Main Work |
| ---: | --- | --- | --- | ---: | --- |
| 1 | PBI-01 | S2-US-01 | Browse active properties for sale or rent | 3 | Frontend and backend |
| 2 | PBI-02 | S2-US-02 | View complete property details | 5 | Frontend and backend |
| 3 | PBI-03 | S2-US-03 | Search properties by location or keyword | 5 | Frontend and backend |
| 4 | PBI-04 | S2-US-04 | Filter and sort properties | 5 | Frontend and backend |
| 5 | PBI-25 | S2-US-05 | View rental-specific terms | 5 | Frontend and backend |
| 6 | PBI-05 | S2-US-06 | Contact a seller or agent | 5 | Frontend and backend |
| 7 | PBI-06 | S2-US-07 | Create simulated registration and login experiences | 5 | Frontend simulation and API contract |
| 8 | PBI-07 | S2-US-08 | Represent user roles and role-specific experiences | 5 | Frontend simulation and backend structure |
| 9 | PBI-27 | S2-US-09 | Represent seller and agent verification | 8 | Frontend and backend, without authentication |
| 10 | PBI-08 | S2-US-10 | Create a property listing for sale or rent | 8 | Frontend and backend |
| 11 | PBI-09 | S2-US-11 | Add and manage property images | 5 | Frontend and backend |
| 12 | PBI-10 | S2-US-12 | Edit, deactivate, and delete property listings | 5 | Frontend and backend |
| 13 | PBI-26 | S2-US-13 | Manage rental-specific terms | 8 | Frontend and backend |
| 14 | PBI-11 | S2-US-14 | Provide a responsive and accessible interface | 5 | Frontend, across all pages |
| 15 | PBI-12 | S2-US-15 | Validate data and handle errors safely | 8 | Frontend and backend |
| 16 | PBI-13 | S2-US-16 | Save favorite properties | 3 | Frontend interaction and backend CRUD |
| 17 | PBI-16 | S2-US-19 | Moderate property listings | 8 | Frontend and backend, without authentication |
|  |  |  | **Total** | **96** |  |

## User Stories

### S2-US-01: Browse properties for sale or rent

- **Related Product Backlog item:** PBI-01
- **Story points:** 3

**User story**

As a buyer or renter, I want to browse available properties for sale or rent so that I can discover a suitable home.

**Acceptance criteria**

1. The React interface lets users choose between properties for sale and properties for rent.
2. Active mock listings appear as cards containing an image, location, property type, and sale price or monthly rent.
3. Sale and rental listings are clearly distinguished.
4. Selecting a card opens the correct property-details route.
5. Empty and loading states are represented in the frontend.
6. The backend provides a route that returns active listings in the agreed JSON format.
7. Frontend mock listings use the same fields and types as the backend response, without calling the backend.

---

### S2-US-02: View complete property details

- **Related Product Backlog item:** PBI-02
- **Story points:** 5
- **Dependency:** S2-US-01

**User story**

As a buyer or renter, I want to view complete property information so that I can decide whether I am interested in the property.

**Acceptance criteria**

1. The property page displays the title, location, description, purpose, type, size, bedrooms, availability, and relevant price.
2. Available images are presented in a gallery or clearly structured image area.
3. A visible action lets the user continue to the inquiry form.
4. Missing optional information does not break the page.
5. An unknown property identifier displays a clear not-found state.
6. The backend provides a route for retrieving one property and returns an appropriate not-found error.
7. The frontend uses a matching mock property object and does not call the backend.

---

### S2-US-03: Search properties

- **Related Product Backlog item:** PBI-03
- **Story points:** 5
- **Dependency:** S2-US-01

**User story**

As a buyer or renter, I want to search by location or keyword so that I can quickly find relevant properties.

**Acceptance criteria**

1. Users can search frontend mock data by city, neighborhood, address, or keyword.
2. Search ignores unnecessary spaces and letter capitalization.
3. Results respect the selected sale or rental purpose.
4. The entered search term remains visible and can be cleared.
5. A clear message appears when there are no matches.
6. The agreed API contract describes the search query parameter.
7. The backend route returns matching active properties when manually tested.

---

### S2-US-04: Filter and sort properties

- **Related Product Backlog item:** PBI-04
- **Story points:** 5
- **Dependency:** S2-US-01

**User story**

As a buyer or renter, I want to filter and sort properties so that I can focus on homes matching my requirements.

**Acceptance criteria**

1. Users can filter mock listings by purpose, property type, price range, bedrooms, and minimum size.
2. Multiple filters can be applied together.
3. Rental price filters use monthly rent, while sale price filters use sale price.
4. Users can sort by lowest price, highest price, and newest listing.
5. Users can clear all active filters.
6. Invalid ranges show a helpful validation message.
7. The backend supports the agreed filter and sort query parameters and is checked manually.

---

### S2-US-05: View rental-specific terms

- **Related Product Backlog item:** PBI-25
- **Story points:** 5
- **Dependency:** S2-US-02

**User story**

As a prospective renter, I want to view a property's rental terms so that I can decide whether the home matches my needs and budget.

**Acceptance criteria**

1. A rental property displays rent with a clear monthly unit.
2. The details page displays the available-from date and, when provided, the deposit, lease type, furnishing status, and additional costs.
3. Missing optional rental information does not produce misleading values or break the page.
4. Sale listings do not display rental-only labels or fields.
5. Rental fields and their types are included in the agreed property JSON structure.
6. Both the frontend mock object and backend response follow that structure.

---

### S2-US-06: Contact a seller or agent

- **Related Product Backlog item:** PBI-05
- **Story points:** 5
- **Dependency:** S2-US-02

**User story**

As an interested buyer or renter, I want to send an inquiry about a property so that I can ask the responsible seller or agent for more information.

**Acceptance criteria**

1. The frontend inquiry form is connected to the selected mock property.
2. Name, valid email address, and message are required.
3. Empty or excessively long messages show clear validation errors.
4. Submitting the frontend form produces a simulated success message without contacting the backend.
5. The backend provides a create-inquiry route and records the property identifier and submission time.
6. Valid and invalid backend requests are checked manually in Postman or a similar tool.
7. The request and response JSON structures are agreed by both teams.

---

### S2-US-07: Simulate registration and login

- **Related Product Backlog item:** PBI-06
- **Story points:** 5

**User story**

As a visitor, I want to see and use registration and login forms so that I can understand how account access will work in the completed product.

**Acceptance criteria**

1. The React application includes separate registration and login pages or clearly separated form states.
2. The forms require a correctly formatted email address.
3. Submitting valid data displays a simulated success message or mock logged-in state.
4. Invalid input displays a clear field-level error.
5. Navigation represents the logged-out and mock logged-in states.
6. The future authentication request and response structures are agreed and recorded for Sprint 3.
7. No email is sent and no real one-time code, password, JWT, session, or authentication check is implemented.

---

### S2-US-08: Represent role-specific experiences

- **Related Product Backlog item:** PBI-07
- **Story points:** 5
- **Dependency:** S2-US-07

**User story**

As a user, I want the interface to represent features associated with my role so that I can understand which parts of KotiSpot are relevant to me.

**Acceptance criteria**

1. The frontend can demonstrate visitor, buyer or renter, verified seller or agent, and administrator views using mock state.
2. Public users can reach browsing, searching, property details, and inquiry views.
3. Seller or agent mock views include listing-management features.
4. Administrator mock views include verification and listing-moderation features.
5. Role values and permitted actions are represented consistently in the frontend mocks and backend data structures.
6. No role is established from a real login and no real authorization middleware is claimed as complete.

---

### S2-US-09: Represent seller and agent verification

- **Related Product Backlog item:** PBI-27
- **Story points:** 8
- **Dependencies:** S2-US-07 and S2-US-08

**User story**

As a user, I want to apply to become a verified seller or agent so that I can understand the approval process required before managing listings.

**Acceptance criteria**

1. The frontend provides an application form for seller or agent status.
2. Required fields and mock document information are validated before simulated submission.
3. The interface can represent pending, approved, and rejected application states.
4. The administrator interface can demonstrate approval or rejection, including a rejection reason.
5. The backend supports creating, viewing, approving, and rejecting verification applications using the agreed data structure.
6. Private application information is not included in public property responses.
7. The frontend does not call the backend and the workflow does not depend on real authentication.

---

### S2-US-10: Create a property listing

- **Related Product Backlog item:** PBI-08
- **Story points:** 8
- **Dependencies:** S2-US-08 and S2-US-09

**User story**

As a verified seller or agent, I want to create a property listing for sale or rent so that suitable buyers or renters can discover it.

**Acceptance criteria**

1. A mock verified seller or agent can reach the React listing form.
2. The form requires purpose, title, location, property type, description, positive price, and positive property size.
3. Sale listings use sale price and rental listings use monthly rent.
4. Clear messages identify invalid or missing fields.
5. Frontend submission produces a simulated draft or success state without calling the backend.
6. The backend provides a create-property route in the MVC structure and validates its request body.
7. The agreed request and response objects associate the listing with an owner identifier for later authentication work.

---

### S2-US-11: Add and manage property images

- **Related Product Backlog item:** PBI-09
- **Story points:** 5
- **Dependency:** S2-US-10

**User story**

As a verified seller or agent, I want to add property images so that buyers and renters can understand what a property looks like.

**Acceptance criteria**

1. The frontend listing form can preview multiple selected or mock images.
2. The user can choose a main image and remove an image before simulated submission.
3. Unsupported file types and agreed size limits show a clear frontend error.
4. Property images maintain their aspect ratio and include suitable alternative text or a fallback description.
5. The agreed property structure identifies the main image and contains an ordered image list.
6. The backend can create and update image metadata or agreed image references for a property.
7. External image storage is not required unless the group has explicitly agreed to use it.

---

### S2-US-12: Edit, deactivate, and delete listings

- **Related Product Backlog item:** PBI-10
- **Story points:** 5
- **Dependency:** S2-US-10

**User story**

As a verified seller or agent, I want to manage my property listings so that their information and availability remain accurate.

**Acceptance criteria**

1. A seller or agent dashboard displays listings belonging to a mock account.
2. The frontend can demonstrate editing, deactivation, sold or rented status, and deletion confirmation using mock data.
3. Deactivated, sold, rented, and deleted mock properties no longer appear as available listings.
4. The backend provides read, update, status-change, and delete operations in the MVC structure.
5. Unknown listing identifiers and invalid updates return appropriate errors.
6. Ownership information is included in the data model, while real authorization remains for Sprint 3.
7. The frontend and backend are tested separately.

---

### S2-US-13: Manage rental-specific terms

- **Related Product Backlog item:** PBI-26
- **Story points:** 8
- **Dependencies:** S2-US-10 and S2-US-12

**User story**

As a verified seller or agent, I want to manage a rental listing's terms so that prospective renters can see accurate information.

**Acceptance criteria**

1. Selecting "For Rent" reveals monthly rent and available-from fields in the listing form.
2. The form also supports deposit, lease type or minimum period, furnishing status, and additional costs.
3. Monthly rent and available-from date are required for a rental listing, and negative amounts are rejected.
4. Switching a draft between sale and rental updates the relevant required fields.
5. Rental terms can be changed in the mock edit journey.
6. The backend validates and stores the agreed rental fields.
7. Sale responses do not present rental-only values as applicable.

---

### S2-US-14: Provide a responsive and accessible interface

- **Related Product Backlog item:** PBI-11
- **Story points:** 5

**User story**

As a user, I want KotiSpot to work across different devices and support accessible interaction so that I can use it comfortably.

**Acceptance criteria**

1. The main Sprint 2 pages work at representative mobile, tablet, and desktop widths.
2. Content does not create unnecessary horizontal scrolling.
3. Navigation remains usable on a small screen.
4. Forms have visible labels, instructions, and error messages.
5. Interactive elements can be reached and used with a keyboard, with a visible focus indicator.
6. Text and controls have readable contrast.
7. Meaningful images have alternative text.
8. The visual result remains aligned with the Sprint 1 prototype.

---

### S2-US-15: Validate data and handle errors safely

- **Related Product Backlog item:** PBI-12
- **Story points:** 8

**User story**

As a user, I want KotiSpot to validate my input and explain errors clearly so that I can recover from mistakes safely.

**Acceptance criteria**

1. Required fields and invalid values are checked in the relevant frontend forms.
2. Frontend errors explain what the user needs to correct and preserve entered values where practical.
3. The backend validates relevant route parameters, query values, and request bodies.
4. Unknown resources return a not-found response and invalid input returns a client-error response.
5. Unexpected backend failures return a safe message without exposing internal details.
6. Shared validation rules and error JSON fields are included in the agreed interface.
7. Representative success and failure responses are checked manually.
8. Real authentication and authorization security are not included in Sprint 2.

---

### S2-US-16: Save favorite properties

- **Related Product Backlog item:** PBI-13
- **Story points:** 3
- **Dependencies:** S2-US-02 and S2-US-07

**User story**

As a buyer or renter, I want to save favorite properties so that I can return to them later.

**Acceptance criteria**

1. A mock logged-in user can add and remove favorites in the React interface.
2. Saved mock properties appear on a favorites page.
3. The same property cannot be saved twice.
4. Deleted or unavailable properties are handled with a clear state.
5. The backend provides create, read, and delete operations for favorites using mock user and property identifiers.
6. The frontend does not call the backend, and persistence across real sessions is not required in Sprint 2.

---



### S2-US-19: Moderate property listings

- **Related Product Backlog item:** PBI-16
- **Story points:** 8
- **Dependencies:** S2-US-08 and S2-US-10

**User story**

As an administrator, I want to review and moderate property listings so that inappropriate content can be removed from public results.

**Acceptance criteria**

1. A mock administrator can view active, inactive, and flagged listings in the React interface.
2. A moderation action requires confirmation and a reason.
3. A moderated mock listing disappears from public results.
4. The backend provides routes for viewing moderation candidates and changing a listing's moderation status.
5. The backend records the reason and date in the agreed moderation structure.
6. Invalid listing identifiers or missing reasons return appropriate errors.
7. The UI uses mock role state, and real administrator authentication and authorization are not implemented in Sprint 2.

## Shared Sprint Tasks

| Task ID | Task | Supports |
| --- | --- | --- |
| S2-T01 | Confirm the Sprint Goal, selected backlog, estimates, and team ownership | All stories |
| S2-T02 | Agree on the property, user, inquiry, verification, favorite, and moderation data structures | All relevant stories |
| S2-T03 | Record required endpoints, HTTP methods, request JSON, response JSON, and error shapes | All backend stories |
| S2-T04 | Set up the React application, shared layout, navbar, and routes | All frontend stories |
| S2-T05 | Create reusable property cards, forms, feedback messages, and mock datasets | All relevant frontend stories |
| S2-T06 | Set up the Express server using models, controllers, routes, and middleware | All backend stories |
| S2-T07 | Implement the selected backend CRUD operations first with mock or array data | All backend stories |
| S2-T08 | Refactor persistence to MongoDB and Mongoose after the class instruction | All backend stories |
| S2-T09 | Manually verify backend success and error cases with Postman or a similar tool | All backend stories |
| S2-T10 | Check responsive behavior, keyboard use, labels, focus, contrast, and image text | S2-US-14 and all frontend stories |
| S2-T11 | Review the frontend against the Sprint 1 prototype | All frontend stories |
| S2-T12 | Document Daily Scrum insights, team contributions, Sprint Review results, and the 4Ls retrospective | Sprint deliverables |
| S2-T13 | Complete each member's required frontend and backend code self-assessments | Sprint deliverables |
| S2-T14 | Prepare and rehearse the 10–12-minute Sprint 2 presentation | Sprint deliverables |

## Definition of Done

A Sprint 2 story is done when all of the following relevant conditions are met:

1. Its acceptance criteria have been checked by the team.
2. The frontend behavior works with static or mock data and remains independent of the backend.
3. Relevant backend behavior follows the course MVC structure and works independently of the frontend.
4. Frontend mock data, backend data, and the agreed interface use compatible field names and types.
5. Relevant success, invalid-input, and not-found backend cases have been checked manually.
6. The implementation is responsive, accessible at the agreed level, and aligned with the Sprint 1 prototype.
7. Code has been reviewed, obvious defects have been addressed, and no secrets or generated junk have been committed.
8. Work is visible in the team's Scrum board and contribution evidence.
9. No Sprint 3 functionality has been added, including frontend-backend integration, real authentication, automated API testing, or API documentation.
