import axios from 'axios'
const baseUrl = '/api/blogs'
let userToken = null

const setToken = token => {
    userToken = `bearer ${token}`
}

const unsetToken = () => {
    userToken = null
}

const getAll = () => {
    const request = axios.get(baseUrl)
    return request.then(response => response.data)
}

const createBlog = async (blog, username) => {
    const config = {
        headers: { Authorization: userToken }
    }
    blog.username = username
    const response = await axios.post(baseUrl, blog, config)
    return response.data
}

export default { setToken, unsetToken, getAll, createBlog }
