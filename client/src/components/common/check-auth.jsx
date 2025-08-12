import { Navigate, useLocation } from "react-router-dom";

function CheckAuth({ isAuthenticated, user, children }) {
  const location = useLocation();

  console.log(location.pathname, isAuthenticated);

  // Allow public access to shop pages
  const publicShopRoutes = [
    "/shop/home",
    "/shop/listing", 
    "/shop/search"
  ];

  const isPublicShopRoute = publicShopRoutes.some(route => 
    location.pathname === route || location.pathname.startsWith(route)
  );

  // Allow public access to root
  if (location.pathname === "/") {
    return <Navigate to="/shop/home" />;
  }

  // Allow public access to shop routes
  if (isPublicShopRoute) {
    return <>{children}</>;
  }

  // Allow access to auth pages
  if (location.pathname.includes("/login") || location.pathname.includes("/register")) {
    if (isAuthenticated) {
      if (user?.role === "admin") {
        return <Navigate to="/admin/dashboard" />;
      } else {
        return <Navigate to="/shop/home" />;
      }
    }
    return <>{children}</>;
  }

  // Protect admin routes
  if (location.pathname.includes("/admin")) {
    if (!isAuthenticated) {
      return <Navigate to="/auth/login" />;
    }
    if (user?.role !== "admin") {
      return <Navigate to="/unauth-page" />;
    }
  }

  // Protect authenticated-only shop routes (checkout, account, etc.)
  if (location.pathname.includes("/shop/checkout") || 
      location.pathname.includes("/shop/account") ||
      location.pathname.includes("/shop/paypal-return") ||
      location.pathname.includes("/shop/payment-success")) {
    if (!isAuthenticated) {
      return <Navigate to="/auth/login" state={{ from: location }} />;
    }
  }

  return <>{children}</>;
}

export default CheckAuth;
