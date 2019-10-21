var doc = window.document

var oderXPath = ".//div[@id='ordersContainer']/div[@class='a-box-group a-spacing-base order']"
// CSS Selector: div.a-box-group:nth-child(5)
// CSS Path: ... div#ordersContainer div.a-box-group.a-spacing-base.order
// XPath: /html/body/div[1]/div[1]/div[1]/div[5]/div[4]

var orders = doc.evaluate( oderXPath, doc.body, null, XPathResult.ORDERED_NODE_ITERATOR_TYPE, null );

var c = 0;

var order = orders.iterateNext();


while( order ) {
	//order.style.border = "medium dotted red"; 
        c = c + 1;
        order = orders.iterateNext();
}

console.log( c )
