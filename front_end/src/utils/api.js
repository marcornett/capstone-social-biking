

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
                    //do something with respnose
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

    UploadUserImage() {
        try {
            fetch('url here + user id', {
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

    deleteUser() {
        try {
            fetch('url here + user id', {
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

    getUserImage() {
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