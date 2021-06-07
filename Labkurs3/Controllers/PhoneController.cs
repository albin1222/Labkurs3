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
       
        public class PhoneController : ControllerBase
        {
            private readonly IConfiguration _configuration;


            public PhoneController(IConfiguration configuration)
            {
                _configuration = configuration;

            }
        [HttpGet]
        public JsonResult Get()
        {
            string query = @"
                    select ID, Name, Company, Preferences, Other from dbo.Phone";
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
        public JsonResult Post(Phone  ph)
        {
            string query = @"
                    insert into dbo.Phone values
                    ('" + ph.Name + @"'
                    ,'" + ph.Company + @"'
                    ,'" + ph.Preferences + @"'
                     ,'" + ph.Other + @"'

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
            return new JsonResult("Added Succesfully");
        }

        [HttpPut]
        public JsonResult Put(Phone ph)
        {
            string query = @"
                    update dbo.Phone set 
                    Name = '" + ph.Name + @"'
                    ,Company = '" + ph.Company + @"'
                     ,Preferences = '" + ph.Preferences + @"'
                    ,Other = '" + ph.Other + @"'
                    where ID = " + ph.ID + @"
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
            return new JsonResult("Updated Succesfully");
        }
        [HttpDelete("{id}")]
        public JsonResult Delete(int id)
        {
            string query = @"
                    delete from dbo.Phone 
                    where ID = " + id + @"
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
            return new JsonResult("Deleted Succesfully");
        }



    }
}
