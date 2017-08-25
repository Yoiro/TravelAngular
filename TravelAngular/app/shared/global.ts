import { IUser } from '../Models/user';
import { IAddress } from '../Models/address';
import { ITravel } from '../Models/travel';

import { UserService } from '../Service/user.service';
import { AddressService } from '../Service/address.service';
import { TravelService } from '../Service/travel.service';

export class Global {
    public static BASE_USER_ENDPOINT = 'http://localhost:50008/api/userapi/';
    public static BASE_TRAVEL_ENDPOINT = 'http://localhost:50008/api/travelapi/';
    public static BASE_ADDRESS_ENDPOINT = 'http://localhost:50008/api/addressapi/';
    public static BASE_RES_ENDPOINT = 'http://localhost:50008/api/reservationapi/';
    public static logged = false;
    public static asAdmin = false;
}