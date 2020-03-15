/**
 * 考察react-redux使用
 */

const usersReducer = (state = [], action) =>{
  switch(action.type) {
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

class User extends Component {
  render () {
    const { user,deleteUser,index } = this.props
    return (
      <div>
        <div>Name: {user.username}</div>
        <div>Age: {user.age}</div>
        <div>Gender: {user.gender}</div>
        <button onClick={()=> {deleteUser(index)}}>删除</button>
      </div>
    )
  }
}

class UsersList extends Component {
  constructor() {
    super();
    this.state = {
      username: '',
      age: '',
      gender: ''
    }
  }
  render () {
    const { username, age, gender } = this.state
    const { addUser, deleteUser, users } = this.props
    return (
      <div>
        <div className='add-user'>
          <div>Username: <input type='text' value={username} onChange={e=>{this.setState({username: e.target.value})}} /></div>
          <div>Age: <input type='number' value={age} onChange={e=>{this.setState({age: parseInt(e.target.value)})}} /></div>
          <div>Gender:
            <label>Male: <input type='radio' name='gender' value='male' onChange={e=>{this.setState({gender: e.target.value})}} /></label>
            <label>Female: <input type='radio' name='gender' value='female' onChange={e=>{this.setState({gender: e.target.value})}} /></label>
          </div>
          <button onClick={()=>addUser(this.state)}>增加</button>
        </div>
        <div className='users-list'>
          {users.map((user, index)=>
            <User user={user} deleteUser={deleteUser} index={index} key={index}/>
          )}
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    users: state
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addUser: (user) => {
      dispatch({
        type: "ADD_USER",
        user
      })
    },
    deleteUser: (index) => {
      dispatch({
        type: "DELETE_USER",
        index: index,
      })
    }
  }
}

UsersList = connect(mapStateToProps, mapDispatchToProps)(UsersList)
