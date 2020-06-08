var doc = window.document
var container = doc.getElementById( "ordersContainer")
var orders = container.getElementsByClassName( "order")
console.log( orders.length )

for(var o of orders)
{
  o.style.border = "medium dotted red";
  var i = o.getElementsByClassName( "order-info" );
  i.style.border = "medium dotted blue";
   
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

// Importan classes
//
// ordersContainer:	all elements of an order which can consist of several shipments
// order-info:		core data, date, summ, order number, links to details
//
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

// div.a-box.shipment div.a-box-inner div.a-fixed-right-grid.a-spacing-top-medium div.a-fixed-right-grid-inner.a-grid-vertical-align.a-grid-top div.a-fixed-right-grid-col.a-col-left div.a-row div.a-fixed-left-grid.a-spacing-none div.a-fixed-left-grid-inner

div.a-box.a-color-offset-background.order-info div.a-box-inner div.a-fixed-right-grid div.a-fixed-right-grid-inner
div.a-box.a-color-offset-background.order-info div.a-box-inner div.a-fixed-right-grid div.a-fixed-right-grid-inner
div.a-box.a-color-offset-background.order-info div.a-box-inner div.a-fixed-right-grid div.a-fixed-right-grid-inner
div.a-box.a-color-offset-background.order-info div.a-box-inner div.a-fixed-right-grid div.a-fixed-right-grid-inner
div.a-box-group:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > span:nth-child(2)

// Datum
div.a-fixed-right-grid-col.a-col-left div.a-row div.a-column.a-span4 div.a-row.a-size-base span.a-color-secondary.value
// Summe
div.a-fixed-right-grid-col.a-col-left div.a-row div.a-column.a-span2 div.a-row.a-size-base span.a-color-secondary.value
// Bestellnummer
div.a-fixed-right-grid-col.actions.a-col-right div.a-row.a-size-mini span.a-color-secondary.value
// Details
div.a-fixed-right-grid-col.actions.a-col-right div.a-row.a-size-base ul.a-unordered-list.a-nostyle.a-vertical a.a-link-normal

var r = xpathItemsString( o, "./"+
	"/div[@class='a-box shipment']/div[@class='a-box-inner']"+
	"/div[@class='a-fixed-right-grid a-spacing-top-medium']"+
	"/div[@class='a-fixed-right-grid-inner a-grid-vertical-align a-grid-top']"+
	"/div[@class='a-fixed-right-grid-col a-col-left']/div[@class='a-row']"+
	"/div[@class='a-fixed-left-grid a-spacing-none']/div[@class='a-fixed-left-grid-inner']"+
	"/div[@class='a-fixed-left-grid-col a-col-right']/div[@class='a-row']/a[@class='a-link-normal']"+
	"")

