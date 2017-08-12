using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using Newtonsoft.Json;
using TravelAngular.DBContext;
using System.Text;

namespace TravelAngular.Controllers
{
    public class BaseAPIController : ApiController
    {
        protected readonly TravelAngularContext TravelDB = TravelAngularContext.getInstance();

        protected HttpResponseMessage ToJson(dynamic obj)
        {
            var response = Request.CreateResponse(HttpStatusCode.OK);
            response.Content = new StringContent(JsonConvert.SerializeObject(obj), Encoding.UTF8, "application/json");
            return response;
        }
    }
}
