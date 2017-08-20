using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using TravelAngular.DBContext;
using TravelAngular.Models.Classes;
using System.Diagnostics;

namespace TravelAngular.Controllers
{
    public class TravelAPIController : BaseAPIController
    {
        public HttpResponseMessage Get()
        {
            Debug.WriteLine("GetTRAVELS\n" + TravelDB.Travels.AsEnumerable());
            Debug.WriteLine("GetTRAVELS.JSON\n" + ToJson(TravelDB.Travels.AsEnumerable()));
            return ToJson(TravelDB.Travels.AsEnumerable());
        }

        public HttpResponseMessage Post([FromBody]Travel value)
        {
            Debug.WriteLine("PostTRAVELS\n" + value);
            TravelDB.Travels.Add(value);
            Debug.WriteLine("PostTRAVELS: All \n" + TravelDB.Travels.AsEnumerable());
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
