import { IUser } from './user';
import { IAddress } from './Address';

export interface ITravel {
    Id ?: number,
    Driver: IUser,
    Places: number,
    Origin: IAddress,
    Destination: IAddress,
    Escales: boolean,
    Departure: Date
}