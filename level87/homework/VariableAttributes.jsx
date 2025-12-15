//7) შექმენით VariableAttributes კომპონენტი  შექმენით ცვლადი imageUrl სურათის ლინკით  დააბრუნეთ <img src={imageUrl} />  დააკვირდით როგორ მუშაობს ცვლადი JSX ატრიბუტში
function VariableAttributes() {
    const imageUrl = "https://via.placeholder.com/200";

    return <img src={imageUrl} alt="Example" />;
}

export default VariableAttributes;
