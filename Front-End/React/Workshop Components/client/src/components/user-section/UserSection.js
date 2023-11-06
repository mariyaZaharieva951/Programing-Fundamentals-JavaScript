import { useState, useEffect } from "react"
import * as userService from '../../services/UserService'
import { UserItem } from "./UserItem"
import { UserDeails } from "./UserDetails";
import { UserEdit } from "./UserEdit";
import { UserDelete } from "./UserDelete";
import { UserAdd } from './UserAdd';


const UserActions = {
  Details: 'details',
  Edit: 'edit',
  Delete: 'delete',
  Add: 'add'
}


export const UserSection = (props) => {

  const [selectedUser, setSelectedUser] = useState(null);
  const [userAction, setUserAction] = useState(null);

  const [users, setUsers] = useState([]);

  const [newUser, setNewUser] = useState(null)


  useEffect(() => {
      userService.getAll()
      .then(users => setUsers(users))
  }, [])

 

  const editClickHandler = (id) => {
    userService.getOne(id)
    .then(user => {
        setSelectedUser(user);
        setUserAction(UserActions.Edit);
        
    })
  }

  const editUserHandler = (ev) => {
    ev.preventDefault();

    const newFormData = new FormData(ev.target);
    
    const {
      firstName,
      lastName,
      email,
      imageUrl,
      phoneNumber,
      ...address
  } = Object.fromEntries(newFormData);

  const newUserData = {
      firstName,
      lastName,
      email,
      imageUrl,
      phoneNumber,
      address,
  };

  setNewUser(newUserData);
  

  // let newUsers = users.map(user => {
  //   if(user._id !== selectedUser._id) {
  //     const updateUser = {
  //       ...user
  //     }
  //     console.log(updateUser)
  //     return updateUser
  //   }
  //   return user;
  // });
  
  // setUsers(newUsers)
  userService.edit(selectedUser._id,newUserData)
            .then(user => {
              console.log('USER',user)
                
                setUsers(oldUsers => [...oldUsers, user]);
               
            });
  
  setUserAction(null)

  
  }

  const addClickHandler = (user) => {
   
        setUserAction(UserActions.Add);
  
    
  }

  const detailsClickHandler = async (id) => {
    
    const user = await userService.getOne(id)
    console.log('get',user)
      setSelectedUser(user)

      setUserAction(UserActions.Details);
      
    
  }

  const deleteClickHandler = async (id) => {
    const user = await userService.getOne(id)
     
    setSelectedUser(user)
     
    setUserAction(UserActions.Delete)
  
  }

  const deleteUserHandler = async () => {
    
    await userService.remove(selectedUser._id);
    setUsers(oldState => oldState.filter(user => user._id !== selectedUser._id));
    setSelectedUser(null);
    setUserAction(null)
  }

  const closeClickHandler = () => {
    
    setSelectedUser(null);
    setUserAction(null);
  }

  const userCreateHandler = (ev) => {
    ev.preventDefault();
    
    const formData = new FormData(ev.target);
        const {
            firstName,
            lastName,
            email,
            imageUrl,
            phoneNumber,
            ...address
        } = Object.fromEntries(formData);

        const userData = {
            firstName,
            lastName,
            email,
            imageUrl,
            phoneNumber,
            address,
        };
        

        userService.create(userData)
            .then(user => {
                setUsers(oldUsers => [...oldUsers, user]);
                closeClickHandler();
            });
            
  
  }


    return (
      <>
        <div className="table-wrapper">

            {selectedUser && (UserActions.Details === userAction) && <UserDeails key={selectedUser._id} user={selectedUser} onClose={closeClickHandler}/>}
            {selectedUser && (UserActions.Edit === userAction) && <UserEdit key={selectedUser._id} user={selectedUser} onClose={closeClickHandler} onEditClick={editUserHandler}/>}
            {selectedUser && (UserActions.Delete === userAction) && <UserDelete key={selectedUser._id} user={selectedUser} onClose={closeClickHandler} onDelete={deleteUserHandler}/>}
            {(UserActions.Add === userAction) && <UserAdd onUserCreate={userCreateHandler} onClose={closeClickHandler}/>}

            <table className="table">
          <thead>
            <tr>
              <th>
                Image
              </th>
              <th>
                First name<svg aria-hidden="true" focusable="false" data-prefix="fas"
                  data-icon="arrow-down" className="icon svg-inline--fa fa-arrow-down Table_icon__+HHgn" role="img"
                  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                  <path fill="currentColor"
                    d="M374.6 310.6l-160 160C208.4 476.9 200.2 480 192 480s-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 370.8V64c0-17.69 14.33-31.1 31.1-31.1S224 46.31 224 64v306.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0S387.1 298.1 374.6 310.6z">
                  </path>
                </svg>
              </th>
              <th>
                Last name<svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="arrow-down"
                  className="icon svg-inline--fa fa-arrow-down Table_icon__+HHgn" role="img" xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 384 512">
                  <path fill="currentColor"
                    d="M374.6 310.6l-160 160C208.4 476.9 200.2 480 192 480s-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 370.8V64c0-17.69 14.33-31.1 31.1-31.1S224 46.31 224 64v306.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0S387.1 298.1 374.6 310.6z">
                  </path>
                </svg>
              </th>
              <th>
                Email<svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="arrow-down"
                  className="icon svg-inline--fa fa-arrow-down Table_icon__+HHgn" role="img" xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 384 512">
                  <path fill="currentColor"
                    d="M374.6 310.6l-160 160C208.4 476.9 200.2 480 192 480s-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 370.8V64c0-17.69 14.33-31.1 31.1-31.1S224 46.31 224 64v306.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0S387.1 298.1 374.6 310.6z">
                  </path>
                </svg>
              </th>
              <th>
                Phone<svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="arrow-down"
                  className="icon svg-inline--fa fa-arrow-down Table_icon__+HHgn" role="img" xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 384 512">
                  <path fill="currentColor"
                    d="M374.6 310.6l-160 160C208.4 476.9 200.2 480 192 480s-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 370.8V64c0-17.69 14.33-31.1 31.1-31.1S224 46.31 224 64v306.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0S387.1 298.1 374.6 310.6z">
                  </path>
                </svg>
              </th>
              <th>
                Created
                <svg aria-hidden="true" focusable="false" data-prefix="fas"
                  data-icon="arrow-down" className="icon active-icon svg-inline--fa fa-arrow-down Table_icon__+HHgn" role="img"
                  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                  <path fill="currentColor"
                    d="M374.6 310.6l-160 160C208.4 476.9 200.2 480 192 480s-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 370.8V64c0-17.69 14.33-31.1 31.1-31.1S224 46.31 224 64v306.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0S387.1 298.1 374.6 310.6z">
                  </path>
                </svg>
              </th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {/* <!-- Table row component --> */}
            {users.map(user =>  <UserItem key={user._id} user={user} onDetailsClick={detailsClickHandler} onEditClick={editClickHandler} onDeleteClick={deleteClickHandler} onUserCreate={addClickHandler}/>)}
            {/* console.log(props) */}
          </tbody>
            </table>
      </div>
          <button className="btn-add btn" onClick={() => addClickHandler({user:null})}>Add new user</button>
      </>
    )
}