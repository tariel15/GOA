//11) შექმენით მასივი [10, 20, 30]. JSX-ში map() გამოყენებით დააბრუნეთ ტექსტი ფორმატში "Index: X, Value: Y" თითოეული ელემენტისთვის
function IndexValueList() {
    const numbers = [10, 20, 30];

    return (
        <div>
            {
                numbers.map((value, index) => (
                    <p key={index}>
                        {`Index: ${index}, Value: ${value}`}
                    </p>
                ))
            }
        </div>
    );
}

export default IndexValueList;
