import { Task } from '../models/task.model';

export const TASKS: Task[] = [
    {
        id_task     : 123,
        title       : 'Primera tarea',
        description : 'La primera tarea consiste en hacer una tarea',
        date        : new Date('2017-8-10'),
        start_time  : new Date(),
        end_time    : new Date()
    },
    {
        id_task     : 456,
        title       : 'Segunda tarea',
        description : 'La segunda tarea consiste en hacer otra tarea',
        date        : new Date('2017-8-15'),
        start_time  : new Date(),
        end_time    : new Date()
    }
];