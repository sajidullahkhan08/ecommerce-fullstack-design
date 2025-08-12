# 🛍️ Brand E-Commerce Platform

A full-stack e-commerce platform built with React, Node.js, and MongoDB that allows users to browse products, add items to cart, and checkout with optional authentication.

## 🚀 Features

### Frontend (Client)
- **Responsive Design**: Mobile-first responsive UI
- **Product Browsing**: Browse products by category, brand, and search
- **Shopping Cart**: Add/remove items with quantity management
- **Checkout Process**: Secure checkout with multiple payment options
- **User Authentication**: Optional login/register for enhanced features
- **Admin Dashboard**: Product and order management for administrators

### Backend (Server)
- **RESTful API**: Clean and scalable API architecture
- **Authentication**: JWT-based authentication system
- **Database**: MongoDB with Mongoose ODM
- **File Upload**: Cloudinary integration for product images
- **Payment Processing**: PayPal integration for secure payments
- **Admin Controls**: CRUD operations for products and orders

## 🛠️ Tech Stack

### Frontend
- **React 18** with Vite
- **Tailwind CSS** for styling
- **Redux Toolkit** for state management
- **React Router** for navigation
- **Lucide React** for icons
- **Shadcn/ui** for components

### Backend
- **Node.js** with Express
- **MongoDB** with Mongoose
- **JWT** for authentication
- **Cloudinary** for image storage
- **PayPal SDK** for payments
- **Multer** for file uploads

### Database
- **MongoDB** Atlas for cloud database
- **Mongoose** for data modeling

## 📁 Project Structure

```
ecommerce-fullstack-design/
├── client/                 # React frontend
├── server/                 # Node.js backend
├── README.md              # This file
└── package.json           # Root package.json
```

## 🚀 Quick Start

### Prerequisites
- Node.js 16+
- MongoDB Atlas account
- Cloudinary account
- PayPal developer account

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/yourusername/ecommerce-fullstack-design.git
cd ecommerce-fullstack-design
```

2. **Install dependencies**
```bash
# Install root dependencies
npm install

# Install client dependencies
cd client && npm install

# Install server dependencies
cd ../server && npm install
```

3. **Environment Setup**

Create `.env` files:

**Server/.env**
```
PORT=5000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
CLOUDINARY_CLOUD_NAME=your_cloudinary_name
CLOUDINARY_API_KEY=your_cloudinary_key
CLOUDINARY_API_SECRET=your_cloudinary_secret
PAYPAL_CLIENT_ID=your_paypal_client_id
```

**Client/.env**
```
VITE_API_URL=http://localhost:5000/api
```

4. **Start the development servers**

```bash
# Start backend
cd server && npm run dev

# Start frontend (in new terminal)
cd ../client && npm run dev
```

## 🎯 Usage

### Browsing Products
- Visit `http://localhost:5173` to browse products
- Use filters to search by category, brand, or price
- Click on products for detailed views

### Shopping Cart
- Add products to cart without login
- Login required for checkout
- View cart items and quantities

### Checkout
- Login/register required for checkout
- PayPal payment integration
- Order confirmation and tracking

### Admin Dashboard
- Access at `/admin/dashboard`
- Manage products, orders, and users
- Upload product images via Cloudinary

## 🔧 Development

### Available Scripts

**Root**
- `npm run dev` - Start both client and server
- `npm run build` - Build for production

**Client**
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build

**Server**
- `npm run dev` - Start development server with nodemon
- `npm start` - Start production server

## 📊 API Endpoints

### Authentication
- `POST /api/auth/register` - User registration
- `POST /api/auth/login` - User login
- `POST /api/auth/logout` - User logout

### Products
- `GET /api/shop/products` - Get all products
- `GET /api/shop/products/:id` - Get product by ID
- `POST /api/admin/products` - Add product (admin)
- `PUT /api/admin/products/:id` - Update product (admin)
- `DELETE /api/admin/products/:id` - Delete product (admin)

### Cart
- `GET /api/shop/cart/:userId` - Get user cart
- `POST /api/shop/cart/add` - Add item to cart
- `PUT /api/shop/cart/update` - Update cart item
- `DELETE /api/shop/cart/:userId/:productId` - Remove item from cart

### Orders
- `GET /api/shop/orders/:userId` - Get user orders
- `POST /api/shop/orders/create` - Create order
- `GET /api/admin/orders` - Get all orders (admin)

## 🧪 Testing

### Frontend Testing
```bash
cd client
npm run test
```

### Backend Testing
```bash
cd server
npm run test
```

## 🚀 Deployment

### Frontend (Vercel)
1. Push code to GitHub
2. Import project to Vercel
3. Set environment variables
4. Deploy

### Backend (Heroku)
1. Create Heroku app
2. Set environment variables
3. Deploy with Git

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- React community for excellent documentation
- Tailwind CSS team for the styling framework
- MongoDB team for the database solution
- PayPal for payment processing
- Cloudinary for image storage
