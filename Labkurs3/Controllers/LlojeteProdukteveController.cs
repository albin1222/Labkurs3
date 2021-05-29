using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.Extensions.Configuration;
using System.Data.SqlClient;
using System.Data;
using Labkurs3.Models;
using System.IO;
using Microsoft.AspNetCore.Hosting;

namespace Labkurs3.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class LlojetePrudukteveController : ControllerBase
    {

        private readonly IConfiguration _configuration;
        private readonly IWebHostEnvironment _env;

        public LlojetePrudukteveController(IConfiguration configuration, IWebHostEnvironment env)
        {
            _configuration = configuration;
            _env = env;
        }

        [HttpGet]
        public JsonResult Get()
        {
            string query = @"
            select IdeProduktit,
            convert(varchar(10),LlojiIProduktit,120) as LlojiIProduktit
            
             from dbo.LlojeteProdukteve
             ";
            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("LlojeteProdukteveAppCon");
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
        public JsonResult Post(LlojeteProdukteve llp)
        {
            string query = @"
            insert into dbo.LlojeteProdukteve 
             (IdeProduktit,LlojiIProduktit)
              values
            (
               '" + llp.IdeProduktit + @"'
              , '" + llp.LlojiIProduktit + @"'
              
               )
             ";
            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("LlojeteProdukteveAppCon");
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
        public JsonResult Put(LlojeteProdukteve llp)
        {
            string query = @"
                    update dbo.LlojeteProdukteve set 
                    IdeProduktit = '" + llp.IdeProduktit + @"'
                    ,LlojiIProduktit = '" + llp.LlojiIProduktit + @"'
                    ";
            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("LlojeteProdukteveAppCon");
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
                      delete from dbo.LlojeteProdukteve
                      where IdeProduktit = " + id + @" 
              ";
            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("LlojeteProdukteveAppCon");
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

            return new JsonResult("Deleted Successfully");
        }

        [Route("GetAllLlojiIProduktit")]
        public JsonResult GetAllLlojiIProduktit ()
        {
            string query = @"
                    select LlojiIProduktit from dbo.LlojeteProdukteve
                    ";
            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("LlojeteProdukteveAppCon");
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
    }
}

