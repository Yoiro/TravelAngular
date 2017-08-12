using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using TravelAngular.DBContext;
using TravelAngular.Models.Classes;

namespace TravelAngular.Controllers
{
    public class CommentAPIController : BaseAPIController
    {
        public HttpResponseMessage Get()
        {
            return ToJson(TravelDB.Comments.AsEnumerable());
        }

        public HttpResponseMessage Post([FromBody]Comment value)
        {
            TravelDB.Comments.Add(value);
            return ToJson(TravelDB.SaveChanges());
        }

        public HttpResponseMessage Put(int id, [FromBody]Comment value)
        {
            TravelDB.Entry(value).State = EntityState.Modified;
            return ToJson(TravelDB.SaveChanges());
        }
        public HttpResponseMessage Delete(int id)
        {
            TravelDB.Comments.Remove(TravelDB.Comments.FirstOrDefault(x => x.Id == id));
            return ToJson(TravelDB.SaveChanges());
        }
    }
}
