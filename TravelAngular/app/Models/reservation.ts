import { IUser } from './user';
import { ITravel } from './travel';

export interface Reservation {
    Id: number,
    Passenger: IUser,
    Journey: ITravel,
    ReservationDate: Date
}