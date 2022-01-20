import business from '../business/business.container';
import applicationException from '../service/applicationException';

const questionDAO = require('../DAO/questionDAO');
const categoryDAO = require('../DAO/categoryDAO');

const userEndpoint = (router) => {
    router.post('/api/user/auth', async (request, response) => {
        try {
            console.log("przeszlo 1")
            let result = await business.getUserManager(request).authenticate(request.body.email, request.body.password);
            console.log("email " + request.body.email)
            console.log("password " + request.body.password)
            response.status(200).send(result);
            console.log("przeszlo last")
            response.status(200).send(result);
        } catch (error) {
            applicationException.errorHandler(error, response);
        }
    });

    router.post('/api/user/create', async (request, response, next) => {
        try {
            console.log('test')
            const result = await business.getUserManager(request).createNewOrUpdate(request.body);
            response.status(200).send(result);
        } catch (error) {
            applicationException.errorHandler(error, response);
        }
    });

    router.delete('/api/user/logout/:userId',  async (request, response, next) => {
        try {
            let result = await business.getUserManager(request).removeHashSession(request.body.userId);
            response.status(200).send(result);
        } catch (error) {
            applicationException.errorHandler(error, response);
        }
    });

    router.get('/api/category', (req, res) => {
        categoryDAO.find({})
            .then((data) => {
                res.json(data);
            })
            .catch((error) => {
                console.log('error: ', error);
            });
    });
    router.get('/api/quiz', (req, res) => {
        questionDAO.find({})
            .then((data) => {
                res.json(data);
            })
            .catch((error) => {
                console.log('error: ', error);
            });
    });

};

export default userEndpoint;
