using Microsoft.AspNet.Identity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace CRosePersonalSite.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            return View();
        }

        public ActionResult About()
        {
            ViewBag.Message = "Your application description page.";

            return View();
        }

        public JsonResult Contact(string name, string email, string phone, string message)
       {
                    new EmailService().SendAsync(new IdentityMessage{
            Destination = "cdrose15@gmail.com", Subject = "Message from my website", Body = message});

            ViewBag.Message = "Your contact page.";

            return Json("",JsonRequestBehavior.AllowGet);

        }
         

    
    }
}