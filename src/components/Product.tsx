import {Button, Card, CardActions, CardContent, CardHeader, CardMedia} from "@mui/material";

interface ProductProps {
    product: Product
    toChart :(product:Product,quantite:number)=>void
}

export default function Product({product,toChart}: ProductProps) {

    return (
        <>
            <Card>
                <CardHeader>eee
                    {product.name}
                </CardHeader>
                <CardMedia className={"product_image"} component="img" src={product.image} style={{width:'200px'}}></CardMedia>
                <CardContent>

                    €{product.price}
                </CardContent>
                <CardActions>
                    <Button size="small" variant="contained" onClick={()=>toChart(product,-1)}>-</Button>
                    <Button size="small" variant="contained" onClick={()=>toChart(product,+1)}>+</Button>
                </CardActions>
            </Card>
        </>
    )
}