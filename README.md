# QuickTicket: A Next.js-Powered Ticketing System

QuickTicket is a modern, full-stack ticketing application built with the latest web technologies. It provides a streamlined interface for users to create, manage, and track support tickets, ensuring that every issue is addressed efficiently.

## Core Features

- **User Authentication**: Secure user registration and login system with password hashing and session management.
- **Ticket Management**: Create, view, and update tickets with details such as subject, description, and priority.
- **Intuitive Interface**: A clean and responsive UI built with Tailwind CSS for a seamless user experience across all devices.
- **Real-time Notifications**: Instant feedback on actions like ticket creation and login, powered by `sonner`.
- **Protected Routes**: Secure pages and API endpoints, ensuring that only authenticated users can access sensitive data.

## Tech Stack

- **Framework**: [Next.js](https://nextjs.org/) (v15)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) (v4)
- **Database**: [PostgreSQL](https://www.postgresql.org/)
- **ORM**: [Prisma](https://www.prisma.io/)
- **Authentication**: [JOSE](https://github.com/panva/jose) for JWT handling
- **UI Components**: [Lucide React](https://lucide.dev/guide/react) for icons
- **Error Monitoring**: [Sentry](https://sentry.io/)

## Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

- Node.js (v20 or later)
- npm, yarn, or pnpm
- A running PostgreSQL database

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://your-repository-url/quick-ticket.git
   cd quick-ticket
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Set up your environment variables:**

   Create a `.env.local` file in the root of your project and add the following variables. Replace the placeholder values with your actual database URL and a strong, randomly generated secret.

   ```env
   DATABASE_URL="postgresql://USER:PASSWORD@HOST:PORT/DATABASE"
   AUTH_SECRET="YOUR_VERY_SECRET_KEY_HERE"
   ```

4. **Apply database migrations:**

   ```bash
   npx prisma migrate dev
   ```

5. **Run the development server:**

   ```bash
   npm run dev
   ```

   Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

## Learn More

To learn more about the technologies used in this project, check out the following resources:

- [Next.js Documentation](https://nextjs.org/docs)
- [Prisma Documentation](https://www.prisma.io/docs/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.