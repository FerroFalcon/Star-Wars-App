# Star Wars API Frontend Challenge

This project is a frontend application built with ReactJS, consuming the Star Wars API to display information about characters in the Star Wars universe. The application includes features such as pagination, sorting, searching, error handling, loading states, and more.

## Setup

Clone the repository from GitHub:

```bash
git clone https://github.com/FerroFalcon/Star-Wars-App.git
```

Navigate to the project directory:

```bash
cd star-wars-app
```

Install dependencies:

```bash
npm install
```

## Usage

Start the development server:

```python
npm start
```

Open your browser and navigate to http://localhost:5173 to view the application.

## Functionality

- Fetches data from the Star Wars API to display a list of characters in a table.
- Paginates the table with 10 records per page.
- Allows users to sort the table by clicking on column headers.
- Provides a search feature for users to search for characters by name.
- Handles loading, error, and empty states gracefully.
- Each character entry includes attributes from the API response and an icon representing the character's species.

## Assumptions

- Assumed that only the name attribute of each character is searchable.
- Assumed that the API will return consistent data structures for all requests.
- Used Redux Toolkit for state management and Material UI for designing as specified.
- Implemented the frontend application in ECMAScript 6 or later, adhering to modern JavaScript standards.

## Submission

The project has been uploaded to GitHub: [GitHub Repository](https://github.com/FerroFalcon/Star-Wars-App)

The deployed application can be accessed on Vercel: [Deployed App](https://star-wars-ferro.vercel.app/)

Please reach out if there are any questions or concerns regarding the project. Thank you for the opportunity!
