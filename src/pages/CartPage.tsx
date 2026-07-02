import {Box, Grid, Paper, Stack, Typography} from "@mui/material";
import Product from "../components/Product.tsx";
import ProductLine from "../components/ProductLine.tsx";
import {ReceiptText, ShoppingBasket} from "lucide-react";

interface CartPageProps {
    products: Product[];
    cart: Map<Product, number>;
    toCart: (product: Product, quantity: number) => void;
}

export default function CartPage({products, cart, toCart}: CartPageProps) {
    console.log(toCart);

    const orders = Array.from(cart.values());
    const total = orders.reduce((acc, order) => acc + order.product.price * order.quantity, 0);

    if (orders.length === 0) {
        return (
            <Paper className="empty-cart" elevation={0}>
                <Box className="empty-cart__icon">
                    <ShoppingBasket size={30}/>
                </Box>
                <h5>
                    Votre panier est vide
                </h5>
                Ajoutez des produits depuis la boutique pour les retrouver ici.
            </Paper>
        )
    }

    return (

        <>
            <Box style={{marginBottom: 20}}>
                <Grid container spacing={2}>
                    {Array.from(cart.values()).map((order) =>
                        <Grid size={12} key={order.product.id}>
                            <ProductLine product={order.product} quantity={order.quantity || 0} toCart={toCart}/>
                        </Grid>)
                    }
                </Grid>
            </Box>


            <Paper className="cart-total" elevation={0}>
                <Grid container>
                    <Grid size={10}>
                        Total commande
                    </Grid>
                    <Grid size={2}>
                        {total.toFixed(2)} €
                    </Grid>
                </Grid>
            </Paper>

        </>
    )
}
CartPage.PATH = "/CartPage";