import React, { useState } from 'react'

const Blog = ({ blog }) => {
    const [minimized, setMinimized] = useState(true)
    const toggleMinimize = state => {
        setMinimized(!minimized)
    }
    const blogStyle = {
        border: 'solid',
        borderWidth: 1,
        borderRadius: 4,
        margin: '0.3em'
    }
    if (minimized) {
        return (
            <div style={blogStyle}>
                <p onClick={({ target }) => toggleMinimize(minimized)}>
                    {blog.title} - {blog.author}
                </p>
            </div>
        )
    }

    return (
        <div style={blogStyle}>
            <p onClick={({ target }) => toggleMinimize(minimized)}>
                {blog.title} - {blog.author}
            </p>
            <p>
                <a href={blog.url}>{blog.url}</a>
            </p>
            <p>
                {blog.likes} likes <button>Like</button>
            </p>
            <p>added by {blog.user}</p>
        </div>
    )
}

export default Blog
