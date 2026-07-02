import React, {useEffect, useState} from 'react'
import './App.css'
import CartCount from "./components/CartCount.tsx";
import {BrowserRouter, Outlet, Route, Routes} from "react-router-dom";
import axios from "axios";
import ShopPage from "./pages/ShopPage.tsx";
import CartPage from "./pages/CartPage.tsx";
import Navigation from "./components/Navigation.tsx";


import {Box, CircularProgress, Grid, Stack, Typography} from "@mui/material";
import useCart from "./hooks/useCart.ts";
import type {Product} from "./models/product.ts";


function App() {
    const [products, setProduct] = useState<Product[]>([])
    const [cart, productToCart,viderCart] = useCart()

    function loadData() {
        let data = axios.get('https://fakestoreapi.com/products/').then((response) => {
                let prods = []
                for (let dataProduct of response.data) {
                    prods.push(dataProduct)
                }
                setProduct(prods)
            }
        ).catch((e) => {
            console.log(e)
        })
    }

    useEffect(() => {
        loadData()
    }, [])

    if (products.length === 0) {
        return  <Box className="loading">
            <Stack spacing={2} sx={{alignItems: "center"}}>
                <CircularProgress/>
                <Typography variant="h6" color="text.secondary">
                    Chargement de la boutique...
                </Typography>
            </Stack>
        </Box>
    }
    return (
        <>
            <Box className="App">
                <BrowserRouter>
                    <Navigation/>
                    <Grid container spacing={2}>

                        <Grid size={8}>

                            <h1> Shopping ! </h1>
                        </Grid>
                        <Grid  size={4}>
                            <CartCount cart={cart} viderCart={viderCart}/>
                        </Grid>
                    </Grid>
                    <Routes>
                        <Route path="/" element={<Navigation/>}/>
                        <Route index element={<ShopPage products={products} cart={cart} toCart={productToCart}/>}/>
                        <Route path={ShopPage.PATH}
                               element={<ShopPage products={products} cart={cart} toCart={productToCart}/>}/>
                        <Route path={CartPage.PATH}
                               element={<CartPage products={products} cart={cart} toCart={productToCart}/>}/>
                    </Routes>

                    <Outlet/>

                </BrowserRouter>

            </Box>
        </>
    )
}

export default App
