# The Wild Oasis Website 🏕️

A modern cabin booking website built with Next.js 15, featuring authentication, reservation management, and seamless Supabase integration.

## 🌟 Features

- **Cabin Browsing**: Explore luxury cabins with detailed information and images
- **User Authentication**: Secure login/logout with NextAuth.js
- **Reservation System**: Book cabins with date selection and guest management
- **Account Management**: View and manage your reservations and profile
- **Responsive Design**: Optimized for all devices with Tailwind CSS
- **Real-time Data**: Powered by Supabase for instant updates

## 🚀 Tech Stack

- **Framework**: Next.js 15 with App Router
- **Styling**: Tailwind CSS
- **Database**: Supabase
- **Authentication**: NextAuth.js v5
- **UI Components**: Heroicons, React Day Picker
- **Date Handling**: date-fns

## 📋 Prerequisites

Before running this project, make sure you have:

- Node.js 18+ installed
- A Supabase account and project
- Environment variables configured (see below)

## ⚙️ Environment Variables

Create a `.env.local` file in the root directory with the following variables:

```env
SUPABASE_URL=your_supabase_project_url
SUPABASE_KEY=your_supabase_anon_key
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=your_nextauth_secret
```

## 🛠️ Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/the-wild-oasis-website.git
   cd the-wild-oasis-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   - Copy `.env.example` to `.env.local`
   - Fill in your Supabase credentials and other required variables

4. **Run the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
the-wild-oasis-website/
├── app/
│   ├── _components/          # Reusable UI components
│   ├── _lib/                # Utility functions and configurations
│   ├── _styles/             # Global styles
│   ├── account/             # Account management pages
│   ├── api/                 # API routes
│   ├── cabins/              # Cabin-related pages
│   ├── login/               # Authentication pages
│   ├── layout.js            # Root layout
│   └── page.js              # Home page
├── public/                  # Static assets
├── middleware.js            # Route protection middleware
└── package.json
```

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run prod` - Build and start production server
- `npm run lint` - Run ESLint

## 🎨 Key Components

- **CabinList & CabinCard**: Display available cabins
- **ReservationForm**: Handle booking submissions
- **DateSelector**: Interactive date picker for reservations
- **Filter**: Filter cabins by capacity
- **Navigation**: Main site navigation with auth state
- **AccountPages**: User profile and reservation management

## 🔐 Authentication

The app uses NextAuth.js v5 for authentication with:
- Google OAuth integration
- Session management
- Protected routes via middleware
- User profile management

## 📱 Responsive Design

Built with mobile-first approach using Tailwind CSS:
- Responsive navigation
- Adaptive layouts
- Touch-friendly interactions
- Optimized images with Next.js Image component

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Configure environment variables in Vercel dashboard
4. Deploy automatically on every push

### Manual Deployment

```bash
npm run build
npm run start
```

## 🧪 Testing

To run the application:

1. Ensure your Supabase database is set up with the required tables
2. Configure your environment variables
3. Run `npm run dev` and test the features:
   - Browse cabins
   - Sign in/out
   - Make reservations
   - Manage account

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Built following modern Next.js best practices
- Inspired by luxury cabin rental experiences
- Uses Supabase for seamless backend integration

---

**Built with ❤️ using Next.js and Supabase**