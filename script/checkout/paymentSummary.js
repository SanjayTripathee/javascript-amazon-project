import {cart} from '../../data/cart.js';
import { getProduct, products } from '../../data/products.js';
import { deleveryOptions, getDeleveryOption } from '../../data/deleveryOption.js';
import {formatCurrency} from '../utility/money.js';


export function renderPaymentSummary(){

    let productPriceCents = 0;
    let shippingPriceCents = 0;
   
    cart.forEach((cartIteam)=>{
    let product =   getProduct(cartIteam.productId);
   productPriceCents += product.priceCents * cartIteam.quantity;

    let deleveryOption =  getDeleveryOption(cartIteam.deleveryOptionId);
     shippingPriceCents += deleveryOption.priceCents;
   });
   const totalBeforeTaxCents = productPriceCents + shippingPriceCents;
   const taxCents = totalBeforeTaxCents * 0.1; //10% tax=10/100=>0.1
   const totalCents = totalBeforeTaxCents + taxCents ;

  const paymentSummaryHTML = `
    <div class="payment-summary-title">
    Order Summary
    </div>

    <div class="payment-summary-row">
    <div>Items (3):</div>
    <div class="payment-summary-money">
    $${formatCurrency(productPriceCents)}</div>
    </div>

    <div class="payment-summary-row">
    <div>Shipping &amp; handling:</div>
    <div class="payment-summary-money">
    $${formatCurrency(shippingPriceCents)}</div>
    </div>

    <div class="payment-summary-row subtotal-row">
    <div>Total before tax:</div>
    <div class="payment-summary-money">
    $${formatCurrency(totalBeforeTaxCents)}</div>
    </div>

    <div class="payment-summary-row">
    <div>Estimated tax (10%):</div>
    <div class="payment-summary-money">
    $${formatCurrency(taxCents)}</div>
    </div>

    <div class="payment-summary-row total-row">
    <div>Order total:</div>
    <div class="payment-summary-money">
     $${formatCurrency(totalCents)}</div>
    </div>

    <button class="place-order-button button-primary">
    Place your order
    </button>
   `;

   document.querySelector('.js-payment-summary').innerHTML = paymentSummaryHTML;
}