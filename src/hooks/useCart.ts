import type {Product} from "../models/product.ts";
import  {useEffect, useState} from "react";

export default function useCart() {
    const [cart, setCart] = useState<Map<number, Object>>(loadCart())

    function loadCart(): Map<number, Object> {
        const cache = localStorage.getItem("cart")

        if (cache !== null) {
            return new Map(JSON.parse(cache))
        }
        return new Map()
    }

    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(Array.from(cart)))
    }, [cart]);

    const productToCart = (product: Product, quantity: number) => {
        let temp_cart = new Map(cart)

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

    return [cart,productToCart, viderCart]

}