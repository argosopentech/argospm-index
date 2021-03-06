window.onload = function () {
$.getJSON('https://raw.githubusercontent.com/argosopentech/argospm-index/main/index.json', function(data) {


var table = $("<table/>");
$.each(data, function(i, rowData) {
	var row = $("<tr>");
	$.each(rowData, function(j, columnData) {
		var td = $("<td/>");
		td.append("hi");
		
		row.append(td);
	};
);
table.append(row);
});


$("body").append(table);


});
}
