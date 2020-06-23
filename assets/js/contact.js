   if(window.location.href == "http://localhost/wp/seniors-veteran-couples-plan/"){

 window.addEventListener("DOMContentLoaded", function() {


    // get the form elements defined in your form HTML above
    
    var form = document.getElementById("seniors_form");
    var button = document.getElementById("seniors_page_button");
    var status = document.getElementById("contact-status");

    // Success and Error functions for after the form is submitted
    
    function success() {
      form.reset();
      button.style = "display: none ";
      status.innerHTML = "You'll Now Be Redirected to Stripe.com For Secure Payment.";
    }

    function error() {
      status.innerHTML = "Oops! There was a problem.";
    }

    // handle the form submission event

    form.addEventListener("submit", function(ev) {
      ev.preventDefault();

      Swal.fire({
  title: '<strong style="font-size:1.4em">DISCLOSURES</strong>',
  icon: 'info',
  html:
    '<b>Please read the terms below carefully: </b>, ' +
    '<ol><li>I acknowledge that the person responsible for the billing is the Primary.</li><li>I acknowledge and agrees the price paid today is a discounted price for 1 year of service.</li><li>I understand that at no time will Simply TeleMed or its associate request or require a SSN for the Primary or Family Members.</li><li>I accept the terms of service and well and the refund policy as outlined.</li><li>I consent to the use of my information for Marketing purposes that respects state and federal laws.</li><ol>' +
    '',
  showCancelButton: true,
  focusConfirm: true,
 width: 600,
  padding: '3em',
  confirmButtonText:
    'Confirm and Continue',
}).then((result) => {
  if (result.value) {
 var stripe = Stripe('pk_live_DKxmRp3iMVOQ8JcCCujgltje');
stripe.redirectToCheckout({
  lineItems: [{
    // Replace with the ID of your price
    price: 'price_1GwfPHLWr5L0pI6ergBE5jWS',
    quantity: 1,
  }],
  mode: 'subscription',
  successUrl: 'https://modalert.site/go/payment.html',
  cancelUrl: 'https://modalert.site/go/payment-return.html',
}).then(function (result) {
  // If `redirectToCheckout` fails due to a browser or network
  // error, display the localized error message to your customer
  // using `result.error.message`.
});
  }
})


      var data = new FormData(form);
      ajax(form.method, form.action, data, success, error);
    });


  });
  
  // helper function for sending an AJAX request

  function ajax(method, url, data, success, error) {
    var xhr = new XMLHttpRequest();
    xhr.open(method, url);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = function() {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        success(xhr.response, xhr.responseType);
      } else {
        error(xhr.status, xhr.response, xhr.responseType);
      }
    };
    xhr.send(data);
  }

}