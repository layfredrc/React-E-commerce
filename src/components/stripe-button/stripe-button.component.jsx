import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
	const priceForStripe = price * 100;
	const publishableKey =
		"pk_test_51H5JBsK5dirIcv5jeOkBQM05cZ2TYyzrHpHZBQEzTSZsXiOepHopx9aDceIEra1N6uYVHLljTmbN47kurVHKFK6800eZdtM92W";

	const onToken = (token) => {
		console.log(token);
		alert("Payment Succesful");
	};

	return (
		<StripeCheckout
			label='Pay Now'
			name='HypeTalk Clothing Ltd.'
			billingAddress
			shippingAddress
			image='https://svgshare.com/i/CUz.svg'
			description={`Your total is $${price}`}
			amount={priceForStripe}
			panelLabel='PayNow'
			token={onToken}
			stripeKey={publishableKey}
		/>
	);
};

export default StripeCheckoutButton;
