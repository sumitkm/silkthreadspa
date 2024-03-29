﻿using Nancy;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace SilkThread.Web.Modules
{
    public class HomeModule : Nancy.NancyModule
    {
        public HomeModule()
        {
            Get["/"] = GetIndex;
            Get["/samples"] = GetIndex;
            Get["/settings"] = GetIndex;
            Get["/docs"] = GetIndex;
        }

        private dynamic GetIndex(dynamic arg)
        {
            return View[@"Views/Index.html"];
        }
    }
}