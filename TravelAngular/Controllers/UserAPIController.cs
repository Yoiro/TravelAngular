﻿using System;
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
    public class UserAPIController : BaseAPIController
    {
        public HttpResponseMessage Get()
        {
            return ToJson(TravelDB.Users.AsEnumerable());
        }

        public HttpResponseMessage Get(long id)
        {
            Debug.WriteLine(TravelDB.Users.Find(id));
            return ToJson(TravelDB.Users.Find(id));
        }

        public HttpResponseMessage Post([FromBody]User value)
        {
            TravelDB.Users.Add(value);
            return ToJson(TravelDB.SaveChanges());
        }

        public HttpResponseMessage Put(int id, [FromBody]User value)
        {
            TravelDB.Entry(value).State = EntityState.Modified;
            return ToJson(TravelDB.SaveChanges());
        }
        public HttpResponseMessage Delete(int id)
        {
            TravelDB.Users.Remove(TravelDB.Users.FirstOrDefault(x => x.Id == id));
            return ToJson(TravelDB.SaveChanges());
        }
    }
}
