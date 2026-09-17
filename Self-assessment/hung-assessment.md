- **Member name:** *Hung Bui*
- **Contribution area:** *Backend development, including routes, models, CRUD operations, validation, error handling, endpoint testing, and backend organization. I worked together with Eric on the backend implementation.*

---

### 1. Functionality

- **Does the code meet the requirements?**
  - [x] Does it implement all specified features you were responsible for?
  - [x] Are edge cases handled (e.g., invalid data, duplicates)?
  - [x] Are there any bugs or unexpected behaviors?

The backend implements the Sprint 2 functionality assigned to me and the backend team. The routes, controllers, and models work together correctly, and the endpoints were manually tested.

Input validation is included for invalid or missing data, and the backend returns appropriate HTTP status codes for common errors.

No major known bugs remain in the features I worked on, although further testing may identify additional edge cases.

- **Integration**
  - [x] Does your code work correctly with other parts of the application?
  - [x] Are inputs and outputs managed appropriately?

The backend components work together through the MVC structure. Routes call the appropriate controllers, controllers use the Mongoose models, and responses are returned as JSON.

---

### 2. Code Quality

- **Readability**
  - [x] Is your code easy to understand for other developers?
  - [x] Are variable and function names descriptive and meaningful?

The backend is separated into routes, controllers, models, middleware, configuration, and utility files. This makes the structure easier to understand and maintain.

Most function and variable names describe their purposes clearly.

- **Reusability**
  - [x] Can your code or parts of it be reused elsewhere in the application?
  - [x] Is logic modular and separated from unrelated concerns?

The MVC structure keeps routing, business logic, and database models separate. Shared error-handling middleware can also be reused across different endpoints.

Some validation logic could still be centralized further to reduce duplication.

- **Comments and Documentation**
  - [x] Are there comments explaining complex logic?
  - [ ] Is there documentation for how to use your code unit?

There are comments in some areas of the backend, but the code could have more consistent documentation.

Detailed API documentation was not added because API documentation belongs to Sprint 3 according to the course requirements.

---

### 3. Performance

- **Efficiency**
  - [x] Are there any unnecessary operations or performance bottlenecks?
  - [ ] Is the code optimized for larger datasets or high traffic (if applicable)?

For the scope of Sprint 2, the backend performs the required database operations without obvious unnecessary processing.

However, it has not yet been optimized for a large production dataset. Features such as pagination, additional database indexes, and query optimization could be considered later if needed.

---

### 4. Overall Assessment

- **Strengths**

The main strengths of my backend contribution are:

- Clear MVC-style separation between routes, controllers, models, and middleware.
- Use of MongoDB and Mongoose for persistent data.
- Validation of user input and handling of invalid requests.
- Appropriate HTTP status codes and error responses.
- CRUD and other backend functionality implemented according to the Sprint 2 requirements.
- Manual endpoint testing to confirm valid and invalid requests.
- Backend structure is suitable for frontend integration during Sprint 3.

- **Areas for Improvement**

The backend could be improved by:

- Reducing duplicated validation logic.
- Making error-response structures more consistent across all endpoints.
- Adding more comments where backend logic is less obvious.
- Improving database queries for larger datasets.
- Adding pagination where listing endpoints may eventually return many records.
- Expanding testing coverage.

- **Action Plan**

During Sprint 3, I plan to:

1. Refactor repeated validation where appropriate.
2. Standardize error response structures.
3. Connect the frontend to the backend using the agreed API interface.
4. Add automated API tests when required in Sprint 3.
5. Add API documentation when it is introduced in the course.
6. Implement authentication according to the Sprint 3 requirements.
7. Review database queries and add pagination or indexes where useful.

---

### 5. Additional Notes

The backend was developed collaboratively with Eric. We coordinated tasks, discussed blockers, and reviewed our progress during the sprint. I also contributed to testing, debugging, and integrating our backend work.