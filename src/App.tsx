import React, {useEffect, useState} from 'react'
import './App.css'
import CartCount from "./components/CartCount.tsx";
import {BrowserRouter, Outlet, Route, Routes} from "react-router-dom";
import axios from "axios";
import ShopPage from "./pages/ShopPage.tsx";
import CartPage from "./pages/CartPage.tsx";
import Navigation from "./components/Navigation.tsx";


import {Box, Grid} from "@mui/material";


function App() {
    const [products, setProduct] = useState<Product[]>([])
    const [cart, setCart] = useState<Map<number, Object>>(loadCart())

    function loadData() {
        console.log("loading data")
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

    // // importer des produir

    // construire un carts
    const productToCart = (product: Product, quantity: number) => {
        let temp_cart = new Map(cart)
        console.log("product", product)
        console.log("quantity", quantity)

        let order = cart.get(product.id)
        if (order) {
            if (order.quantity + quantity > 0) {
                order.quantity = order.quantity + quantity
                temp_cart.set(product.id, order)
            } else
                temp_cart.delete(product.id)
        } else {
            temp_cart.set(product.id, {product: product, quantity: quantity})
        }
        setCart(temp_cart)
    }
    const viderCart = () => {
        setCart(new Map())
    }

    function loadCart(): Map<number, Object> {
        const cache = localStorage.getItem("cart")

        if (cache !== null) {
            return new Map(JSON.parse(cache))
        }
        return new Map()
    }

    useEffect(() => {
        const cache = localStorage.setItem("cart", JSON.stringify(Array.from(cart)))
    }, [cart]);

    if (products.length === 0) {
        return <h1>loading ... </h1>
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
