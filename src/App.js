import React, { useEffect } from 'react'
import './App.css'
import { useDispatch, useSelector } from 'react-redux'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import HomeScreen from './components/homescreen/HomeScreen'
import ProfileScreen from './components/profile/ProfileScreen'
import Login from './components/login/Login'
import { auth } from './firebase'
import { login, logout, selectUser } from './features/userSlice'

function App () {
  const user = useSelector(selectUser)
  const dispatch = useDispatch()

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(userAuth => {
      if (userAuth) {
        // Logged in
        dispatch(
          login({
            uid: userAuth.uid,
            email: userAuth.email
          })
        )
      } else {
        // Logged out
        dispatch(logout())
      }
    })

    return unsubscribe
  }, [dispatch])

  return (
    <div className='app'>
      <Router>
        {!user ? (
          <Login />
        ) : (
          <Switch>
            <Route path='/profile'>
              <ProfileScreen />
            </Route>
            <Route exact path='/'>
              <HomeScreen />
            </Route>
          </Switch>
        )}
      </Router>
    </div>
  )
}

export default App
