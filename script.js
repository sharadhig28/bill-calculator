let cart=[];
function addItem(){
    const item = document.getElementById('item').value;
    const price = parseFloat(document.getElementById('price').value);
    const quantity = parseFloat(document.getElementById('quantity').value);

    if(!item || isNaN(price) || isNaN(quantity)){
        alert("please enter valid item,price,quantity.");
        return;
    }

    const subtotal = price * quantity;
    cart.push({item,price,quantity,subtotal });

    updateCart();
    clearInputs();
}
function updateCart(){
    const cartList = document.getElementById('cart');
    cartList.innerHTML = '';
    let total=0;

    for(let i=0; i<cart.length; i++){
        let item = cart[i].item;
        let price= cart[i].price;
        let quantity= cart[i].quantity;
        let subtotal=cart[i].subtotal;

        cartList.innerHTML += "<li>" + item + ":$" + price + "x" + quantity + "=$" + subtotal.toFixed(2) + "</li>";
        total += subtotal;
    }
    document.getElementById('total').innerText= "GRAND TOTAL: $" + total.toFixed(2);
}
function clearInputs(){
    document.getElementById('item').value='';
    document.getElementById('price').value='';
    document.getElementById('quantity').value='';
}