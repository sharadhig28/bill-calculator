let cart=[];
function addItem(){
    const item = document.getElementById('item').value;
    const price = parseFloat(document.getElementById('price').value);
    const quantity = parseFloat(document.getElementById('quantity').value);
    const itemDiscount = parseFloat(document.getElementById('itemDiscount').value) || 0;
    if(!item || isNaN(price) || isNaN(quantity)){
        alert("please enter valid item,price,quantity.");
        return;
    }

    const discountedPrice = price - (price* itemDiscount/100);
    const subtotal = discountedPrice * quantity;

    cart.push({item,price,quantity,itemDiscount,subtotal });

    updateCart();
    clearInputs();
}
function updateCart(){
    const cartList = document.getElementById('cart');
    cartList.innerHTML = '';

    let subtotal=0;

    for(let i=0; i<cart.length; i++){
        let item = cart[i].item;
        let price= cart[i].price;
        let quantity= cart[i].quantity;
        let itemDiscount = cart[i].itemDiscount || 0;
        let discountedPrice = price-(price* itemDiscount/100);
        let itemTotal= (discountedPrice*quantity);

        cartList.innerHTML += `<li>${i + 1}. <strong>${item}</strong>--> ${price} x ${quantity} with ${itemDiscount}% discount =${itemTotal.toFixed(2)} </li>`;
        subtotal += itemTotal;
    }

    
    const gstPercent = parseFloat(document.getElementById('gst').value) || 0;
    const gstAmount = (gstPercent/100) * subtotal;
    const finalTotal = subtotal + gstAmount;

    document.getElementById('total').innerText= 
    `Subtotal: ${subtotal.toFixed(2)}\n`+
    `GST: ${gstAmount.toFixed(2)}\n`+
    `Grand Total: ${finalTotal.toFixed(2)}`;
}
function clearInputs(){
    document.getElementById('item').value='';
    document.getElementById('price').value='';
    document.getElementById('quantity').value='';
    document.getElementById('itemDiscount').value='';
}

function clearCart(){
    cart=[];
    updateCart();
}