using cgt.portal.Session;
using System;
using System.Configuration;
using System.Web.UI;

namespace cgt.portal
{
    public partial class Login : System.Web.UI.Page
    {
        private string _applicationID = ConfigurationManager.AppSettings["ApplicationID"];
        string userMessage = string.Empty;

        protected void Page_Load(object sender, EventArgs e)
        {
            txtUsername.Focus();
            if (!(Page.IsPostBack))
            {
                //GetDDLData();
            }
        }

        protected void btnLogin_Click(object sender, EventArgs e)
        {
            string _Computer = System.Web.HttpContext.Current.Request.UserHostAddress;
            string _IP = System.Web.HttpContext.Current.Request.UserHostAddress;
            string _MACAddress = "";
            string _SessionID = "";
            try
            {
                _SessionID = cgt.SessionProcess.LoginUser(txtUsername.Text, txtPassword.Text, "DP001", _Computer, _IP, _MACAddress);
                if (_SessionID == "")
                {
                    ShowMessageBox("Username and Password and Department incorrect!, Please try again", 1);
                    return;
                }
                else
                {
                    Session.Add("SessionID", _SessionID);
                    //Response.Redirect("Default.aspx");
                    Server.Transfer("Default.aspx");
                }
                //Server.Transfer("~/Default.aspx");
                //Response.Redirect("http://brainsvr/prototype/BtiPortal/Session/Login.aspx");

            }
            catch (System.Data.SqlClient.SqlException ex)
            {
                _SessionID = "";
                userMessage = ex.Message;
                ShowMessageBox("Username and Password and Department incorrect!, Please try again", 1);
            }
            finally
            {
                //if (_SessionID != "") 
                    //System.Web.HttpContext.Current.Server.Transfer("Contact.aspx");
            }
        }

        protected void ShowMessageBox(String strMessage, int type)
        {
            ScriptManager.RegisterClientScriptBlock(this, this.GetType(), "clientScript", cgt.MsgBox.CreateScript(strMessage, type), true);
        }
    }
}