using Labkurs3.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Threading.Tasks;

namespace Labkurs3.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PreferencatETelController : Controller
    {
        private readonly IConfiguration _configuration;
        public PreferencatETelController(IConfiguration configuration)
        {
            _configuration = configuration;
        }

        public IActionResult Index()
        {
            return View();
        }

        [HttpGet]
        public JsonResult Get()
        {
            string query = @"
                    select Id, Name,Preferences, Quantity, Storage, Extra from dbo.PreferencatETel";
            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("Labkurs3AppCon");
            SqlDataReader myReader;
            using (SqlConnection myCon = new SqlConnection(sqlDataSource))
            {
                myCon.Open();
                using (SqlCommand myCommand = new SqlCommand(query, myCon))
                {
                    myReader = myCommand.ExecuteReader();
                    table.Load(myReader); ;

                    myReader.Close();
                    myCon.Close();
                }
            }

            return new JsonResult(table);
        }
        [HttpPost]
        public JsonResult Post(PreferencatETel preferencatETel)
        {
            string query = @"
                    insert into dbo.PreferencatETel 
                    (Name,Preferences ,Quantity,Storage,Extra)
                    values 
                    (
                    '" + preferencatETel.Name + @"'
                    ,'" + preferencatETel.Preferences + @"'
                    ,'" + preferencatETel.Quantity + @"'
                     ,'" + preferencatETel.Storage + @"'
                     ,'" + preferencatETel.Extra + @"'
                   
                    )
                    ";
            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("Labkurs3AppCon");
            SqlDataReader myReader;
            using (SqlConnection myCon = new SqlConnection(sqlDataSource))
            {
                myCon.Open();
                using (SqlCommand myCommand = new SqlCommand(query, myCon))
                {
                    myReader = myCommand.ExecuteReader();
                    table.Load(myReader); ;

                    myReader.Close();
                    myCon.Close();
                }
            }

            return new JsonResult("Added Successfully");
        }


        [HttpPut]
        public JsonResult Put(PreferencatETel preferencatETel)
        {
            string query = @"
                    update dbo.PreferencatETel set 
                    Name = '" + preferencatETel.Name + @"',
                    Preferences = '" + preferencatETel.Preferences + @"',
                    Quantity = '" + preferencatETel.Quantity + @"',
                    Storage = '" + preferencatETel.Storage + @"',
                    Extra = '" + preferencatETel.Extra + @"'

                    where Id = " + preferencatETel.Id + @" 
                    ";
            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("Labkurs3AppCon");
            SqlDataReader myReader;
            using (SqlConnection myCon = new SqlConnection(sqlDataSource))
            {
                myCon.Open();
                using (SqlCommand myCommand = new SqlCommand(query, myCon))
                {
                    myReader = myCommand.ExecuteReader();
                    table.Load(myReader); ;

                    myReader.Close();
                    myCon.Close();
                }
            }

            return new JsonResult("Updated Successfully");
        }

    }
}
