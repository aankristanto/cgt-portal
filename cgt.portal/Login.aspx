<%@ Page Language="C#" AutoEventWireup="true" MasterPageFile="~/Empty.Master" CodeBehind="Login.aspx.cs" Inherits="cgt.portal.Login" %>
<asp:Content ID="ct1" ContentPlaceHolderID="HeadContent" runat="server">
    <style type="text/css">
        .auto-style1 {
            height: 47px;
        }
    </style>
</asp:Content>
<asp:Content ID="ct2" ContentPlaceHolderID="MainContent" runat="server">
    <div style="height: 110px;">
            <div style="margin: auto; text-align: center;">
                <img src="Images/logo.png" style="height: 60px; width: auto;" />
            </div>
            <div style="text-align: center;">
                <h1 style="margin-top: 0px; color: maroon;">PT. Sumber Bintang Rejeki Semarang</h1>
            </div>
        </div>
        <hr />
        <div style="margin: auto; width: 400px; height: 300px;">
            <div class="loginheader">
                <h1>Please Login to Continue</h1>
            </div>
            <div class="loginbody">
                <div style="width: 330px; margin: auto">
                    <table>
                        <tr>
                            <td class="auto-style1">Username</td>
                            <td class="auto-style1">
                                <asp:TextBox ID="txtUsername" runat="server" Width="200px" TabIndex="1"></asp:TextBox></td>
                        </tr>
                        <tr>
                            <td class="auto-style1">Password</td>
                            <td class="auto-style1">
                                <asp:TextBox ID="txtPassword" TextMode="Password" runat="server" Width="200px" TabIndex="3"></asp:TextBox></td>
                        </tr>
                        <tr>
                            <td colspan="2">
                                <asp:Button ID="btnLogin" runat="server" Text="Login" OnClick="btnLogin_Click" TabIndex="4" />
                            </td>
                        </tr>
                    </table>
                </div>
            </div>
            <div class="loginfooter">
            </div>
        </div>
</asp:Content>

