using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Web;

namespace TravelAngular.Models.Classes
{
    public class Reservation
    {
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int Id { get; set; }
        public User User { get; set; }
        public Travel Travel { get; set; }
        public DateTime Date { get; set; }
    }
}