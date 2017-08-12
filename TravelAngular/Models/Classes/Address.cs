using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Web;

namespace TravelAngular.Models.Classes
{
    public class Address
    {
        public Address(){
            Country = "Belgique";
            Road = "";
            Num = "";
            Locality = "";
            Zipcode = 0;
        }

        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int Id { get; set; }
        public string Country { get; set; }
        public string Road { get; set; }
        public string Num { get; set; }
        public string Locality { get; set; }
        public int Zipcode { get; set; }
    }
}