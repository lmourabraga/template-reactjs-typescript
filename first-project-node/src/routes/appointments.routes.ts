import { Router } from 'express';
import { getCustomRepository } from 'typeorm';
import { parseISO } from 'date-fns'; // Lib para formatar datas e horas
import AppointmentsRepository from '../repositories/AppointmentsRepository';
import CreateAppointmentService from '../services/CreateAppointmentService';

const appointmentsRouter = Router();

appointmentsRouter.get('/', async (request, response) => {
    const appointmentsRepository = getCustomRepository(AppointmentsRepository);
    const appointments = await appointmentsRepository.find();

    return response.json(appointments);
});

appointmentsRouter.post('/', async (request, response) => {
    try {
        const { provider, date } = request.body;

        const parsedDate = parseISO(date);

        const createAppointment = new CreateAppointmentService();

        const appointment = await createAppointment.execute({
            date: parsedDate,
            provider,
        });

        return response.json(appointment);
    } catch (error) {
        return response.status(400).json({ error: error.message });
    }
});

export default appointmentsRouter;

// SoC: Separation of Concerns (Separação de preocupações);
// DTO: Data transfer object: Quando você transfere dados de um arquivo para o outro.
