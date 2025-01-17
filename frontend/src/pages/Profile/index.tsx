import { useMount, useLocalStorageState } from 'ahooks'
import axios from 'axios'
import { useState } from 'react'

export default () => {
  const [userId, setUserId] = useLocalStorageState('userId', {
    defaultValue: 0,
  })
  useMount(() => {
    console.log('Profile mounted')
    if (!userId || userId === 0) {
      //   setUserInfo
      window.location.href = '/login'
    }
    getUser()
  })
  const [user, setUser] = useState({
    username: 'admin',
    password: '123456',
    email: 'admin@example.com',
    phone: '12345678901',
    sex: 'Male',
  })
  const getUser = () => {
    axios
      .post('/api/get_user', {
        id: userId,
      })
      .then(res => {
        console.log(res.data.data.fields)
        setUser(res.data.data.fields)
      })
      .catch(error => {
        console.log('error', error)
      })
  }
  const updateUser = () => {
    axios
      .post('/api/update_user', {
        id: userInfo?.id,
        ...user,
      })
      .then(res => {
        console.log(res.data)
      })
      .catch(error => {
        console.log('error', error)
      })
  }

  return (
    <div className="max-w-md mx-auto">
      <div className="mt-10 px-5 py-5 bg-white rounded-lg shadow-lg">
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Username
          </label>
          <input
            type="text"
            className="appearance-none border rounded w-full py-2 px-3 bg-gray-200 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500"
            value={user.username}
            readOnly
          />
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Email
          </label>
          <input
            type="email"
            className="appearance-none border rounded w-full py-2 px-3 bg-gray-200 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500"
            value={user.email}
            onChange={e => setUser({ ...user, email: e.target.value })}
          />
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Password
          </label>
          <input
            type="password"
            className="appearance-none border rounded w-full py-2 px-3 bg-gray-200 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500"
            value={user.password}
            onChange={e => setUser({ ...user, password: e.target.value })}
          />
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Phone
          </label>
          <input
            type="text"
            className="appearance-none border rounded w-full py-2 px-3 bg-gray-200 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500"
            value={user.phone}
            onChange={e => setUser({ ...user, phone: e.target.value })}
          />
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Sex
          </label>
          <select
            className="appearance-none border rounded w-full py-2 px-3 bg-gray-200 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500"
            value={user.sex}
            onChange={e => setUser({ ...user, sex: e.target.value })}
          >
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
        </div>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          onClick={updateUser}
        >
          Update
        </button>
      </div>
    </div>
  )
}
