import Link from "next/link"
export async function generateMetadata({params}){
    let {id} = await params
    let respons = await fetch(`https://fakestoreapi.com/products/${id}`)
    let product = await respons.json()
    return {
        title: product.title,
        description: product.description,
        openGraph: {
            title: product.title,
            description: product.description,
        }
    }
}

export default async function ProductDetail({params}){
  let {id} = await params
  let respons = await fetch(`https://fakestoreapi.com/products/${id}`)
  let product = await respons.json()
return(
    <div className="product-detail">
        <img src={product.image} alt="" />
        <h2>{product.title}</h2>
        <h4>{product.description}</h4>
        <h5>{product.rating.rate}</h5>
        <p>{product.price}</p>
        <Link href="/">Back to shop</Link>
    </div>
)
}