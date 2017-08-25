using System.Data.Entity;
using System.Linq;
using System.Net.Http;
using System.Web.Http;
using TravelAngular.Models.Classes;

namespace TravelAngular.Controllers
{
    public class ReservationAPIController : BaseAPIController
    {
        public HttpResponseMessage Get()
        {
            return ToJson(TravelDB.Reservations.AsEnumerable());
        }

        public HttpResponseMessage Post([FromBody]Reservation value)
        {
            TravelDB.Reservations.Add(value);
            return ToJson(TravelDB.SaveChanges());
        }

        public HttpResponseMessage Put(int id, [FromBody]Reservation value)
        {
            TravelDB.Entry(value).State = EntityState.Modified;
            return ToJson(TravelDB.SaveChanges());
        }
        public HttpResponseMessage Delete(int id)
        {
            TravelDB.Reservations.Remove(TravelDB.Reservations.FirstOrDefault(x => x.Id == id));
            return ToJson(TravelDB.SaveChanges());
        }
    }
}
