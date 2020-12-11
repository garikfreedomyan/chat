const initialState = {
  name: '',
  avatar: 'avatar-1',
  message: '',
  socketId: '',
  roomId: '',
  users: [],
  messages: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SAVE_NAME':
      return {
        ...state,
        name: action.payload,
      };

    case 'SAVE_AVATAR':
      return {
        ...state,
        avatar: action.payload,
      };

    case 'SAVE_MESSAGE':
      return {
        ...state,
        message: action.payload,
      };

    case 'SAVE_SOCKET_ID':
      return {
        ...state,
        socketId: action.payload,
      };

    case 'SAVE_ROOM_ID':
      return {
        ...state,
        roomId: action.payload,
      };

    case 'SAVE_USERS':
      return {
        ...state,
        users: [...action.payload],
      };

    case 'SAVE_MESSAGES':
      return {
        ...state,
        messages: [...action.payload],
      };

    default:
      return state;
  }
};

export default reducer;
