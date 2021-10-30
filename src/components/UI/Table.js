import axios from 'axios'
import React, {useState, useEffect} from 'react'
import { useHistory, Link } from 'react-router-dom'

const Table = () => {
  let history = useHistory()

  const [user, setUser] = useState([])

  useEffect(() => {
    loadUsers();
  }, [])

  const loadUsers = async () => {
    const result = await axios.get("http://localhost:3001/users");
    setUser(result.data.reverse())
  };

  const deleteUser = async (id) => {
    await axios.delete(`http://localhost:3001/users/${id}`)
    history.push("/")
    loadUsers()
  }

  return (
    <div style={{overflowX: "auto"}}>
      <table className="table w-100" >
        <thead className="thead-dark">
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Email ID</th>
            <th scope="col">Contact Number</th>
            <th scope="col">Course Interested</th>
            <th scope="col">Address</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
         {user.map((user,index) => (
           <tr>
             <th scope="row">{index + 1}</th>
             <td>{user.name}</td>
             <td>{user.email}</td>
             <td>{user.contact}</td>
             <td>{user.course}</td>
             <td>{user.address}</td>
             <td className="center">
              <Link className="btn btn-outline-info ms-2" to={`/edit_user/${user.id}`} style={{width:"100px", margin:'auto'}}> Update </Link>
              <a className="btn btn-outline-danger ms-2" onClick={() => deleteUser(user.id)} style={{width:"100px", margin:'auto'}}> Delete </a>
            </td>
           </tr>
         ))}
        </tbody>
      </table>
    </div>
  )
}

export default Table
