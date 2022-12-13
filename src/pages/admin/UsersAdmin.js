import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getUsers } from '../../api/user';
import NavBar from '../../components/admin/NavBar'

export default function UsersAdmin() {
    const dispatch = useDispatch();

    const { users } = useSelector(state => state.usersReducer);

  
    // hydrate users reducer on dispatch action
    useEffect(() => {
      dispatch(getUsers());
    }, [dispatch]);

    return (
        <div className='flex'>
            <NavBar/>
            <div>
                <h1 className="text-center text-xl">Users</h1>
                {users.map((user, i)=>{
                    return(
                        <div key={i}>
                            {user.credentials.mail}
                            {user.roles}
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
