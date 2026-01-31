
function Product(props) {
    return (
        <div>
            <p>პროდუქტის სახელი: {props.productName}</p>
            {/* productName არის props-ით მიღებული მნიშვნელობა */}

            <p>ფასი: {props.price} ₾</p>
            {/* price არის props-ით მიღებული მნიშვნელობა */}
        </div>
    );
}

export default Product;
