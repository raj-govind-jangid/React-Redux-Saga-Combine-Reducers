import React, {useEffect} from 'react'
import CardComponent from './CardComponent'
import { useSelector, useDispatch } from 'react-redux'
import { getUsers } from '../redux/actions/users';

export default function UsersComponent() {
    const dispatch = useDispatch();
    const users = useSelector(state => state.users.users)
    useEffect(()=>{
        dispatch(getUsers([{
            id:1,
            name:'Leanne Graham',
            company: {
                name: 'Romaguera-crona'
            }
        }]))
    },[])
    return (
        <div>
            {users. length > 0 && users.map((user)=>{
                <CardComponent user={user} key={user.id}/>
            })}
            {users. length == 0 && <p>No Users</p>}
        </div>
    )
}
