export function formReducer(state, event) {
  if (event.reset) {
    return {
      title: "",
      year: "",
      genre: "",
    };
  }
  return {
    ...state,
    [event.name]: event.value,
  };
}
