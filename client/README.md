# 🛍️ Brand E-Commerce Frontend

React-based frontend for the Brand e-commerce platform with optional authentication.

## 🚀 Features

- **Responsive Design**: Mobile-first responsive UI
- **Product Browsing**: Browse products by category, brand, and search
- **Shopping Cart**: Add/remove items with quantity management
- **Checkout Process**: Secure checkout with PayPal integration
- **User Authentication**: Optional login/register for enhanced features
- **Admin Dashboard**: Product and order management for administrators

## 🛠️ Tech Stack

- **React 18** with Vite
- **Tailwind CSS** for styling
- **Redux Toolkit** for state management
- **React Router** for navigation
- **Lucide React** for icons
- **Shadcn/ui** for components

## 📁 Project Structure

```
client/
├── src/
│   ├── components/
│   │   ├── admin-view/     # Admin dashboard components
│   │   ├── auth/          # Authentication components
│   │   ├── common/        # Shared components
│   │   ├── shopping-view/ # Shopping components
│   │   └── ui/            # Shadcn/ui components
│   ├── pages/
│   │   ├── admin-view/    # Admin pages
│   │   ├── auth/          # Auth pages
│   │   ├── shopping-view/ # Shopping pages
│   │   └── not-found/     # 404 page
│   ├── store/             # Redux store and slices
│   ├── config/            # Configuration files
│   ├── lib/               # Utility functions
│   └── assets/            # Static assets
├── public/                # Public assets
├── package.json           # Dependencies
└── vite.config.js         # Vite configuration
```

## 🚀 Quick Start

### Prerequisites
- Node.js 16+
- npm or yarn

### Installation
```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

### Environment Variables
Create `.env` file:
```
VITE_API_URL=http://localhost:5000/api
```

## 🎯 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 📊 State Management

### Redux Slices
- **auth-slice**: User authentication state
- **shop/products-slice**: Product data
- **shop/cart-slice**: Shopping cart
- **shop/order-slice**: Order management
- **common-slice**: Shared features

## 🎨 Styling

- **Tailwind CSS** for utility-first styling
- **Shadcn/ui** for consistent component design
- **Responsive design** with mobile-first approach

## 🔧 Development

### Component Structure
- **Atomic Design**: Components organized by complexity
- **Reusable Components**: Shared components in common/
- **Route-based Organization**: Pages organized by routes

### API Integration
- **Axios** for HTTP requests
- **Redux Thunk** for async actions
- **Error handling** with user feedback

## 🧪 Testing

```bash
# Run tests
npm run test

# Run tests in watch mode
npm run test:watch
```

## 🚀 Deployment

### Vercel
1. Push code to GitHub
2. Import project to Vercel
3. Set environment variables
4. Deploy

### Netlify
1. Build command: `npm run build`
2. Publish directory: `dist`
3. Set environment variables

## 🤝 Contributing

1. Fork the repository
2. Create feature branch
3. Make changes
4. Test thoroughly
5. Submit pull request
