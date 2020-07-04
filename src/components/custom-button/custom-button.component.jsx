import React from "react";

import "./custom-button.styles.scss";

// props children = ce qu'on met entre les balises

const CustomButton = ({ children, isGoogleSignIn, ...otherProps }) => (
	<button
		className={`${isGoogleSignIn ? "google-sign-in" : ""} custom-button`}
		{...otherProps}
	>
		{children}
	</button>
);

export default CustomButton;
