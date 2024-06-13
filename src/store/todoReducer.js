const defaultState = [
  {
    id: 1,
    title: "Поездка в Грузию ",
    checked: false,
    order: 1,
  },
];

const ADD_TODO = "ADD_TODO";
const REMOVE_TODO = "REMOVE_TODO";
const CHECK_TODO = "CHECK_TODO";
const MOVIE_TODO = "MOVIE_TODO";

export const todoReducer = (state = defaultState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return [...state, action.payload];

    case REMOVE_TODO:
      return state.filter((todo) => todo.id !== action.payload);

    case CHECK_TODO:
      return state.map((todo) =>
        todo.id === action.payload.id
          ? { ...todo, checked: action.payload.checked }
          : todo
      );

    case MOVIE_TODO:
      return state.map((todo) => {
        if (todo.id === action.payload.oldId) {
          return {
            ...todo,
            order: state.find((item) => item.id === action.payload.newId).order,
          };
        }
        if (todo.id === action.payload.newId) {
          return {
            ...todo,
            order: state.find((item) => item.id === action.payload.oldId).order,
          };
        } else {
          return todo;
        }
      });

    default:
      return state;
  }
};

export const addTodoAction = (payload) => ({ type: ADD_TODO, payload });
export const removeTodoAction = (payload) => ({ type: REMOVE_TODO, payload });
export const checkTodoAction = (payload) => ({ type: CHECK_TODO, payload });
export const movieTodoAction = (payload) => ({ type: MOVIE_TODO, payload });
