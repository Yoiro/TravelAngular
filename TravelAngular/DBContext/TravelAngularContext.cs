using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Data.Entity.ModelConfiguration.Conventions;
using System.Data.SqlClient;
using System.Linq;
using System.Web;
using TravelAngular.Models.Classes;

namespace TravelAngular.DBContext
{
    public class TravelAngularContext : DbContext
    {
        private TravelAngularContext () : base("TravelAngularContext"){}

        public static TravelAngularContext getInstance()
        {
            if (instance == null)
            {
                instance = new TravelAngularContext();
            }
            return instance;
        }

        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            modelBuilder.Conventions.Remove<PluralizingTableNameConvention>();
        }

        public static TravelAngularContext instance;
        public DbSet<Address> Addresses { get; set; }
        public DbSet<Comment> Comments { get; set; }
        public DbSet<Travel> Travels { get; set; }
        public DbSet<User> Users { get; set; }
        public DbSet<Reservation> Reservations { get; set; }
    }
}