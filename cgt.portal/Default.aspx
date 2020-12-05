<%@ Page Title="Home Page" Language="C#" MasterPageFile="~/Site.Master" AutoEventWireup="true" CodeBehind="Default.aspx.cs" Inherits="cgt.portal._Default" %>

<asp:Content runat="server" ID="FeaturedContent" ContentPlaceHolderID="HeadContent">
</asp:Content>
<asp:Content runat="server" ID="BodyContent" ContentPlaceHolderID="MainContent">
    <asp:UpdatePanel ID="upDataList" runat="server">
            <ContentTemplate>

 <asp:Label ID="Label1" runat="server" Text="Scan The Box Barcode"></asp:Label>
&nbsp;<asp:TextBox ID="txtBox" runat="server" AutoPostBack="True" OnTextChanged="txtBox_TextChanged"></asp:TextBox>
    <br />
    <br />
    <asp:Label ID="Label2" runat="server" Text="Scan TheBundle"></asp:Label>
&nbsp;<asp:TextBox ID="txtBundle" runat="server"></asp:TextBox>
&nbsp;
 <asp:UpdateProgress ID="upgDataList" runat="server" DisplayAfter="1500" DynamicLayout="False" AssociatedUpdatePanelID="upDataList">
                    <ProgressTemplate>
                        <div class="modal">
                            <div class="center">
                                <img alt="" src="Images/loading.gif" />
                            </div>
                        </div>
                    </ProgressTemplate>
                </asp:UpdateProgress>
            </ContentTemplate>
            <Triggers>
                
            </Triggers>
    </asp:UpdatePanel>
   
</asp:Content>
