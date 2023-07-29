import { addProduct, deleteProduct, getProducts, updateProduct } from "@/actions/product";
import { useAppDispatch, useAppSelector } from "@/app/hook";
import { useEffect } from "react";
import { Button } from "..";
import { add } from "@/slices/Cart";

const ProductList = () => {
    const dispatch = useAppDispatch();
    const { products, isLoading, error } = useAppSelector((state: any) => state.products);
    useEffect(() => {
        dispatch(getProducts());
    }, [dispatch]);

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>{error}</div>;
    return (
        <div>
            {products?.map((item: any) => (
                <div key={item.id}>
                    {item.name}
                    <Button
                        type="primary"
                        onClick={() =>
                            // dispatch({ type: "cart/add", payload: { ...item, quantity: 1 } })
                            dispatch(add({ ...item, quantity: 1 }))
                        }
                    >
                        Add to cart
                    </Button>
                </div>
            ))}
            <div className="my-4 flex space-x-4 justify-center">
                <Button type="primary" onClick={() => dispatch(addProduct({ name: "Product C" }))}>
                    Add
                </Button>
                <Button
                    type="primary"
                    onClick={() => dispatch(updateProduct({ name: "Product C updated", id: 3 }))}
                >
                    Update
                </Button>
                <Button type="danger" onClick={() => dispatch(deleteProduct(3))}>
                    Delete
                </Button>
            </div>
        </div>
    );
};

export default ProductList;
