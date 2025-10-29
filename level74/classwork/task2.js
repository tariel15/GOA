const productconteiner = document.getElementById("productscontainere");
const productcr =document.getElementById("productcr");
const products = [
    {name: "product1", price: 100, desc: "ery tr4yrtyrtytry rtytryr"},
    {name: "product2", price: 200, desc: " eryert yrty rtyrrtyrt"},
    {name: "product3", price: 300, desc: " eryerttyeryetyry r"},
    {name: "product4", price: 400, desc: "eryeryert yertytryrt"},
]

for(let i = 0; i < products.length; i++) {
    let curentproduct =products[1];
    let productDiv =document.createElement("div");
    let productTitle=document.createElement("h2");

    productsTitle.textcontent= currentproduct.name;
    let productDesc=textcontent=currentproduct.name;
    let price =document.createElement("p");
    price.textcontent=`price ${currentproduct.price}`;

    let addBtn=document.createElement("button");
    addBtn.textContent="add to cart";

    let producting=document.createElement("img");
    producting.style.with="200px";
    producting.style.height="200px";

    productDiv.appendChild(productTitle);
    productDiv.appendChild(productDesc);
    productDiv.appendChild(price);
    productDiv.appendChild(productImg);
    productDiv.appendChild(addBtn);

    productDiv.style.border="1px solid grey";

    productconteiner.appendChild(productDiv);

}