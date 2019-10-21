var doc = window.document

var container = doc.getElementById( "ordersContainer")

var orders = container.getElementsByClassName( "order")
console.log( orders.length )

for(var i = 0; i < orders.length; i++)
{
   orders.item(i).style.border = "medium dotted red";
}

