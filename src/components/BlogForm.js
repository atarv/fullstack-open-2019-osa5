import React, { useState } from 'react'

const BlogForm = props => {
    const [title, setTitle] = useState('')
    const [author, setAuthor] = useState('')
    const [url, setUrl] = useState('')

    return (
        <div>
            <label>
                Otsikko
                <input
                    type="text"
                    value={title}
                    onChange={({ target }) => setTitle(target.value)}
                />
            </label>
            <br />
            <label>
                Tekijä
                <input
                    type="text"
                    value={author}
                    onChange={({ target }) => setAuthor(target.value)}
                />
            </label>
            <br />
            <label>
                URL
                <input type="text" value={url} onChange={({ target }) => setUrl(target.value)} />
            </label>
            <br />
            <button onClick={e => props.handleCreate(e, { title, author, url })}>Luo</button>
        </div>
    )
}

export default BlogForm
