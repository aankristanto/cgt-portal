using System;
using System.Configuration;
using System.Web.UI;

namespace cgt.portal
{
    public partial class _Default : Page
    {
        public static string _applicationID = ConfigurationManager.AppSettings["ApplicationID"];
        private string _sessionID = "";
        private string _PageAuthority = "Default";
        private int _open = 0, _save = 0, _update = 0, _delete = 0;

        protected void Page_Load(object sender, EventArgs e)
        {
            CekSessionLogin();

            Session.Add("cgt_User", cgt.SessionProcess.GetUser(_sessionID, "User").ToString());
            Session.Add("cgt_Name", cgt.SessionProcess.GetUser(_sessionID, "Name").ToString());
            Session.Add("cgt_Role", cgt.SessionProcess.GetUser(_sessionID, "Role").ToString());
            Session.Add("cgt_DepartmentID", cgt.SessionProcess.GetUser(_sessionID, "DepartmentID").ToString());
            Session.Add("cgt_Department", cgt.SessionProcess.GetUser(_sessionID, "Department").ToString());
            Session.Add("cgt_Factory", cgt.SessionProcess.GetUser(_sessionID, "Factory").ToString());

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
        }

        protected void CekSessionLogin()
        {
            _sessionID = (string)System.Web.HttpContext.Current.Session["SessionID"];
            string all = cgt.SessionProcess.GetRight(_applicationID, _PageAuthority, _sessionID, "UNIFIED");
            _open = int.Parse(all.Substring(0, 1));
            _save = int.Parse(all.Substring(1, 1));
            _update = int.Parse(all.Substring(2, 1));
            _delete = int.Parse(all.Substring(3, 1));
            if (_open < 1)
            {
                System.Web.HttpContext.Current.Server.Transfer("~\\Session\\NoAccess.aspx");
            }
            Page.Title = "SBRIS" + " (" + cgt.SessionProcess.GetUser(_sessionID, "Name").ToString() + ")";
        }

        protected void txtBox_TextChanged(object sender, EventArgs e)
        {
            string t1 = "";
            t1 = txtBox.Text;
            txtBundle.Text = txtBox.Text;
            
            string r =
                   cgt.DataAccess.ProsesData
                   (
                       new string[] { "sigit", "DP001", "SBRS" },
                       new string[] { "SBR", "PackingBox", "Master", "Save" },
                       new string[] { null, null },
                       new string[] { null, null, null },
                       new string[] { "S1" },
                       new string[] { t1}
                   );
            if (r != "SUCCESS")
                Console.WriteLine(r);
                //ShowMessageBox(r, 1);

            txtBox.Text = "";
            txtBox.Focus();
        }

        protected void ShowMessageBox(String strMessage, int type)
        {
            ScriptManager.RegisterClientScriptBlock(this, this.GetType(), "clientScript", cgt.MsgBox.CreateScript(strMessage, type), true);
        }
    }
}