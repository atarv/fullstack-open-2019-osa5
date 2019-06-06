import React, { useState, useEffect } from 'react'
import Blog from './components/Blog'
import LoginForm from './components/LoginForm'
import blogService from './services/blogs'
import loginService from './services/login'

const App = () => {
    const [blogs, setBlogs] = useState([])
    // const [username, setUser] = useState('')
    // const [password, setPassword] = useState('')
    const [user, setUser] = useState(null)

    const handleLogin = async (event, username, password) => {
        event.preventDefault()
        try {
            const user = await loginService.login({
                username,
                password
            })
            console.log('user', user)
            setUser(user)
        } catch (exception) {
            // näytä käyttäjälle jotakin!!
            console.log('tapahtui virhe', exception)
        }
    }

    useEffect(() => {
        blogService.getAll().then(blogs => setBlogs(blogs))
    }, [])

    if (user === null) {
        return (
            <div>
                <h2>Kirjaudu sisään</h2>
                <LoginForm handleLogin={handleLogin} />
            </div>
        )
    }

    return (
        <div>
            <h2>blogs</h2>
            <p>Logged in as {user.username} </p>
            {blogs.map(blog => (
                <Blog key={blog.id} blog={blog} />
            ))}
        </div>
    )
}

export default App
