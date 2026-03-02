import React, { useContext, useEffect, useState } from 'react'
import Login from './components/Auth/Login'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard'
import AdminDashboard from './components/Dashboard/AdminDashboard'
import { AuthContext } from './context/AuthProvider'

const App = () => {

  const [user, setUser] = useState(null)
  const [loggedInUserData, setLoggedInUserData] = useState(null)
  const [userData] = useContext(AuthContext)

  // check localStorage when app loads
  useEffect(() => {
    const loggedInUser = localStorage.getItem('loggedInUser')

    if (loggedInUser) {
      const parsedUser = JSON.parse(loggedInUser)
      setUser(parsedUser.role)
      setLoggedInUserData(parsedUser.data)
    }
  }, [])

  const handleLogin = (email, password) => {

    // ADMIN LOGIN
    if (email === 'admin@me.com' && password === '123') {

      const adminData = {
        role: 'admin',
        data: { firstName: 'Admin' }
      }

      setUser('admin')
      setLoggedInUserData(adminData.data)
      localStorage.setItem('loggedInUser', JSON.stringify(adminData))
      return
    }

    // EMPLOYEE LOGIN
    if (userData) {
      const employee = userData.find(
        (e) => email === e.email && e.password === password
      )

      if (employee) {
        setUser('employee')
        setLoggedInUserData(employee)

        localStorage.setItem(
          'loggedInUser',
          JSON.stringify({
            role: 'employee',
            data: employee
          })
        )
        return
      }
    }

    alert('Invalid Credentials')
  }

  return (
    <>
      {!user && <Login handleLogin={handleLogin} />}

      {user === 'admin' ? (
        <AdminDashboard
          changeUser={setUser}
          data={loggedInUserData}
        />
      ) : user === 'employee' ? (
        <EmployeeDashboard
          changeUser={setUser}
          data={loggedInUserData}
        />
      ) : null}
    </>
  )
}

export default App