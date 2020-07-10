import { Router } from 'express';
import { parseISO } from 'date-fns'; // Lib para formatar datas e horas
import AppointmentsRepository from '../repositories/AppointmentsRepository';
import CreateAppointmentService from '../services/CreateAppointmentService';

const appointmentsRouter = Router();
const appointmentsRepository = new AppointmentsRepository();

appointmentsRouter.get('/', (request, response) => {
    const appointments = appointmentsRepository.all();
    return response.json(appointments);
});

appointmentsRouter.post('/', (request, response) => {
    try {
        const { provider, date } = request.body;

        const parsedDate = parseISO(date);

        const createAppointment = new CreateAppointmentService(
            appointmentsRepository,
        );

        const appointment = createAppointment.execute({
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
