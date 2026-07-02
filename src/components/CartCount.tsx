import React from "react";
import {Badge, Box, Button, IconButton, Typography} from "@mui/material";
import {ShoppingCart, Trash} from "lucide-react";


interface CartProps {
    cart: Cart
    viderCart: () => void
}

export default function CartCount({cart, viderCart}: CartProps) {


    function getCartQuantity() {
        return Array.from(cart.values()).reduce((acc, curr) => acc + curr.quantity, 0)
    }

    const quantity = getCartQuantity()
    return (
        <>
            <Box className="cart-summary">

                <Badge badgeContent={quantity} color="primary" showZero>
                    <ShoppingCart size={26}/>
                </Badge>
                <Box className="cart-summary-content">

                    Panier {quantity} {quantity > 1 ? "produits" : "produit"}

                </Box>

                <IconButton variant="contained" onClick={viderCart}> <Trash/></IconButton>
            </Box>
        </>

    )
}