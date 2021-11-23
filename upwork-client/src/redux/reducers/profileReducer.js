import initialState from "../../utils/newProfile";

export default function profileReducer(state = initialState, action) {
  switch (action.type) {
    case "LOAD_PROFILES":
      return action.profiles;
    case "CREATE_PROFILE":
      return [...state, { ...action.profile }];
    case "UPDATE_PROFILE":
      return state.map((profile) => {
        if (profile.user === action.user) {
          return {
            ...profile,
            ...action.updates,
          };
        } else {
          return profile;
        }
      });

    default:
      return state;
  }
}
