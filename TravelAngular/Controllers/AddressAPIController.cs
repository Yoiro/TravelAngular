using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using TravelAngular.DBContext;

namespace TravelAngular.Controllers
{
    public class AddressAPIController : BaseAPIController
    {
        public HttpResponseMessage Get()
        {
            return ToJson(TravelDB.Addresses.AsEnumerable());
        }

        public HttpResponseMessage Post([FromBody]Address value)
        {
            TravelDB.Addresses.Add(value);
            return ToJson(TravelDB.SaveChanges());
        }

        public HttpResponseMessage Put(int id, [FromBody]Address value)
        {
            TravelDB.Entry(value).State = EntityState.Modified;
            return ToJson(TravelDB.SaveChanges());
        }
        public HttpResponseMessage Delete(int id)
        {
            TravelDB.Addresses.Remove(TravelDB.Addresses.FirstOrDefault(x => x.Id == id));
            return ToJson(TravelDB.SaveChanges());
        }
    }
}
