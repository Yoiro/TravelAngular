using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Web;

namespace TravelAngular.Models.Classes
{
    public class User
    {
        public User()
        {
            Username = "";
            Password = "";
            LastName = "";
            FirstName = "";
            Rating = 0.0;
            Reservations = new List<Reservation>();
        }

        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int Id { get; set; }
        public string Username { get; set; }
        public string Password { get; set; }
        public string LastName { get; set; }
        public string FirstName { get; set; }
        public double Rating { get; set; }

        public ICollection<Reservation> Reservations { get; set; }
    }
}