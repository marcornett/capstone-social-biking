// const baseUrl = '/api'

// TODO: This needs to be switched once pushed to Heroku
const baseUrl = 'http://localhost:4000/api'

class api {
    // This may not get used
    async getUsers() {
        try {
            await fetch(`${baseUrl}/users`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
            })
                .then(response => response.json())
                .then(data => {
                    console.log("get users", data)
                })
        } catch (err) {
            return err
        }
    }
  
    //TODO- still need to test 
    async getGroupData(groupName) {
        try {
            await fetch(`${baseUrl}/groups/${groupName}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
            })
                .then(response => response.json())
                .then(data => {
                    console.log("getGroupData", data)
                })
        } catch (err) {
            return err
        }
    }

    async registerUser({ username, password, email, image }) {
        const user = { username, password, email, image }
        try {
            await fetch(`${baseUrl}/users/register`, {
                method: 'POST',
                body: JSON.stringify(user),
                headers: {
                    'Content-Type': 'application/json'
                }
            }).then(response => response.json())
                .then(data => {
                    console.log("createUser", data)
                })
        } catch (err) {
            return err;
        }
    }

    async login({ username, password }) {
        const user = { username, password }
        try {
            await fetch(`${baseUrl}/auth/login`, {
                method: 'POST',
                body: JSON.stringify(user),
                headers: {
                    'Content-Type': 'application/json'
                }
            }).then(response => response.json())
                .then(response => {
                    console.log("login", response)
                })
        } catch (err) {
            return err;
        }
    }

    // TODO
    async logout() {
        try {
            await fetch.get(`${baseUrl}/auth/logout`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
            })
                .then(response => {
                    response.json()
                    // TODO Get something back
                    console.log("json", response)
                })
                .then(data => {
                    console.log("hello", data)
                })
        } catch (err) {
            return err;
        }
    }

    // Working
    async getUserInfo(username, token) {
        try {
            await fetch(`${baseUrl}/users/${username}`, {
                method: 'GET',
                headers: {
                    'Authorization': `${token}`
                }
            })
                .then(response => response.json())
                .then(data => {
                    console.log("getUserInfo", data);
                })
        } catch (err) {
            return err;
        }
    }

    // Working
    async putUserImage(username, formData) {
        try {
            await fetch(`${baseUrl}/users/${username}/picture`, {
                method: 'PUT',
                body: JSON.stringify({ image: formData }),
                headers: {
                    'Content-Type': 'application/json'
                }
            })
                .then(response => response.json())
                .then(data => {
                    console.log("putUserImage", data);
                })
        } catch (err) {
            return err
        }
    }

    // Working
    async deleteUser(username) {
        try {
            fetch(`${baseUrl}/users/${username}`, {
                method: 'DELETE',
            })
                .then(response => response.json())
                .then(data => {
                    console.log("deleteUser", data)
                })
        } catch (err) {
            return err
        }
    }

    // Working
    async getGroups() {
        try {
            fetch(`${baseUrl}/groups`, {
                method: 'GET',
            })
                .then(response => response.json())
                .then(data => {
                    console.log("Groups", data)
                })
        } catch (err) {
            return err
        }
    }

    // Working
    async getGroup(groupName) {
        try {
            fetch(`${baseUrl}/groups/${groupName}`, {
                method: 'GET',
            })
                .then(response => response.json())
                .then(data => {
                    console.log("One group", data)
                })
        } catch (err) {
            return err
        }
    }
}

export default new api();
