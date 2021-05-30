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
    public class ProduktiController : ControllerBase
    {
        private readonly IConfiguration _configuration;
        private readonly IWebHostEnvironment _env;

        public ProduktiController(IConfiguration configuration, IWebHostEnvironment env)
        {
            _configuration = configuration;
            _env = env;
        }

        [HttpGet]
        public JsonResult Get()
        {
            string query = @"
                    select ProduktID, EmriProduktit, NumriIProdukteve,EmriKompanis,
                    convert(varchar(10),DataENdertimit,120) as DataENdertimit
                    ,PhotoProduktit,LlojiIProduktit
                    from dbo.Produkti
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
        public JsonResult Post(Produkti prd)
        {
            string query = @"
                    insert into dbo.Produkti 
                    (EmriProduktit,NumriIProdukteve,EmriKompanis,LlojiIProduktit,DataENdertimit,PhotoProduktit)            
                    values
                    ('" + prd.EmriProduktit + @"'
                    ,'" + prd.NumriIProdukteve + @"'
                    ,'" + prd.EmriKompanis + @"'
                    ,'" + prd.LlojiIProduktit + @"'
                    ,'" + prd.DataENdertimit + @"'
                    ,'" + prd.PhotoProduktit + @"'
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
        public JsonResult Put(Produkti prd)
        {
            string query = @"
                    update dbo.Produkti set 
                    EmriProduktit = '" + prd.EmriProduktit + @"'
                    ,NumriIProdukteve = '" + prd.NumriIProdukteve + @"'
                    ,EmriKompanis = '" + prd.EmriKompanis + @"'
                    ,LlojiIProduktit = '" + prd.LlojiIProduktit + @"'
                    ,DataENdertimit = '" + prd.DataENdertimit + @"'
                    ,PhotoProduktit = '" + prd.PhotoProduktit + @"'
                    where ProduktID = " + prd.ProduktID + @"
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
                    delete from dbo.Produkti 
                    where ProduktID = " + id + @"
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

        [Route("SaveFile")]
        [HttpPost]
        public JsonResult SaveFile()
        {
            try
            {
                var httpRequest = Request.Form;
                var postedFile = httpRequest.Files[0];
                string filename = postedFile.FileName;
                var physicalPath = _env.ContentRootPath + "/Photos/" + filename;

                using (var stream = new FileStream(physicalPath, FileMode.Create))
                {
                    postedFile.CopyTo(stream);
                }
                return new JsonResult(filename);
            }

            catch (Exception)
            {

                return new JsonResult("anonymous.png");

            }
        }
        [Route("GetAllProduktiNames")]
        public JsonResult GetAllQytetiNames()
        {
            string query = @"
                    select EmriProduktit from dbo.Produkti
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
    }
}
