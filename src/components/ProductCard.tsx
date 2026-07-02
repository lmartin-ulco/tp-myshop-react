import {Box, Button, Card, CardActions, CardContent, CardHeader, CardMedia} from "@mui/material";
import ProductQuantity from "./ProductQuantity.tsx";

interface ProductProps {
    product: Product
    quantity: number
    toChart: (product: Product, quantite: number) => void
}

export default function ProductCard({product, quantity, toCart}: ProductProps) {

    return (
        <>
            <Card className="product-card" elevation={0}>
                <Box className="product-card__media">
                    <CardMedia className={"product_image"} component="img" src={product.image}></CardMedia>
                    <div className="product_price_badge">{product.price} € </div>
                </Box>
                <CardContent>
                    {product.title}
                </CardContent>
                <CardActions>
                    <ProductQuantity product={product} quantity={quantity} toCart={toCart}/>
                </CardActions>
            </Card>
        </>
    )
}