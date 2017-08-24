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
            Places = 4;
            Escales = false;
            Reservations = new List<Reservation>();
        }
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int Id { get; set; }
        public int Places { get; set; }
        public bool Escales { get; set; }
        public DateTime Departure { get; set; }
        
        public int UserId { get; set; }
        public int AddressId { get; set; }
        public int DestinationId { get; set; }

        public ICollection<Reservation> Reservations { get; set; }
        [ForeignKey("UserId")]
        public virtual User Driver { get; set; }
        [ForeignKey("AddressId")]
        public virtual Address Origin { get; set; }
        [ForeignKey("DestinationId")]
        public virtual Address Destination { get; set; }
    }
}