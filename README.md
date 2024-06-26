# File++ Express

File++ Express is a simple Express.js application for managing files in a directory. It provides basic functionality to create, delete, and view files within the specified directory.

![](https://raw.githubusercontent.com/Darkx-dev/file-plus-plus-express/main/sample.gif)

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

- Node.js installed on your machine.

### Installation

1. Clone the repository to your local machine:

    ```bash
    git clone https://github.com/Darkx-dev/file-plus-plus-express.git
    ```

2. Navigate to the project directory:

    ```bash
    cd file-plus-plus-express
    ```

3. Install dependencies using npm:

    ```bash
    npm install
    ```

### Usage

1. Run the server:

    ```bash
    npm start
    ```

2. Open your web browser and go to `http://localhost:8080`.

3. You will see a list of files in the directory and some basic statistics about each file.

4. To create a new file, enter a name and data in the form at the top of the page and click "Create File".

5. To delete a file, click the "Delete" button next to the file you want to delete.

## Routes

### GET /

- Displays a list of files in the directory and basic statistics about each file.
- Renders the "home" view using EJS template engine.

### POST /

- Creates a new file in the directory.
- Expects the file name and data in the request body.
- Redirects back to the home page after creating the file.

### DELETE /

- Deletes a file from the directory.
- Expects the file name in the request body.
- Redirects back to the home page after deleting the file.

### GET /edit

- Displays the edit page for a specific file.
- Expects the file name as a query parameter (e.g., /edit?file=example.txt).
- Renders the "edit" view using EJS template engine.

### PATCH /edit

- Updates the content of a file.
- Expects the file name and new content in the request body.
- Redirects back to the home page after updating the file.

## Built With

- Express.js - Web framework for Node.js
- EJS (Embedded JavaScript) - Templating engine
- method-override - Middleware for handling HTTP DELETE requests

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- This project was created as a learning exercise for building web applications with Express.js.
