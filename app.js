function handelCount(product, isIncrease) {
    const productCount = getInputValue(product);
    let productNewValue = productCount;
    if (isIncrease == true) {
        productNewValue = productCount + 1;
    }
    if (isIncrease == false && productCount) {
        productNewValue = productCount - 1;
    }
    document.getElementById(product + "-count").value = productNewValue;
    productTotal = 0;
    if (product == 'shirt') {
        productTotal = productNewValue * 1156;
    }
    if (product == 'jacket') {
        productTotal = productNewValue * 1356;
    }
    if (product == 'pants') {
        productTotal = productNewValue * 956;
    }

    document.getElementById(product + '-amount').innerText = '$' + productTotal + '.00';
    calculateTotal();
}
function calculateTotal() {
    const shirtCount = getInputValue('shirt');
    const jacketCount = getInputValue('jacket');
    const pantsCount = getInputValue('pants');

    const totalPrice = shirtCount * 1156 + jacketCount * 1356 + pantsCount * 956;
    document.getElementById('total-price').innerText = 'USD' + ' ' + totalPrice;

    const discount = Math.round(totalPrice * 0.1);
    document.getElementById('discount').innerText = 'USD' + ' ' + discount;


    const grandTotal = totalPrice - discount;
    let endTotal = grandTotal;
    document.getElementById('grand-total').innerText = '$' + ' ' + endTotal;


    // coupon();
}


function getInputValue(product) {
    const productInput = document.getElementById(product + '-count');
    const productCount = parseInt(productInput.value);
    return productCount;
}

// function coupon() {
//     const couponInput = document.getElementById('input-coupon').value;
//     document.getElementById('total-price').innerText =totalPrice;
//     if (couponInput == "hero") {
//         const discount = totalPrice-1000;
//         document.getElementById('discount').innerText = 'USD' + ' ' + discount;
//     }

// }

