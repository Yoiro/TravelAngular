import { IReservation } from './reservation';

export interface IUser {
    Id: number,
    Username: string,
    Password: string,
    LastName: string,
    FirstName: string,
    Rating: number,
    Reservations: IReservation[]
}