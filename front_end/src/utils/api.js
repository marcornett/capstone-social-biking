const baseUrl = 'http://localhost:5000'
class API {
    // Working
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
                    console.log(data)
                })
        } catch (err) {
            return err
        }
    }

    // TODO: Send plain message if user exists
    async createUser({ username, password, email, image }) {
        const user = { username, password, email, image }
        try {
            await fetch(`${baseUrl}/users`, {
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

    // TODO
    async login({ username, password }) {
        try {
            await fetch('/users', {
                method: 'POST',
                body: JSON.stringify(),
                headers: {
                    'Content-Type': 'application/json'
                }
            }).then(response => response.json())
                .then(response => {
                    console.log(response)
                })
        } catch (err) {
            return err;
        }
    }

    // TODO
    async logout() {
        try {
            fetch.get(`${baseUrl}/`)
                .then(response => response.json())
                .then(response => {
                    //do something with response
                })
        } catch (err) {
            return err;
        }
    }

    // Working
    async getUserInfo(username) {
        try {
            await fetch(`${baseUrl}/users/${username}`)
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

    // TODO
    async deleteUser(username) {
        try {
            fetch(`${baseUrl}/users/${"jeff"}`, {
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
}

export default new API();
