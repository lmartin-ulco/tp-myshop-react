import {
    Box,
    Button,
    Card,
    CardActions,
    CardContent,
    CardHeader,
    CardMedia, Chip, Grid,
    IconButton,
    Paper,
    Stack, Typography
} from "@mui/material";
import {Minus, Plus, Trash} from "lucide-react";
import ProductQuantity from "../../src-temp/components/ProductQuantity.tsx";

interface ProductProps {
    product: Product
    quantity: number
    toChart: (product: Product, quantite: number) => void
}

export default function ProductLine({product, quantity, toCart}: ProductProps) {

    const total = product.price * quantity
    return (
        <>
            <Paper className="cart-line" elevation={0}>

                <Grid container className="cart-line__grip"/>
                <Grid size={1}>
                    <Box className="cart-line__image-wrap">
                        <img className="cart-line__image" src={product.image} alt={product.name}/>
                    </Box>
                </Grid>
                <Grid size={5}>
                    <Stack direction="column" spacing={1}>
                        <Typography>{product.title}</Typography>

                        <Stack direction="row" spacing={1}>
                            <Typography variant="body2" color="text.secondary">
                                {product.price.toFixed(2)} € l'unité
                            </Typography>
                        </Stack>
                    </Stack>
                </Grid>

                <Grid size={4}>
                    <Box className="cart-line__quantity">
                        <ProductQuantity product={product} quantity={quantity} toCart={toCart}/>
                    </Box>
                </Grid>
                <Grid size={2}>

                    {total.toFixed(2)} €
                </Grid>
                <Grid/>
            </Paper>
        </>
    )
}