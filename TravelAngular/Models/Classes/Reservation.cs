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
        public DateTime ReservationDate {get; set;}

        public int UserRefId { get; set; }
        public int TravelRefId { get; set; }

        [ForeignKey("UserRefId")]
        public virtual User User { get; set; }
        [ForeignKey("TravelRefId")]
        public virtual Travel Travel { get; set; }
    }
}