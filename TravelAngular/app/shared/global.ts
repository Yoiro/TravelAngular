import { IUser } from '../Models/user';
import { IAddress } from '../Models/address';
import { ITravel } from '../Models/travel';

import { UserService } from '../Service/user.service';
import { AddressService } from '../Service/address.service';
import { TravelService } from '../Service/travel.service';

export class Global {
    public static BASE_USER_ENDPOINT = 'api/userapi/';
    public static BASE_TRAVEL_ENDPOINT = 'api/travelapi/';
    public static BASE_ADDRESS_ENDPOINT = 'api/addressapi/';
    public static logged = false;
    public static asAdmin = false;
}