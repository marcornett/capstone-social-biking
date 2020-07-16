

class API {
    login() {
        try {
            fetch('url here', {
                method: 'POST',
                body: JSON.stringify(),
                headers: {
                    'Content-Type': 'application/json'
                }
            })
                .then(response => response.json())
                .then(response => {
                    //do something with response
                })
        } catch (err) {
            return err;
        }
    }

    logout() {
        try {
            fetch.get('url here')
                .then(response => response.json())
                .then(response => {
                    //do something with response
                })
        } catch (err) {
            return err;
        }
    }

    UploadUserImage(username) {
        try {
            fetch(`url here ${username}`, {
                method: 'PUT',
                body: JSON.stringify(),
                headers: {
                    'Content-Type': 'application/json'
                }
            })
                .then(response => response.json())
                .then(response => {
                    //do something with response
                })
        } catch (err) {
            return err
        }
    }

    deleteUser(username) {
        try {
            fetch(`url here :${username}`, {
                method: 'DELETE',
            })
                .then(response => response.json())
                .then(response => {
                    //do something with response, "Are you sure you want to delete? alert message"
                })
        } catch (err) {
            return err
        }
    }

    getUser() {
        try {
            fetch.get('url here')
                .then(response => response.json())
                .then(response => {
                    //do something with response
                })
        } catch (err) {
            return err;
        }
    }
}

export default new API();