# MEAN Stack E-commerce Skeleton

This project serves as a fundamental skeleton for an e-commerce shopping platform, built on the MEAN stack (MongoDB, Express.js, Angular, Node.js). It provides a starting point for developers looking to create their own e-commerce websites.

## Features

- **User Authentication:** Implement user authentication with JWT for secure access to user-specific features.
- **Product Management:** Add, edit, and manage products easily through a user-friendly interface.
- **Shopping Cart:** Enable users to add products to their shopping cart and proceed with the checkout process.
- **Order Processing:** Implement basic order processing functionality for a seamless user experience.
- **Responsive Design:** Ensure a consistent and visually appealing experience across various devices.

## Prerequisites

Ensure you have the following installed on your system:

- MongoDB
- Node.js
- Angular CLI

## Getting Started

1. Clone the repository:

    ```bash
    git clone https://github.com/your-username/mean-ecommerce-skeleton.git
    cd mean-ecommerce-skeleton
    ```

2. Install dependencies:

    ```bash
    cd backend && npm install
    cd ../frontend && npm install
    ```

3. Set up MongoDB:

    - Create a MongoDB database.
    - Update the database connection details in `backend/config/database.js`.

4. Run the application:

    ```bash
    # Start the backend server
    cd backend && npm start

    # Start the Angular frontend
    cd frontend && ng serve
    ```

Visit `http://localhost:4200` to view the application.

## Contributing

Contributions are welcome! Feel free to open issues or pull requests to improve the project.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.
