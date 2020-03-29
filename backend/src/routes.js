const express = require('express');

const ongController = require('./controllers/ongController');
const insedentController = require('./controllers/incidentController');
const profileController = require('./controllers/profileController');
const sessionController = require('./controllers/sessionController');

const routes = express();

routes.post('/session', sessionController.create);

routes.get('/', (req, res) => {
    const params = req.query;

    console.log(params);

    return res.json({        
        event: 'Semana OmniStack',
        aluno: 'M4rkos'
    });
});

routes.get('/ongs', ongController.index);
routes.get('/incidents', insedentController.index);

routes.get('/profile', profileController.index);

routes.post('/ongs', ongController.create);
routes.post('/incidents', insedentController.create);
routes.delete('/incidents/:id', insedentController.delete);


// routes.post('/users', (req, res) => {
//     const params = req.query;

//     console.log(params);

//     return res.json({
//         method: 'POST',
//         event: 'Semana OmniStack',
//         aluno: 'Marcos Eduardo'
//     });
// });

// routes.post('/users/:id', (req, res) => {
//     const params = req.params;

//     console.log(params);

//     return res.json({
//         method: 'POST',
//         event: 'Semana OmniStack',
//         aluno: 'Marcos Eduardo'
//     });
// });

// routes.post('/users-body', (req, res) => {
//     const body = req.body;

//     console.log(body);

//     return res.json({
//         method: 'POST',
//         event: 'Semana OmniStack',
//         aluno: 'Marcos Eduardo'
//     });
// });

module.exports = routes;