// 考查Redux中Reducer的写法以及...扩展符的使用

const usersReducer = (state=[], action) => {
  switch(action.type){
    case 'ADD_USER':
      return [...state, action.user]
      break;
    case 'DELETE_USER':
      let delData = [...state];
      delData.splice(action.index,1);
      return delData;
      break;
    case 'UPDATE_USER':
      let upData = [...state];
      upData[action.index] = {...upData[action.index], ...action.user};
      return upData;
      break;
    default:
      return state;
      break;

  }

}