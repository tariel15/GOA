// 3) useEffect-ის დახმარებით და async/await წამოიღეთ ინფრომაცია მოცემული api-დან და გამოიტანეთ თითოეული პროდუქტი რომელსაც დაარენდრებთ ცალკე Product კომპონენტით, კომპონენტმა უნდა მიიღოს ობიექტი prop-ად

// https://fakestoreapi.com/products
import { useEffect, useState } from 'react'

const ratingStyles = {
    display: 'flex',
    gap: '10px'
}

function Product({ product }) {
    return (
        <div className="product">
            <h3>{product.title}</h3>
            <p>{product.description}</p>
            <p>Price: ${product.price}</p>
            <p>Category: {product.category}</p>
            <div style={ratingStyles}>
                <p>{product.rating.rate}</p>
                <p>({product.rating.count})</p>
            </div>
        </div>
    )
}

function App() {
    const [info, setInfo] = useState([])

    useEffect(() => {
        async function fetchInfo() {
            const response = await fetch('https://fakestoreapi.com/products')
            const data = await response.json()
            setInfo(data)
        }
        fetchInfo()
    }, [])

    return (
        <div className="products">
            {info.map((item) => (
                <Product key={item.id} product={item} />
            ))}
        </div>
    )
}

export default App