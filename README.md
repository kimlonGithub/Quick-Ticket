# QuickTicket: A Next.js-Powered Ticketing System

QuickTicket is a modern, full-stack ticketing application built with the latest web technologies. It provides a streamlined interface for users to create, manage, and track support tickets, ensuring that every issue is addressed efficiently.

## Core Features

- **User Authentication**: Secure user registration and login system with password hashing and session management.
- **Ticket Management**: Create, view, and update tickets with details such as subject, description, and priority.
- **Intuitive Interface**: A clean and responsive UI built with Tailwind CSS for a seamless user experience across all devices.
- **Real-time Notifications**: Instant feedback on actions like ticket creation and login, powered by `sonner`.
- **Protected Routes**: Secure pages and API endpoints, ensuring that only authenticated users can access sensitive data.
- **Internationalization (i18n)**: Multi-language support with locale-based routing and translations for English, Chinese, Khmer, Japanese, Korean, and Thai.
- **Language Switcher Dropdown**: Instantly switch between supported languages with a modern, styled dropdown.
- **Smart Locale Routing**: Direct links and middleware ensure users always land on the correct localized version of every page.

## Tech Stack

- **Framework**: [Next.js](https://nextjs.org/) (v15)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) (v4)
- **Database**: [PostgreSQL](https://www.postgresql.org/)
- **ORM**: [Prisma](https://www.prisma.io/)
- **Authentication**: [JOSE](https://github.com/panva/jose) for JWT handling
- **UI Components**: [Lucide React](https://lucide.dev/guide/react) for icons
- **Error Monitoring**: [Sentry](https://sentry.io/)

## Internationalization (i18n)

- **Supported Languages**: English, 中文 (Chinese), ខ្មែរ (Khmer), 日本語 (Japanese), 한국어 (Korean), ไทย (Thai)
- **Language Switcher**: Easily switch languages from any page using the dropdown in the navbar.
- **Locale-based Routing**: All routes are prefixed with the selected locale (e.g., `/en/tickets/new`, `/zh/tickets/new`).
- **Automatic Redirects**: Middleware ensures users are always redirected to the correct locale version of each page.
- **Extensible**: Add new languages by simply adding a translation file and updating the config.

## Results

![image](https://github.com/user-attachments/assets/7555f13c-33bf-4ffc-9bd2-e7b483979e20)
![image](https://github.com/user-attachments/assets/75489701-0900-4f16-9c6f-f52e1a4bb913)
![image](https://github.com/user-attachments/assets/6b14cfa1-3ca9-4f88-8507-6b9346bf4556)
![image](https://github.com/user-attachments/assets/e32e1ffb-26f7-4eae-8ce2-efa9c77a50bf)
![image](https://github.com/user-attachments/assets/fe19979e-6dbe-42e8-8e77-affdb5ff7a38)

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
