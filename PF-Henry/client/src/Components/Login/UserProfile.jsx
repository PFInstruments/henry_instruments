import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom';
import { getUserId} from '../../Redux/actions'

function UserProfile() {
    const dispatch = useDispatch()
    const fav = useSelector(state => state.fav)
    const userId = useSelector(state => state.userId)
    const {id} = useParams()

   useEffect(() => {
        dispatch(getUserId(id))
    }, [dispatch, id])

    return (
        <div>
           {fav.map((f) => (
               <div key={f.id}>
                     <h6>{f.name}</h6>
                        <p>{f.descriptions}</p>
                        <p>$ {f.price}</p>
                        </div>
                        ))
                        }
        </div>
    )
}

export default UserProfile
