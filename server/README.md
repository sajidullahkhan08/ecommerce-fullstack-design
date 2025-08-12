# 🛍️ Brand E-Commerce Backend

Node.js and Express-based backend API for the Brand e-commerce platform.

## 🚀 Features

- **RESTful API**: Clean and scalable API architecture
- **Authentication**: JWT-based authentication system
- **Database**: MongoDB with Mongoose ODM
- **File Upload**: Cloudinary integration for product images
- **Payment Processing**: PayPal integration for secure payments
- **Admin Controls**: CRUD operations for products and orders

## 🛠️ Tech Stack

- **Node.js** with Express
- **MongoDB** with Mongoose
- **JWT** for authentication
- **Cloudinary** for image storage
- **PayPal SDK** for payments
- **Multer** for file uploads

## 📁 Project Structure

```
server/
├── controllers/
│   ├── admin/           # Admin controllers
│   ├── auth/            # Authentication controllers
│   ├── common/          # Shared controllers
│   └── shop/            # Shopping controllers
├── models/              # Mongoose models
├── routes/              # Express routes
├── helpers/             # Utility functions
├── server.js            # Main server file
├── package.json         # Dependencies
└── .env.example         # Environment variables template
```

## 🚀 Quick Start

### Prerequisites
- Node.js 16+
- MongoDB Atlas account
- Cloudinary account
- PayPal developer account

### Installation
```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Start production server
npm start
```

### Environment Variables
Create `.env` file:
```
PORT=5000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
CLOUDINARY_CLOUD_NAME=your_cloudinary_name
CLOUDINARY_API_KEY=your_cloudinary_key
CLOUDINARY_API_SECRET=your_cloudinary_secret
PAYPAL_CLIENT_ID=your_paypal_client_id
```

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

### Reviews
- `GET /api/shop/reviews/:productId` - Get product reviews
- `POST /api/shop/reviews/add` - Add review
- `PUT /api/shop/reviews/:id` - Update review
- `DELETE /api/shop/reviews/:id` - Delete review

### Search
- `GET /api/shop/search` - Search products
- `GET /api/shop/search/suggestions` - Search suggestions

## 🎯 Database Models

### Product
```javascript
{
  image: String,
  title: String,
  description: String,
  category: String,
  brand: String,
  price: Number,
  salePrice: Number,
  totalStock: Number,
  averageReview: Number,
  timestamps: true
}
```

### User
```javascript
{
  userName: String,
  email: String,
  password: String,
  role: String,
  timestamps: true
}
```

### Cart
```javascript
{
  userId: ObjectId,
  items: [{
    productId: ObjectId,
    quantity: Number
  }],
  timestamps: true
}
```

### Order
```javascript
{
  userId: ObjectId,
  cartId: ObjectId,
  addressId: ObjectId,
  orderStatus: String,
  paymentMethod: String,
  paymentStatus: String,
  totalAmount: Number,
  orderDate: Date,
  orderUpdateDate: Date,
  paymentId: String,
  payerId: String,
  timestamps: true
}
```

## 🔧 Development

### Available Scripts
- `npm run dev` - Start development server with nodemon
- `npm start` - Start production server
- `npm run test` - Run tests

### Middleware
- **CORS**: Cross-origin resource sharing
- **Helmet**: Security headers
- **Morgan**: HTTP request logging
- **Multer**: File upload handling

### Error Handling
- **Centralized error handling**
- **Validation middleware**
- **Async error catching**

## 🧪 Testing

```bash
# Run tests
npm run test

# Run tests in watch mode
npm run test:watch
```

## 🚀 Deployment

### Heroku
1. Create Heroku app
2. Set environment variables
3. Deploy with Git

### Railway
1. Connect GitHub repository
2. Set environment variables
3. Deploy automatically

## 🔒 Security

- **JWT tokens** for authentication
- **Password hashing** with bcrypt
- **Input validation** and sanitization
- **Rate limiting** for API endpoints
- **CORS configuration**

## 🤝 Contributing

1. Fork the repository
2. Create feature branch
3. Make changes
4. Test thoroughly
5. Submit pull request
