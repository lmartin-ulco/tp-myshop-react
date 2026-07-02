import {useOutletContext} from "react-router-dom";
import {Grid} from "@mui/material";
import ProductCard from "../components/ProductCard.tsx";

interface ShopPageProps {
    products: Product[];
    cart: Map<Product, number>;
    toCart: (product: ProductCard, quantity: number) => void;
}
export default function ShopPage({ products,cart, toCart  }: ShopPageProps)    {
    return(
        <>
            <Grid container spacing={2} >
                {products.map((item, i) => <Grid size={3} key={i}  >  <ProductCard  product={item} quantity={cart.get(item.id)?.quantity || 0} toCart={toCart}/></Grid>)}
            </Grid>
        </>
    )
}
ShopPage.PATH = "/ShopPage";