// cypress/e2e/desafio.js

class Desafio {

    metodoGetSucesso() {
        cy.request({
            method: 'GET',
            url: "https://jsonplaceholder.typicode.com/posts/1",
            headers: {
                'Content-Type': 'application/json'
            }
        }).then((response) => {
            expect(response.status).to.eq(200);
        });
    }

    metodoGetFalha() {
        cy.request({
            method: 'GET',
            url: "https://jsonplaceholder.typicode.com/post",
            headers: {
                'Content-Type': 'application/json'
            },
            failOnStatusCode: false
        }).then((response) => {
            expect(response.status).to.eq(404);
        });
    }

    metodoPostSucesso() {
        cy.request({
            method: 'POST',
            url: "https://jsonplaceholder.typicode.com/posts",
            body: {
                id: 101,
                title: 'foo',
                body: 'bar',
                userId: 1
            },
            headers: {
                'Content-Type': 'application/json'
            }
        }).then((response) => {
            expect(response.status).to.eq(201);
            expect(response.body).to.have.property('id', 101);
            expect(response.body).to.have.property('title', 'foo');
            expect(response.body).to.have.property('body', 'bar');
            expect(response.body).to.have.property('userId', 1);
        });
    }


    metodoPostFalha() {
        cy.request({
            method: 'POST',
            url: "https://jsonplaceholder.typicode.com/posts/1",
            body: {
                incorrectField: 'foo'
            },
            headers: {
                'Content-Type': 'application/json'
            },
            failOnStatusCode: false
        }).then((response) => {
            expect(response.status).to.eq(404);
        });
    }

    metodoPutSucesso() {
        cy.request({
            method: 'PUT',
            url: "https://jsonplaceholder.typicode.com/posts/1",
            body: {
                id: 1,
                title: 'foo',
                body: 'bar',
                userId: 1
            },
            headers: {
                'Content-Type': 'application/json'
            }
        }).then((response) => {
            expect(response.status).to.eq(200);
            expect(response.body).to.have.property('id', 1);
            expect(response.body).to.have.property('title', 'foo');
            expect(response.body).to.have.property('body', 'bar');
            expect(response.body).to.have.property('userId', 1);
        });
    }

    metodoPutFalha() {
        cy.request({
            method: 'PUT',
            url: "https://jsonplaceholder.typicode.com/posts/",
            body: {
                incorrectField: 'foo'
            },
            headers: {
                'Content-Type': 'application/json'
            },
            failOnStatusCode: false
        }).then((response) => {
            expect(response.status).to.eq(404);
        });
    }

    metodoPatchSucesso() {
        cy.request({
            method: 'PATCH',
            url: "https://jsonplaceholder.typicode.com/posts/1",
            body: {
                id: 1,
                title: 'foo',
                body: '...',
                userId: 1
            },
            headers: {
                'Content-Type': 'application/json'
            }
        }).then((response) => {
            expect(response.status).to.eq(200);
            expect(response.body).to.have.property('id', 1);
            expect(response.body).to.have.property('title', 'foo');
            expect(response.body).to.have.property('userId', 1);
        });
    }

    metodoPatchFalha() {
        cy.request({
            method: 'PATCH',
            url: "https://jsonplaceholder.typicode.com/posts/",
            body: {
                incorrectField: 'foo'
            },
            headers: {
                'Content-Type': 'application/json'
            },
            failOnStatusCode: false
        }).then((response) => {
            expect(response.status).to.eq(404);
        });
    }

    metodoDeleteSucesso() {
        cy.request({
            method: 'DELETE',
            url: "https://jsonplaceholder.typicode.com/posts/1",
            headers: {
                'Content-Type': 'application/json'
            }
        }).then((response) => {
            expect(response.status).to.eq(200);

        });
    }

    metodoDeleteFalha() {
        cy.request({
            method: 'DELETE',
            url: 'https://jsonplaceholder.typicode.com/posts/',
            failOnStatusCode: false
        }).then((response) => {
            expect(response.status).to.eq(404);

        });
    }

}



export default new Desafio();