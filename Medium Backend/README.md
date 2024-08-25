
---

# Medium Clone Backend

Welcome to the backend of the Medium Clone project! This part of the project handles all the server-side logic, API endpoints, and database interactions. It's built with Cloudflare Workers and utilizes modern technologies for robust and efficient performance.

## Table of Contents

- [Tech Stack](#tech-stack)
- [Setup and Installation](#setup-and-installation)
- [API Endpoints](#api-endpoints)
- [Project Structure](#project-structure)
- [Environment Variables](#environment-variables)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

## Tech Stack

- **Cloudflare Workers** for deployment
- **PostgreSQL** as the database
- **Prisma** as the ORM
- **Prisma Accelerate** for connection pooling
- **JWT** for authentication
- **Zod** for input validation
- **Honor Library** for writing Express-like code in TypeScript

## Setup and Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Vansh1379/Medium.git
   cd Medium Backend
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Run the backend locally:**
   ```bash
   npm run dev
   ```

   The backend will be running locally on `http://localhost:8787`.

## API Endpoints

### Authentication
- **Signup:** `https://backend.vanshkalra1379.workers.dev/api/v1/user/signup`
- **Signin:** `https://backend.vanshkalra1379.workers.dev/api/v1/user/signin`

### Blogs
- **Create/Publish a Blog:** `https://backend.vanshkalra1379.workers.dev/api/v1/blog`
- **Update a Blog:** `https://backend.vanshkalra1379.workers.dev/api/v1/blog/update`
- **Get a Specific Blog:** `https://backend.vanshkalra1379.workers.dev/api/v1/blog/3`
- **Get All Blogs:** `https://backend.vanshkalra1379.workers.dev/api/v1/blog/bulk`

## Project Structure

```plaintext
server/
├── src/
│   ├── controllers/ # Route handlers
│   ├── models/      # Prisma models
│   ├── routes/      # API routes
│   └── ...
└── ...
```

## Environment Variables

Create a `.env` file in the `server` directory with the following environment variables:

- `DATABASE_URL` - Your PostgreSQL connection string
- `JWT_SECRET` - Secret key for JWT authentication
- `EMAIL_USER` - Your email address for Nodemailer
- `EMAIL_PASS` - Your email password or app-specific password for Nodemailer

## Contributing

Contributions are welcome! Please submit a Pull Request or open an issue for any suggestions or bugs you encounter.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.

## Contact

For any questions or feedback, reach out to me at [vanshkalra1379@gmail.com](mailto:vanshkalra@example.com).

---
