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

    let subtotal=0;
    for(let i=0; i<cart.length; i++){
        let item = cart[i].item;
        let price= cart[i].price;
        let quantity= cart[i].quantity;
        let itemTotal=cart[i].subtotal;

        cartList.innerHTML += `<li>${i + 1}.<strong>${item}</strong>--> ${price} x ${quantity} =${itemTotal.toFixed(2)} </li>`;
        subtotal += itemTotal;
    }

    const discountPercent = parseFloat(document.getElementById('discount').value) || 0;
    const gstPercent = parseFloat(document.getElementById('gst').value) || 0;

    const discountAmount = (discountPercent/100)* subtotal;
    const afterDiscount = subtotal-discountAmount;

    const gstAmount = (gstPercent/100)*afterDiscount;
    const finalTotal = afterDiscount + gstAmount;

    document.getElementById('total').innerText= 
    `Subtotal: ${subtotal.toFixed(2)}\n`+
    `Discount: ${discountAmount.toFixed(2)}\n`+
    `GST: ${gstAmount.toFixed(2)}\n`+
    `Grand Total: ${finalTotal.toFixed(2)}`;
}
function clearInputs(){
    document.getElementById('item').value='';
    document.getElementById('price').value='';
    document.getElementById('quantity').value='';
    document.getElementById('discount').value='';
}

function clearCart(){
    cart=[];
    updateCart();
}