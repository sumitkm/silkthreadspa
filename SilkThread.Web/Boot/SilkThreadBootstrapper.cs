using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace SilkThread.Web.Boot
{
    public class SilkThreadBootstrapper : Nancy.DefaultNancyBootstrapper
    {
        protected override void ConfigureConventions(
            Nancy.Conventions.NancyConventions nancyConventions)
        {
            base.ConfigureConventions(nancyConventions);

            nancyConventions.StaticContentsConventions.Add(
                Nancy.Conventions.StaticContentConventionBuilder.AddDirectory("Scripts"));
        }
    }
}