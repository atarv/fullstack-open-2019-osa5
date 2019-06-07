import React, { useState, useEffect } from 'react'
import Blog from './components/Blog'
import LoginForm from './components/LoginForm'
import BlogForm from './components/BlogForm'
import blogService from './services/blogs'
import loginService from './services/login'

const App = () => {
    const [blogs, setBlogs] = useState([])
    const [user, setUser] = useState(null)

    const handleLogin = async (event, username, password) => {
        event.preventDefault()
        try {
            const user = await loginService.login({
                username,
                password
            })
            console.log('user', user)
            window.localStorage.setItem('loggedBlogsUser', JSON.stringify(user))
            blogService.setToken(user.token)
            setUser(user)
        } catch (exception) {
            // näytä käyttäjälle jotakin!!
            console.log('tapahtui virhe', exception)
        }
    }

    const handleLogout = async event => {
        window.localStorage.removeItem('loggedBlogsUser')
        blogService.unsetToken()
        setUser(null)
    }

    const handleCreate = async (event, blog) => {
        console.log('blog', blog)

        const response = await blogService.createBlog(blog, user.username)
        console.log('debug response', response)
    }

    // hakee blogit
    useEffect(() => {
        blogService.getAll().then(blogs => setBlogs(blogs))
    }, [])

    // hakee kirjautuneen käyttäjän tiedot
    useEffect(() => {
        const loggedUserJSON = window.localStorage.getItem('loggedBlogsUser')
        if (loggedUserJSON) {
            const user = JSON.parse(loggedUserJSON)
            setUser(user)
        }
    }, [])

    if (user === null) {
        return (
            <div>
                <h2>Kirjautuminen</h2>
                <LoginForm handleLogin={handleLogin} />
            </div>
        )
    }

    return (
        <div>
            <h2>Blogit</h2>
            <p>Kirjautuneena: {user.username}</p>
            <button onClick={handleLogout}>Kirjaudu ulos</button>
            <h3>Luo uusi</h3>
            <BlogForm handleCreate={handleCreate} />
            {blogs.map(blog => (
                <Blog key={blog.id} blog={blog} />
            ))}
        </div>
    )
}

export default App
