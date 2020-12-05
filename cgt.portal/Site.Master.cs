using System;
using System.Configuration;
using System.Web;
using System.Web.Configuration;
using System.Web.UI;

namespace cgt.portal
{
    public partial class SiteMaster : MasterPage
    {
        public static string ConnString = WebConfigurationManager.ConnectionStrings["cgt"].ToString();
        public static string _applicationID = ConfigurationManager.AppSettings["ApplicationID"];

        protected void Page_Init(object sender, EventArgs e)
        {
           
        }

        protected void Page_Load(object sender, EventArgs e)
        {
            try
            {
                string x = Session["cgt_Date"].ToString();
            }
            catch
            {
                string a;
                a = String.Format(DateTime.Now.ToShortDateString(), "dd/MM/yyyy", 1);
                Session.Add("cgt_Date", a);
            }

            try
            {
                string x = Session["cgt_Filter"].ToString();
            }
            catch
            {
                string a;
                a = String.Format(DateTime.Now.ToShortDateString(), "dd/MM/yyyy", 1);
                Session.Add("cgt_Filter", a);
            }

            //lblView.Text = FGFunction.DateToMonth(Session["DPFC_Date"].ToString());
            //string _SessionID = (string)Session["SessionID"];
            try
            {
                //lblUsername.Text = Session["cgt_Name"].ToString();
                //lblDepartment.Text = Session["cgt_Department"].ToString() + " ( " + Session["cgt_Factory"].ToString() + " ) ";
                //lblRole.Text = "( "+Session["HLIN_Factory"].ToString()+" ) "+Session["HLIN_Role"].ToString();
                //NavigationMenu.Visible = true;
            }
            catch (Exception ex)
            {
                string a = ex.Message;
                //NavigationMenu.Visible = false;
                //NavigationMenu.Visible = true;
            }
            /*
        if (lbtnUserName.Text != "")
        {
            lbtnLog.Text = "[Log Out]";
            lbtnLog.PostBackUrl = "~/Session/Logout.aspx";
            lbtnUserName.PostBackUrl = "~/Session/Account.aspx";
        }
        else
        {
            lbtnLog.Text = "[Log In]";
            lbtnLog.PostBackUrl = "~/Session/Login.aspx";
            lbtnUserName.PostBackUrl = "";
        }
         */
            //================End Session===================
            //remove cache
            Response.Cache.SetExpires(DateTime.UtcNow.AddMinutes(-1));
            Response.Cache.SetCacheability(HttpCacheability.NoCache);
            Response.Cache.SetNoStore();
        }
    }
}