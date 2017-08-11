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
    public class TravelAPIController : BaseAPIController
    {
        public HttpResponseMessage Get()
        {
            return ToJson(TravelDB.Travels.AsEnumerable());
        }

        public HttpResponseMessage Post([FromBody]Travel value)
        {
            TravelDB.Travels.Add(value);
            return ToJson(TravelDB.SaveChanges());
        }

        public HttpResponseMessage Put(int id, [FromBody]Travel value)
        {
            TravelDB.Entry(value).State = EntityState.Modified;
            return ToJson(TravelDB.SaveChanges());
        }
        public HttpResponseMessage Delete(int id)
        {
            TravelDB.Travels.Remove(TravelDB.Travels.FirstOrDefault(x => x.Id == id));
            return ToJson(TravelDB.SaveChanges());
        }
    }
}
