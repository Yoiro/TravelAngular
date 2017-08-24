using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using TravelAngular.Models.Classes;

namespace TravelAngular.DBContext
{
    public class DbFiller : System.Data.Entity.DropCreateDatabaseIfModelChanges<TravelAngularContext>
    {
        protected override void Seed(TravelAngularContext context)
        {
            using (TravelAngularContext ctx = TravelAngularContext.getInstance())
            {
                User usr = new User() { Username = "simon.degreve", Password = "test", FirstName = "Simon", LastName = "De Greve" };
                User usr1 = new User() { Username = "jolan.beer", Password = "test", FirstName = "Jolan", LastName = "Beer" };
                User usr2 = new User() { Username = "J0D3T3sM0rts", Password = "test", FirstName = "Jo", LastName = "Lopez" };
                User usr3 = new User() { Username = "P.Mercier", Password = "test", FirstName = "Pierre", LastName = "Mercier" };
                User usr4 = new User() { Username = "OpalermO", Password = "test", FirstName = "Orlando", LastName = "Palermo" };

                Address ad1 = new Address() { Country = "Belgique", Locality = "La Louvière", Num = "75", Road = "Rue Anatole France", Zipcode = 7100 };
                Address ad2 = new Address() { Country = "Belgique", Locality = "Mons", Num = "159", Road = "Chaussée de Binche", Zipcode = 7000 };
                Address ad3 = new Address() { Country = "Belgique", Locality = "Bruxelles (Ixelles)", Num = "60", Road = "Chaussée d'Ixelles", Zipcode = 1050 };
                Address ad4 = new Address() { Country = "Belgique", Locality = "Bruxelles", Num = "55", Road = "Boulevard Maurice Lemmonier", Zipcode = 1000 };
                Address ad5 = new Address() { Locality = "Namur", Num = "1", Road = "Place de la Station", Zipcode = 5000 };
                Address ad6 = new Address() { Locality = "Liège", Num = "6", Road = "Place de la Cathédrale", Zipcode = 4000 };
                Address ad7 = new Address() { Locality = "Liège", Num = "16", Road = "Rue des Célestinnes", Zipcode = 4000 };

                Travel t1 = new Travel() { Driver = usr, Origin = ad1, Destination = ad2, Departure = DateTime.Parse("22/08/2017 07:30:00").ToLocalTime() };
                Travel t2 = new Travel() { Driver = usr, Origin = ad2, Destination = ad1, Departure = DateTime.Parse("31/08/2017 13:00:00").ToLocalTime() };
                Travel t3 = new Travel() { Driver = usr1, Origin = ad3, Destination = ad4, Departure = DateTime.Parse("25/08/2017 14:00:00").ToLocalTime() };
                Travel t4 = new Travel() { Driver = usr2, Origin = ad1, Destination = ad2, Departure = DateTime.Parse("18/09/2017 12:30:00").ToLocalTime() };
                Travel t5 = new Travel() { Driver = usr3, Origin = ad6, Destination = ad2, Escales = true, Departure = DateTime.Parse("25/10/2017 10:00:00").ToLocalTime() };
                Travel t6 = new Travel() { Driver = usr4, Origin = ad5, Destination = ad7, Departure = DateTime.Parse("01/12/2017 16:00:00").ToLocalTime() };

                ctx.Users.Add(usr);
                ctx.Users.Add(usr1);
                ctx.Users.Add(usr2);
                ctx.Users.Add(usr3);
                ctx.Users.Add(usr4);
                ctx.Addresses.Add(ad1);
                ctx.Addresses.Add(ad2);
                ctx.Addresses.Add(ad3);
                ctx.Addresses.Add(ad4);
                ctx.Addresses.Add(ad5);
                ctx.Addresses.Add(ad6);
                ctx.Addresses.Add(ad7);
                ctx.Travels.Add(t1);
                ctx.Travels.Add(t2);
                ctx.Travels.Add(t3);
                ctx.Travels.Add(t4);
                ctx.Travels.Add(t5);
                ctx.Travels.Add(t6);

                ctx.SaveChanges();
            }
        }
    }
}