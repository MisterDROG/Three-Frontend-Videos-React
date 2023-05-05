// api for downloading posts from database
class Api {
    constructor(configApi) {
        this.url = configApi.url;
    }

    // private function for handling result (ok or not) from request to the server
    _handleReturn(res) {
        if (res.ok) {
            return res.json();
        }
        return Promise.reject(`Server error: ${res.status}`);
    }

    // download all posts from databse
    dowloadPosts() {
        return (
            fetch(`${this.url}`, {
                method: 'GET',
            })
                .then((res) => this._handleReturn(res))
                // .then((res) => console.log(res))
                .catch((error) => console.log(error))
        );
    }
}

export const api = new Api({
    url: 'https://tfvideos-8e550-default-rtdb.firebaseio.com/posts.json',
    // url: 'http://localhost:4000/',
});
