//3) წინა Frontend-is გაკვეთილის მესამე საკლასო დავალებას დაუმატეთ კიდევ ერთი loading მდგომარეობა რომელიც თავიდან იქნება true (ესეიგი თავიდან მართლია რომ იტივრთება საიტი) და როდეასც მოხდება საიტის ჩატვირთვა (ანუ როცა api-იდან წამოღებული მონაცემებით გაანახლებთ ცარიელ products/info მდგომარეობის მნიშვნელობას) მაშინ setLoading(false) შეცვალეთ ჩატვირთვის მდგომარეობა და გახადეთ მცადრი. თუ loading მდგომაროების მნიშვნელობა ჭეშმარიტია მაშინ მხოლოდ ერთი div დაარენდრეთ ...Loading ტექსტითimport { useEffect, useState } from 'react'

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
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        async function fetchInfo() {
            const response = await fetch('https://fakestoreapi.com/products')
            const data = await response.json()
            setInfo(data)
            setLoading(false)
        }
        fetchInfo()
    }, [])

    if (loading) {
        return <div>...Loading</div>
    }

    return (
        <div className="products">
            {info.map((item) => (
                <Product key={item.id} product={item} />
            ))}
        </div>
    )
}

export default App
