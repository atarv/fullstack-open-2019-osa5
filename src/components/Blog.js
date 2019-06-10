import React, { useState } from 'react'

const Blog = ({ blog, handleLike, handleDelete, showRemove }) => {
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
    const removeButtonStyle = {
        display: showRemove ? '' : 'none'
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
                {blog.likes} likes <button onClick={() => handleLike(blog)}>Like</button>
            </p>
            <p>added by {blog.userId.name}</p>
            <button style={removeButtonStyle} onClick={() => handleDelete(blog)}>
                Remove
            </button>
        </div>
    )
}

export default Blog
