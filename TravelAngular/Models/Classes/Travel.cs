using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Web;

namespace TravelAngular.Models.Classes
{
    public class Travel
    {
        public Travel()
        {
            Places = 0;
            Escales = false;
        }
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int Id { get; set; }
        public User Driver { get; set; }
        public int Places { get; set; }
        public Address Origin { get; set; }
        public Address Destination { get; set; }
        public bool Escales { get; set; }
        public System.DateTime Departure { get; set; }
    }
}