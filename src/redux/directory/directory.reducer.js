const INITIAL_STATE = {
	sections: [
		{
			title: "hats",
			imageUrl:
				"https://image-cdn.hypb.st/https%3A%2F%2Fhypebeast.com%2Fwp-content%2Fblogs.dir%2F11%2Ffiles%2F2019%2F03%2Fsupreme-the-north-face-nouvelle-collaboration-printemps-2019-lookbook-bob.jpg?quality=95&w=1170&cbr=1&q=90&fit=max",
			id: 1,
			linkUrl: "shop/hats",
		},
		{
			title: "jackets",
			imageUrl:
				"https://images.unsplash.com/photo-1514281427873-10a6c9733091?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1019&q=80",
			id: 2,
			linkUrl: "shop/jackets",
		},
		{
			title: "sneakers",
			imageUrl: "https://i.ibb.co/0jqHpnp/sneakers.png",
			id: 3,
			linkUrl: "shop/sneakers",
		},
		{
			title: "womens",
			imageUrl:
				"https://medias.spotern.com/spots/w640/340/340109-1592641344.jpg",
			size: "large",
			id: 4,
			linkUrl: "shop/womens",
		},
		{
			title: "mens",
			imageUrl:
				"https://image-cdn.hypb.st/https%3A%2F%2Fhypebeast.com%2Fwp-content%2Fblogs.dir%2F11%2Ffiles%2F2020%2F01%2Fdior-jordan-travis-scott-collection-apparel-photos-sortie-0.jpg?w=960&cbr=1&q=90&fit=max",
			size: "large",
			id: 5,
			linkUrl: "shop/mens",
		},
	],
};

const directoryReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		default:
			return state;
	}
};

export default directoryReducer;
