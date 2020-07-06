import { Router } from 'express';
import { uuid } from 'uuidv4';

const appointmentsRouter = Router();

const appointments = [];

appointmentsRouter.post('/', (request, response) => {
    const { provider, date } = request.body;

    const appointment = {
        id: uuid(), // instalar a lib uuidv4 para gerar os ids.
        provider,
        date,
    };

    appointments.push(appointment);

    return response.json(appointment);
});

export default appointmentsRouter;
