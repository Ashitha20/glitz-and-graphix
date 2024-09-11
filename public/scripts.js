function addToWishlist(item) {
    const wishlist = document.getElementById('wishlist-items');
    const listItem = document.createElement('li');
    listItem.innerText = item;
    wishlist.appendChild(listItem);

    // Optionally, send wishlist item to the server
    fetch('/wishlist', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ item: item }),
    }).catch(error => console.error('Error:', error));
}
