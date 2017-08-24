using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
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
            CommentsGet = new List<Comment>();
            CommentsPosted = new List<Comment>();
        }

        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int Id { get; set; }
        [MaxLength(20), MinLength(4)]
        public string Username { get; set; }
        [MaxLength(16), MinLength(4)]
        public string Password { get; set; }
        public string LastName { get; set; }
        public string FirstName { get; set; }
        public double Rating { get; set; }

        public ICollection<Comment> CommentsPosted { get; set; }
        public ICollection<Comment> CommentsGet { get; set; }
        public ICollection<Reservation> Reservations { get; set; }
    }
}