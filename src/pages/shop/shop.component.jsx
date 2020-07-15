import React from "react";
import { Route } from "react-router-dom";
// import { connect } from "react-redux";
// import CollectionPreview from "../../components/preview-collection/preview-collection.component";
import CollectionsOverview from "../../components/collections-overview/collections-overview.component";
import CollectionPage from "../collection/collection.component";
// import { createStructuredSelector } from "reselect";
// import { selectCollections } from "../../redux/shop/shop.selectors";

// on a accès a match et location car nested
const ShopPage = ({ match }) => {
	return (
		<div className='shop-page'>
			<Route exact path={`${match.path}`} component={CollectionsOverview} />
			<Route path={`${match.path}/:collectionId`} component={CollectionPage} />
		</div>
	);
};

// const mapStateToProps = createStructuredSelector({
// 	collections: selectCollections,
// });

// export default connect(mapStateToProps)(ShopPage);

export default ShopPage;
