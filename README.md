# Glass Effect Contact Book

A beautiful, responsive contact management application built with React, Redux Toolkit, and featuring a stunning glass-morphism design.

## Features

- ✨ **Glass Effect Design**: Beautiful glass-morphism UI with backdrop blur effects
- 🔒 **Secure Authentication**: JWT-based user registration and login
- 📱 **Responsive Design**: Works perfectly on desktop, tablet, and mobile devices
- 📞 **Contact Management**: Add, view, and delete contacts
- 🔍 **Smart Filtering**: Search contacts by name or phone number
- 💾 **Persistent Storage**: User sessions persist across browser refreshes
- 🎨 **Modern UI**: Smooth animations and hover effects

## Tech Stack

- **Frontend**: React 18, Vite
- **State Management**: Redux Toolkit, Redux Persist
- **Routing**: React Router DOM
- **Forms**: Formik
- **Styling**: CSS Modules with glass-morphism effects
- **HTTP Client**: Axios
- **Backend API**: connections-api.goit.global

## Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── App/            # Main app component
│   ├── AppBar/         # Navigation header
│   ├── AuthNav/        # Authentication navigation
│   ├── Contact/        # Individual contact item
│   ├── ContactForm/    # Add contact form
│   ├── ContactList/    # List of contacts
│   ├── Filter/         # Search filter
│   ├── GlassCard/      # Glass effect card wrapper
│   ├── Layout/         # Main layout component
│   ├── LoginForm/      # Login form
│   ├── Navigation/     # Main navigation
│   ├── RegistrationForm/ # Registration form
│   ├── UserMenu/       # User menu when logged in
│   ├── PrivateRoute.jsx    # Protected route wrapper
│   └── RestrictedRoute.jsx # Restricted route wrapper
├── pages/              # Page components
│   ├── Contacts/       # Contacts page
│   ├── Home/           # Home page
│   ├── Login/          # Login page
│   └── Registration/   # Registration page
├── redux/              # Redux store and slices
│   ├── auth/           # Authentication slice
│   ├── contacts/       # Contacts slice
│   └── filters/        # Filters slice
├── main.jsx           # Application entry point
└── index.css          # Global styles
```

## Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd goit-react-hw-08
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## Usage

### Authentication

1. **Register**: Create a new account with your name, email, and password
2. **Login**: Sign in with your email and password
3. **Logout**: Click the logout button in the user menu

### Contact Management

1. **Add Contact**: Fill out the contact form with name and phone number
2. **View Contacts**: All your contacts are displayed in a beautiful glass card
3. **Search**: Use the filter to search contacts by name or phone number
4. **Delete**: Click the delete button to remove a contact

## Design Features

### Glass Effect
- Semi-transparent backgrounds with backdrop blur
- Subtle borders and shadows
- Smooth hover animations
- Responsive design for all screen sizes

### Color Scheme
- Primary: #0085FF (Blue)
- Secondary: #003465 (Dark Blue)
- Background: Radial gradient from blue to dark blue
- Text: White with varying opacity levels

### Responsive Breakpoints
- Mobile: < 600px
- Tablet: 600px - 1024px
- Desktop: > 1024px

## API Endpoints

The application uses the following API endpoints:

- `POST /users/signup` - User registration
- `POST /users/login` - User login
- `POST /users/logout` - User logout
- `GET /users/current` - Get current user
- `GET /contacts` - Get user contacts
- `POST /contacts` - Add new contact
- `DELETE /contacts/:id` - Delete contact

## Deployment

The project is configured for deployment on Vercel with the included `vercel.json` file.

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is part of the GOIT React course curriculum. 