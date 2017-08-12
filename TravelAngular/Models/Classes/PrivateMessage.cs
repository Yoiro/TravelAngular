using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Web;

namespace TravelAngular.Models.Classes
{
    public class PrivateMessage
    {
        public PrivateMessage()
        {
            Sender = new User();
            Receiver = new User();
            Content = "";
        }
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int Id { get; set; }
        public User Sender { get; set; }
        public User Receiver { get; set; }
        public string Content { get; set; }
    }
}