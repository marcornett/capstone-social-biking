// const baseUrl = '/api'

// TODO: This needs to be switched once pushed to Heroku
const baseUrl = 'http://localhost:4000/api'

class api {
    // This may not get used
    async getUsers() {
        try {
            const response = await fetch(`${baseUrl}/users`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            return response.json()
        } catch (err) {
            return err
        }
    }


    async registerUser({ username, password, email, image }) {
        const user = { username, password, email, image }
        try {
            const response = await fetch(`${baseUrl}/users/register`, {
                method: 'POST',
                body: JSON.stringify(user),
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            return await response.json()
        } catch (err) {
            return err;
        }
    }

    async login({ username, password }) {
        const user = { username, password }
        try {
            const response = await fetch(`${baseUrl}/auth/login`, {
                method: 'POST',
                body: JSON.stringify(user),
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            response.json()
        } catch (err) {
            return err;
        }
    }

    // TODO
    async logout() {
        try {
            const response = await fetch.get(`${baseUrl}/auth/logout`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            response.json()
        } catch (err) {
            return err;
        }
    }

    // Working
    async getUserInfo(username, token) {
        try {
            const response = await fetch(`${baseUrl}/users/${username}`, {
                method: 'GET',
                headers: {
                    'Authorization': `${token}`
                }
            })
            return response.json()
        } catch (err) {
            return err;
        }
    }

    // Working
    async putUserImage(username, formData) {
        try {
            const response = await fetch(`${baseUrl}/users/${username}/picture`, {
                method: 'PUT',
                body: JSON.stringify({ image: formData }),
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            return response.json()
        } catch (err) {
            return err
        }
    }

    // Working
    async deleteUser(username) {
        try {
            const response = fetch(`${baseUrl}/users/${username}`, {
                method: 'DELETE',
            })
            return response.json()
        } catch (err) {
            return err
        }
    }

    // Working
    async getGroups() {
        try {
            const response = await fetch(`${baseUrl}/groups`, {
                method: 'GET',
            })
            return response.json()
        } catch (err) {
            return err
        }
    }

    // Working
    async getGroup(groupName) {
        try {
            const response = await fetch(`${baseUrl}/groups/${groupName}`, {
                method: 'GET',
            })
            return response.json()
        } catch (err) {
            return err
        }
    }

    // Working
    async makeGroup({ groupName, location, image, about, eventList }) {
        const group = { groupName, location, image, about, eventList }
        try {
            const response = await fetch(`${baseUrl}/groups`, {
                method: 'POST',
                body: JSON.stringify(group),
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            return response.json()
        } catch (err) {
            return err;
        }
    }
}

export default new api();
