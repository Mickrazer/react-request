//{"access_token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2MjYyMTMxMzksInVzZXJfbmFtZSI6InVzZXIyIiwiYXV0aG9yaXRpZXMiOlsicmVhZCJdLCJqdGkiOiI2ZmEwOTEwMS1iNDczLTQxNDctYmE3MS0wNmQxZTk2Mjg4ZDkiLCJjbGllbnRfaWQiOiJjbGllbnQiLCJzY29wZSI6WyJyZWFkIl19.C5R9iUVflF8x8CLPQvJ-AN1siNNDZDFiTnGIzbaEWqw","token_type":"bearer","refresh_token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX25hbWUiOiJ1c2VyMiIsInNjb3BlIjpbInJlYWQiXSwiYXRpIjoiNmZhMDkxMDEtYjQ3My00MTQ3LWJhNzEtMDZkMWU5NjI4OGQ5IiwiZXhwIjoxNjI4NzYxOTM5LCJhdXRob3JpdGllcyI6WyJyZWFkIl0sImp0aSI6IjVlY2YyNTY4LTFiNmItNDhhZi1iZmE2LTBjNWExNWI4ZmEwNSIsImNsaWVudF9pZCI6ImNsaWVudCJ9.OX0DxSdLLvEZmNan537NB0vcbu6yzeqQeoYht-yQP-8","expires_in":43199,"scope":"read","jti":"6fa09101-b473-4147-ba71-06d1e96288d9"}

class Api {
    constructor(url, token) {
        this.url = url;
        this.token = token;
    }

    getFeed() {
        return fetch(`${this.url}apiv1/feed/`,
            {
                headers: {
                    authorization: `${this.token}`
                }
            })
            .then(res => {
                if (res.ok) {
                    return res.json();
                }

                return Promise.reject(`Ошибка: ${res.status}`);
            })

            .catch((err) => {
                console.log(err);
            });
    }

    dataRequest() {
        return fetch(`${this.url}apiv1/user/tickets/`,
            {
                headers: {
                    authorization: `${this.token}`
                }
            })
            .then(res => {
                if (res.ok) {
                    return res.json();
                }
                return Promise.reject(`Ошибка: ${res.status}`);
            })

            .catch((err) => {
                console.log(err);
            });
    }

    getUser() {
        return fetch(`${this.url}apiv1/info/`,
            {
                headers: {
                    authorization: `${this.token}`
                }
            })
            .then(res => {
                if (res.ok) {
                    return res.json();
                }
                return Promise.reject(`Ошибка: ${res.status}`);
            })

            .catch((err) => {
                console.log(err);
            });
    }

    getStatusRequest(){
        return fetch(`${this.url}apiv1/ticket/statuses/`,
            {
                headers: {
                    authorization: `${this.token}`
                }
            })
            .then(res => {
                if (res.ok) {
                    return res.json();
                }
                return Promise.reject(`Ошибка: ${res.status}`);
            })

            .catch((err) => {
                console.log(err);
            });
    }
    getСompletedRequest(){
        return fetch(`${this.url}apiv1/user/tickets/?status=6`,
            {
                headers: {
                    authorization: `${this.token}`
                }
            })
            .then(res => {
                if (res.ok) {
                    return res.json();
                }
                return Promise.reject(`Ошибка: ${res.status}`);
            })

            .catch((err) => {
                console.log(err);
            });
    }

}

const api = new Api('http://140.82.32.146/', 'bearer ' +
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2MjY2Mzg4OTksInVzZXJfbmFtZSI6InVzZXIyIiwiYXV0aG9yaXRpZXMiOlsicmVhZCJdLCJqdGkiOiIzMzgzZTM4MC00NjNlLTQ2OWUtYjNmNi0xNWU2N2Y1ZmY2ZmIiLCJjbGllbnRfaWQiOiJjbGllbnQiLCJzY29wZSI6WyJyZWFkIl19.9BPC-Ha54r8fBLnrN93fl5uOfnkY-nBU4RFnB9IInKM");

export default api;
