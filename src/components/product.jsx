"use client"

import Link from "next/link"
import { useContext } from "react"
import { cartContext } from "../context/CartContext"
export default function Product({product}){
    const {Addtocart} = useContext(cartContext)
    return (
        <div className="product-item">
            <img src={product.image} alt="" />

            <h2>{product.title}</h2>

            <p>{product.price}</p>

            <button onClick={()=>{
                alert("product added" + product.title)
                Addtocart(product)
            }}>Add to card</button>

            <Link href={`/${product.id}`}>VEIW more</Link>
        </div>
    )
}