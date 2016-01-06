using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(CRosePersonalSite.Startup))]
namespace CRosePersonalSite
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
