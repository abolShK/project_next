"use client"
import { cartContext } from "../../context/CartContext"
import { useContext } from "react"

export default function Clientfile(){
    let{cart , removeCart , UpdateQuantity, getTotalprice} = useContext(cartContext)
    return (
        <div className="cart">
            <h1>Cart item</h1>
            {cart.length == 0 ? <p>anything</p> :
  
                cart.map((product)=>(
                    <div key={product.id}>
                        
                        <img src={product.image} />
                        <div>
                            <h2>{product.title}</h2>
                            <p>{product.price}</p>
                            <input type="number" value={product.quantity} readOnly min={1}
                            onChange={()=>UpdateQuantity(product.id , Number(event.target.value))}
                            />
                            <button onClick={()=>{
                                removeCart(product.id)
                            }}>Remove cart</button>
                        </div>
                    </div>
                ))
            }
            <div>
                <h2>
                    total price : {getTotalprice().toFixed(2)} 
                </h2>
            </div>
        </div>
    )
}