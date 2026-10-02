"use client"

import { createContext, useEffect, useState } from "react"

export const cartContext = createContext()

export function CartPriovider({ children }) {
    const [cart, setcart] = useState([])
    const [isLoaded, setIsLoaded] = useState(false)

    // خواندن از localStorage
    useEffect(() => {
        const savedCart = localStorage.getItem("cart")

        console.log("localStorage:", savedCart)

        if (savedCart) {
            setcart(JSON.parse(savedCart))
        }

        setIsLoaded(true)
    }, [])

    // ذخیره در localStorage
    useEffect(() => {
        if (!isLoaded) return

        console.log("saving:", cart)

        localStorage.setItem("cart", JSON.stringify(cart))
    }, [cart, isLoaded])

    function Addtocart(product) {
        setcart(prev => {
            const selectedProduct = prev.find(
                target => target.id == product.id
            )

            if (!selectedProduct) {
                return [
                    ...prev,
                    {
                        ...product,
                        quantity: 1
                    }
                ]
            }

            return prev.map(target =>
                target.id == product.id
                    ? {
                        ...target,
                        quantity: target.quantity + 1
                    }
                    : target
            )
        })
    }

    function removeCart(productId) {
        setcart(prev =>
            prev.filter(item => item.id != productId)
        )
    }

    function UpdateQuantity(productID, newQuantity) {
        setcart(prev =>
            prev.map(item =>
                item.id == productID
                    ? {
                        ...item,
                        quantity: newQuantity
                    }
                    : item
            )
        )
    }

    const countItem = cart.reduce(
        (total, item) => total + item.quantity,
        0
    )

    function getTotalprice() {
        let total = 0

        cart.forEach(item => {
            total += item.quantity * item.price
        })

        return total
    }

    return (
        <cartContext.Provider
            value={{
                cart,
                Addtocart,
                removeCart,
                UpdateQuantity,
                countItem,
                getTotalprice
            }}
        >
            {children}
        </cartContext.Provider>
    )
}