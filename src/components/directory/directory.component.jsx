import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { selectDirectorySections } from "../../redux/directory/directory.selectors";
import "./directory.styles.scss";
import MenuItem from "../menu-items/menu-item.component";

const Directory = ({ sections }) => {
	return (
		// <div className="directory-menu">
		// 	{this.state.sections.map(({ title, imageUrl, id, size }) => (
		// 		<MenuItem key={id} title={title} size={size} imageUrl={imageUrl} />
		// 	))}
		// </div>

		<div className='directory-menu'>
			{sections.map(({ id, ...otherSectionProps }) => (
				<MenuItem key={id} {...otherSectionProps} />
			))}
		</div>
	);
};

const mapStateToProps = createStructuredSelector({
	sections: selectDirectorySections,
});

export default connect(mapStateToProps)(Directory);
