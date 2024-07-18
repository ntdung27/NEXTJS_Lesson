import Dashboard from "@/pages/(admin)/dashboard/page";
import LayoutAdmin from "@/pages/(admin)/layout";
import ProductEditPage from "@/pages/(admin)/products/edit/page";
import ProductAddPage from "@/pages/(admin)/products/add/page";
import ProductManagementPage from "@/pages/(admin)/products/page";
import NotFoundPage from "@/pages/(website)/404/page";
import HomePage from "@/pages/(website)/home/page";
import LayoutWebsite from "@/pages/(website)/layout";
import ProductPage from "@/pages/(website)/products/page";
import { Route, Routes } from "react-router-dom";

const Router = () => {
    return (
        <Routes>
            <Route path="/" element={<LayoutWebsite />}>
                <Route index element={<HomePage />} />
                <Route path="products" element={<ProductPage />} />
            </Route>
            <Route path="admin" element={<LayoutAdmin />}>
                <Route index element={<Dashboard />} />
                <Route path="products" element={<ProductManagementPage />} />
                <Route path="products/add" element={<ProductAddPage />} />
                <Route path="products/:id/edit" element={<ProductEditPage />} />
            </Route>
            <Route path="*" element={<NotFoundPage />} />
        </Routes>
    );
};
export default Router;
