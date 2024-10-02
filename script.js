document.getElementById('refresh-button').addEventListener('click', fetchGoldPrice);

async function fetchGoldPrice() {
    const url = 'https://www.goldapi.io/api/XAU/INR';
    const apiKey = 'goldapi-68wsm1sg7597-io'; 

    try {
        const response = await fetch(url, {
            method: 'GET',
            headers: {
                'x-access-token': apiKey,
            },
        });
        
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        
        const data = await response.json();
        const goldPrice = data.price; // Assuming the API returns the price in a "price" field
        const gold_price_gram_24k = data.price_gram_24k;
        
        document.getElementById('gold-price').textContent = goldPrice.toFixed(2);
        document.getElementById('gold-24k').textContent = gold_price_gram_24k.toFixed(2);
    } catch (error) {
        console.error('Error fetching gold price:', error);
    }
}
fetchGoldPrice();
