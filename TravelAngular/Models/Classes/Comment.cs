using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Web;

namespace TravelAngular.Models.Classes
{
    public class Comment
    {
        public Comment()
        {
            Writer = new User();
            Content = "";
        }
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int Id { get; set; }
        public string Content { get; set; }

        public int WriterId { get; set; }
        public int ReceiverId { get; set; }

        [ForeignKey("WriterId")]
        public virtual User Writer { get; set; }
        [ForeignKey("ReceiverId")]
        public virtual User Receiver { get; set; }
    }
}