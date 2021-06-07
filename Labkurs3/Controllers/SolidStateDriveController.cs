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
    public class SolidStateDriveController : Controller
    {
        private readonly IConfiguration _configuration;


        public SolidStateDriveController(IConfiguration configuration)
        {
            _configuration = configuration;

        }

        [HttpGet]
        public JsonResult Get()
        {
            string query = @"
                    select Id, LlojiFirmes, Verzioni,GB,Qmimi
                    from dbo.SolidStateDrive
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
            return new JsonResult(table);
        }

        [HttpPost]
        public JsonResult Post(SolidStateDrive ssd)
        {
            string query = @"
                    insert into dbo.SolidStateDrive 
                    (LlojiFirmes,Verzioni,GB,Qmimi)            
                    values
                    ('" + ssd.LlojiFirmes + @"'
                    ,'" + ssd.Verzioni + @"'
                    ,'" + ssd.GB + @"'
                    ,'" + ssd.Qmimi + @"'
                    
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
        public JsonResult Put(SolidStateDrive ssd)
        {
            string query = @"
                    update dbo.SolidStateDrive set 
                    LlojiFirmes = '" + ssd.LlojiFirmes + @"'
                    ,Verzioni = '" + ssd.Verzioni + @"'
                    ,GB = '" + ssd.GB + @"'
                    ,Qmimi = '" + ssd.Qmimi + @"'
                    where Id = " + ssd.Id + @"
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
                    delete from dbo.SolidStateDrive 
                    where Id = " + id + @"
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
