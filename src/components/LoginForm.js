import React, { useState } from 'react'

const LoginForm = props => {
    const [username, setUsername] = useState(props.username ? props.username : '')
    const [password, setPassword] = useState(props.password ? props.password : '')

    return (
        <div>
            <form onSubmit={e => props.handleLogin(e, username, password)}>
                <label>
                    käyttäjä{' '}
                    <input
                        type="text"
                        value={username}
                        onChange={({ target }) => setUsername(target.value)}
                    />
                </label>
                <br />
                <br />
                <label>
                    salasana{' '}
                    <input
                        type="password"
                        value={password}
                        onChange={({ target }) => setPassword(target.value)}
                    />
                </label>
                <br />
                <br />
                <button>Kirjaudu sisään</button>
            </form>
        </div>
    )
}

export default LoginForm
