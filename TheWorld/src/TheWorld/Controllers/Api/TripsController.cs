using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using TheWorld.Models;

namespace TheWorld.Controllers.Api
{
    [Route("api/trips")]
    public class TripsController : Controller
    {
        private IWorldRepository _context;

        public TripsController(IWorldRepository context)
        {
            _context = context;
        }

        [HttpGet("")]
        public IActionResult Get()
        {
            return Ok(_context.GetAllTrips());
        }

        [HttpPost("")]
        public IActionResult Post([FromBody] Trip theTrip)
        {
            return Ok(true);
        }
        
    }
}
