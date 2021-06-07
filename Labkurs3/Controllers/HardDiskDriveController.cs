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
    public class HardDiskDriveController : Controller
    {
        private readonly IConfiguration _configuration;


        public HardDiskDriveController(IConfiguration configuration)
        {
            _configuration = configuration;

        }

        [HttpGet]
        public JsonResult Get()
        {
            string query = @"
                    select Id, LlojiFirmes, Verzioni,GB,Qmimi
                    from dbo.HardDiskDrive
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
        public JsonResult Post(HardDiskDrive hdd)
        {
            string query = @"
                    insert into dbo.HardDiskDrive 
                    (LlojiFirmes,Verzioni,GB,Qmimi)            
                    values
                    ('" + hdd.LlojiFirmes + @"'
                    ,'" + hdd.Verzioni + @"'
                    ,'" + hdd.GB + @"'
                    ,'" + hdd.Qmimi + @"'
                    
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
        public JsonResult Put(HardDiskDrive hdd)
        {
            string query = @"
                    update dbo.HardDiskDrive set 
                    LlojiFirmes = '" + hdd.LlojiFirmes + @"'
                    ,Verzioni = '" + hdd.Verzioni + @"'
                    ,GB = '" + hdd.GB + @"'
                    ,Qmimi = '" + hdd.Qmimi + @"'
                    where Id = " + hdd.Id + @"
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
                    delete from dbo.HardDiskDrive 
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
