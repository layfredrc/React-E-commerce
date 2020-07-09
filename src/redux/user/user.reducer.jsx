const INITIAL_STATE = {
	currentUser: null,
};
// Fonction prenant le state et une action
// On vérifie si le state est initialisé ou pas
// Ensuite on regarde de quel type d'action il s'agit
// Si il s'agit de l'action SET CURRENT USER
// On retourne l'objet sinon on retourne le current state

const userReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case "SET_CURRENT_USER":
			return {
				...state,
				currentUser: action.payload,
			};

		default:
			return state;
	}
};

export default userReducer;
