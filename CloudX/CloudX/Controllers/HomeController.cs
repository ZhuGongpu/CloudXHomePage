﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace CloudX.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index(string action)
        {
            ViewBag.Message = "Index page";
            if (action == "download")
                Response.Write("wwwww");

            return View();
        }
        public ActionResult Contact()
        {
            ViewBag.Message = "Contact page.";

            return View();
        }
        
        public ActionResult Feedback()
        {
            ViewBag.Message = "Feedback page.";

            return View();
        }
        public ActionResult Platform()
        {
            ViewBag.Message = "Platform page.";

            return View();
        }
    }
}
