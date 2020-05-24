var doc = window.document
var container = doc.getElementById( "ordersContainer")
var orders = container.getElementsByClassName( "order")
console.log( orders.length )
var o = orders.item(i)
for(var i = 0; i < orders.length; i++)
{
   orders.item(i).style.border = "medium dotted red";
}
var shipments = container.getElementsByClassName( "shipment")
console.log( shipments.length )
for(var i = 0; i < shipments.length; i++)
{
   shipments.item(i).style.border = "medium dotted blue";
}
//=======================================================
function* orders( orderContainer ) {
  var o = orderContainer.getElementsByClassName( "order")
  for(var i = 0; i < o.length; i++)
  {
    yield o.item(i)
  }
}
var doc = window.document
var container = doc.getElementById( "ordersContainer")
for (const o of orders( container )) {
    console.log(o);
}


function xpathItems( root, xpath, type ) {
	return window.document.evaluate( xpath, root, null, type, null)
}
function xpathItemsString( root, xpath ) {
	return xpathItems( root, xpath, XPathResult.STRING_TYPE).stringValue.trim()
}


".//div[@id='ordersContainer']/div[@class='a-box-group a-spacing-base order']
// "/div[@class='a-box-group a-spacing-base order']"+
// "/div[@class='a-box-group a-spacing-base order']"+
var bestellnummer = doc.evaluate( 
	"./"+
	"/div[@class='a-box a-color-offset-background order-info']/div[@class='a-box-inner']"+
	"/div[@class='a-fixed-right-grid']/div[@class='a-fixed-right-grid-inner']"+
	"/div[@class='a-fixed-right-grid-col actions a-col-right']/div[@class='a-row a-size-mini']"+
	"/span[@class='a-color-secondary value']"+
	"/text()"+
	"",
	o, null, XPathResult.STRING_TYPE, null ).stringValue.trim()

var bestellnummer = xpathItemsString( o,
	"./"+
	"/div[@class='a-box a-color-offset-background order-info']/div[@class='a-box-inner']"+
	"/div[@class='a-fixed-right-grid']/div[@class='a-fixed-right-grid-inner']"+
	"/div[@class='a-fixed-right-grid-col actions a-col-right']/div[@class='a-row a-size-mini']"+
	"/span[@class='a-color-secondary value']"+
	"/text()"+
	"" )

var datum = xpathItemsString( o, "./"+
	"/div[@class='a-box a-color-offset-background order-info']/div[@class='a-box-inner']"+
	"/div[@class='a-fixed-right-grid']/div[@class='a-fixed-right-grid-inner']"+
	"/div[@class='a-fixed-right-grid-col a-col-left']/div[@class='a-row']/div[@class='a-column a-span4']"+
	"/div[@class='a-row a-size-base']/span[@class='a-color-secondary value']/text()"+
	"")


var summe = xpathItemsString( o, "./"+
	"/div[@class='a-box a-color-offset-background order-info']/div[@class='a-box-inner']"+
	"/div[@class='a-fixed-right-grid']/div[@class='a-fixed-right-grid-inner']"+
	"/div[@class='a-fixed-right-grid-col a-col-left']/div[@class='a-row']/div[@class='a-column a-span2']"+
	"/div[@class='a-row a-size-base']/span[@class='a-color-secondary value']/text()"+
	"")

var bestelldetails = xpathItemsString( o, "./"+
	"/div[@class='a-box a-color-offset-background order-info']/div[@class='a-box-inner']"+
	"/div[@class='a-fixed-right-grid']/div[@class='a-fixed-right-grid-inner']"+
	"/div[@class='a-fixed-right-grid-col actions a-col-right']/div[@class='a-row a-size-base']"+
	"/ul[@class='a-unordered-list a-nostyle a-vertical']/a[@class='a-link-normal']"+
	"")


var beschreibung = xpathItemsString( o, "./"+
	"div[@class='a-box shipment']/div[@class='a-box-inner']"+
	"/div[@class='a-fixed-right-grid a-spacing-top-medium']"+
	"/div[@class='a-fixed-right-grid-inner a-grid-vertical-align a-grid-top']"+
	"/div[@class='a-fixed-right-grid-col a-col-left']/div[@class='a-row']"+
	"/div[@class='a-fixed-left-grid a-spacing-none']/div[@class='a-fixed-left-grid-inner']"+
	"/div[@class='a-fixed-left-grid-col a-col-right']/div[@class='a-row']/a[@class='a-link-normal']"+
	"")

var r = xpathItemsString( o, "./"+
	"/div[@class='a-box shipment']/div[@class='a-box-inner']"+
	"/div[@class='a-fixed-right-grid a-spacing-top-medium']"+
	"/div[@class='a-fixed-right-grid-inner a-grid-vertical-align a-grid-top']"+
	"/div[@class='a-fixed-right-grid-col a-col-left']/div[@class='a-row']"+
	"/div[@class='a-fixed-left-grid a-spacing-none']/div[@class='a-fixed-left-grid-inner']"+
	"/div[@class='a-fixed-left-grid-col a-col-right']/div[@class='a-row']/a[@class='a-link-normal']"+
	"")

