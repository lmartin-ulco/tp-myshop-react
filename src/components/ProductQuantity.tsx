import {Box, IconButton, Stack, Tooltip, Typography} from "@mui/material";
import {Minus, Plus, Trash} from "lucide-react";
import type {Product} from "../models/product.ts";

interface ProductQuantityProps {
    product: Product,
    quantity: number,
    toCart: (product: Product, quantity: number) => void
}

export default function ProductQuantity({product, quantity, toCart}: ProductQuantityProps) {
    return (
        <Stack
            direction="row"
            spacing={0.75}
            sx={{width: "100%", alignItems: "center", justifyContent: "center"}}
        >
            <Tooltip title="Retirer du panier">
                <span>
                    <IconButton
                        color="error"
                        size="small"
                        disabled={quantity === 0}
                        onClick={() => toCart(product, 0 - quantity)}
                    >
                        <Trash size={18}/>
                    </IconButton>
                </span>
            </Tooltip>
            <Tooltip title="Retirer 10">
                <span>
                    <IconButton
                        color="primary"
                        size="small"
                        disabled={quantity < 10}
                        onClick={() => toCart(product, -10)}
                    >
                        <Minus size={17}/>
                        <Typography component="span" variant="caption" sx={{fontWeight: 800}}>
                            10
                        </Typography>
                    </IconButton>
                </span>
            </Tooltip>
            <Tooltip title="Retirer 1">
                <span>
                    <IconButton
                        color="primary"
                        size="small"
                        disabled={quantity === 0}
                        onClick={() => toCart(product, -1)}
                    >
                        <Minus size={18}/>
                    </IconButton>
                </span>
            </Tooltip>
            <Box
                sx={{
                    minWidth: 38,
                    height: 34,
                    display: "grid",
                    placeItems: "center",
                    borderRadius: 1,
                    bgcolor: "background.default",
                    border: "1px solid",
                    borderColor: "divider",
                    fontWeight: 800,
                }}
            >
                {quantity}
            </Box>
            <Tooltip title="Ajouter 1">
                <IconButton color="primary" size="small" onClick={() => toCart(product, +1)}>
                    <Plus size={18}/>
                </IconButton>
            </Tooltip>
            <Tooltip title="Ajouter 10">
                <IconButton color="primary" size="small" onClick={() => toCart(product, +10)}>
                    <Plus size={17}/>
                    <Typography component="span" variant="caption" sx={{fontWeight: 800}}>
                        10
                    </Typography>
                </IconButton>
            </Tooltip>
        </Stack>
    )
}
