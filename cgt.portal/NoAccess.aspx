<%@ Page Title="" Language="C#" MasterPageFile="~/Empty.Master" AutoEventWireup="true" CodeBehind="NoAccess.aspx.cs" Inherits="cgt.portal.Session.NoAccess" %>
<asp:Content ID="Content1" ContentPlaceHolderID="HeadContent" runat="server">
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="MainContent" runat="server">
    <div class="FormWidth">
        <div style="height: 146px"></div>
        <div style="text-align: center; font-size: xx-large; font-weight: bold; font-style: normal; color: #FF0000; text-decoration: underline; vertical-align: middle; height: 53px;">ACCESS DENIED</div>
        <div style="text-align: center; font-size: larger; font-weight: bold; font-style: normal; color: #FF0000; vertical-align: middle">YOUR REQUEST FOR THIS PAGE HAS BEEN DENIED BECAUSE OF ACCESS CONTROL</div>
    </div>
</asp:Content>
