const form = document.getElementById("cryptoForm");
const input = document.getElementById("cryptoInput");
const result = document.getElementById("result");
async function fetchCrypto(cryptoName) {
    const url = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=${cryptoName}`;
    try {
        const response = await fetch(url);
        const data = await response.json();

        return data;
    } catch (err) {
        console.error("Error fetching API:", err);
        return null;
    }
}

form.addEventListener("submit", async (e) => {
    e.preventDefault();
    result.innerHTML = "";

    const crypto = input.value.trim().toLowerCase();
    if (!crypto) {
        result.innerHTML = `<p class="error">Please enter a crypto name!</p>`;
        return;
    }
    const data = await fetchCrypto(crypto);
    if (!data || data.length === 0) {
        result.innerHTML = `<p class="error">Crypto not found!</p>`;
        return;
    }
    const coin = data[0];

    const html = `
        <p><strong>Name:</strong> ${coin.name}</p>
        <p><strong>Price:</strong> $${coin.current_price}</p>
        <p><strong>24h Change:</strong> ${coin.price_change_percentage_24h}%</p>
        <img src="${coin.image}" width="60">
    `;

    result.innerHTML = html;
});
