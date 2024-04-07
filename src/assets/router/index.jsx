import { createBrowserRouter } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute";
import Layout from "../components/Layout/Layout";
import ProductsSection from "../components/ProductsSection/ProductsSection";
import Cart from "../components/Cart/Cart";
import Login from "../components/Login/Login";
import ProductDetails from "../components/ProductDetails/ProductDetails";
import NotFound from "../components/NotFound/NotFound";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        errorElement: <NotFound />,
        children: [
            {
                children: [
                    { 
                        path: "/",
                        element: <ProductsSection />
                    },
                    {
                        path: "/product/:productId",
                        element: (
                            <ProtectedRoute>
                                <ProductDetails />
                            </ProtectedRoute>
                        )
                    },
                    {
                        path: "/cart",
                        element: (
                            <ProtectedRoute>
                                <Cart />
                            </ProtectedRoute>
                        )
                    },
                    {
                        path: "/login",
                        element: <Login />
                    }
                ]
            }
        ]
    }
]);