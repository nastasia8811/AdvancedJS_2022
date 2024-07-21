### Med and Care
This is the page where the Secretary can create cards describing scheduled visits to doctors.

login: f@f.com
password: As


## Task

You need to create a page where the Secretary can create cards describing scheduled visits to doctors.

The page should include:

1. Header:
    - In the top left corner – a logo (any logo can be used).
    - In the right corner – a "Login" button. After successful authorization, it should change to a "Create Visit" button.
2. Below the Header – a form to filter visits. This form should have three fields:
    - Search by title/content of the visit.
    - Search by status (Open/Done) (whether the visit has occurred or not).
    - Urgency of the visit (High, Normal, Low).
3. Below the filter form – a list of created visits.


#### Technical Requirements

- On the first visit to the page by the user, the board should display `No items have been added`. This message should also appear if the user has no added cards (for example, if they deleted all cards).
- When clicking the **Login** button, a modal window should appear where the user enters their email and password. If correct, the user sees a list of previously created visits.
- When clicking the **Create Visit** button, a modal window should appear where a new card can be created.
- Use the `class` syntax from ES6 for creating classes.
- For AJAX requests, you can use `fetch` or `axios`.
- After performing any AJAX requests, the page should not reload. When adding/deleting a card or performing similar operations, the entire list of cards should not be reloaded from the server. Use the server response data and JavaScript to update the information on the page.
- Previously added notes should not disappear when the page is refreshed or closed.
- It is recommended to split the project into modules using ES6 modules.

##### Modal Window "Create Visit"

In the modal window, there should be:

- A dropdown (select) to choose a doctor. Depending on the chosen doctor, fields that need to be filled out for the visit to that doctor should appear below this dropdown.
- The dropdown should have three options - **Cardiologist**, **Dentist**, **Therapist**.
- After selecting a doctor, additional fields should appear below for scheduling a visit to that doctor. Several fields are common to all three doctors:
    - Purpose of the visit
    - Short description of the visit
    - Dropdown - urgency (normal, priority, urgent)
    - Full Name
- Additionally, each doctor has unique fields to fill out. If the **Cardiologist** option is selected, additional fields are:
    - Usual blood pressure
    - Body mass index
    - Cardiovascular diseases
    - Age
- If the **Dentist** option is selected, an additional field to fill out is:
    - Last visit date
- If the **Therapist** option is selected, an additional field to fill out is:
    - Age
- A `Create` button. When clicked, an AJAX request is sent to the appropriate address, and if the response includes information about the newly created card, the card is created on the Visit Board on the page, and the modal window closes.
- A `Close` button - closes the modal window without saving the information and creating a card. Clicking outside the modal window also closes it.
- All input fields, except for the additional comments field, are mandatory. Validation for data correctness is optional.

##### Visit Card

The card created upon clicking should appear on the task board and should look approximately like this:

![interface](./img/2.png)

It should include:
- Full Name, entered during card creation.
- The doctor the person is scheduled to visit.
- A `Show More` button. Clicking it expands the card to show the rest of the information entered during the visit creation.
- An `Edit` button. When clicked, the card content turns into a form where the entered fields can be edited. The form should be similar to the modal window during card creation.
- A cross icon in the top right corner. Clicking it deletes the card.

##### Visit Filters

The card filter (input field for entering text to search by visit title or description, filter by status, by priority) should be implemented on the front-end. When the `value` of any form element changes (selected item in the dropdown, text entered in the `input`), the list of cards previously received from the server should be filtered, and the new information displayed on the screen.

The system should work similarly to filters in online stores (e.g., on the left [here](https://rozetka.com.ua/notebooks/c80004/)).

##### Classes

The JavaScript code must include the following classes:
- Modal (modal window);
- Visit (describes common fields and methods for all visits to any doctor);
- Subclasses VisitDentist, VisitCardiologist, VisitTherapist;

You need to design the methods and properties of each class yourself. If necessary, you can also add other classes.

#### Implementation Requirements

The design can be any, but it must be present.

#### AJAX Part

All necessary documentation for server interaction via AJAX can be found [here](https://ajax.test-danit.com/api-pages/cards.html).
