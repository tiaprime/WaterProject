﻿using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using WaterProject.API.Data;

namespace WaterProject.API.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class WaterController : ControllerBase
    {
        private WaterDbContext _waterContext;
        public WaterController(WaterDbContext temp) => _waterContext = temp;

        [HttpGet("AllProjects")]
        public IActionResult  GetProjects(int pageSize = 10, int pageNum = 1)
        {
            var x = _waterContext.Projects
                .Skip((pageNum - 1) * pageSize)
                .Take(pageSize)
                .ToList();

            var totalNumProjects = _waterContext.Projects.Count();

            var someObject = new { Projects = x, totalNumProjects = totalNumProjects };

            return Ok(someObject);
        }

        [HttpGet("FunctionalProjects")]
        public IEnumerable<Project> GetFunctionalProjects()
        {
            var x = _waterContext.Projects.Where(p => p.ProjectFunctionalityStatus == "Functional").ToList();
            return x;
        }






    }
}
