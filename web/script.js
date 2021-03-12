var packageIndex = "https://raw.githubusercontent.com/argosopentech/argospm-index/main/index.json";

$(document).ready(function(){
    var baseDiv = $("#argospm-index-table");
    var argospmIndexTable = $("<table/>");
    baseDiv.append(argospmIndexTable);
    var heading = $("<tr/>");
    heading.append("<th>From</th>");
    heading.append("<th>To</th>");
    heading.append("<th>Download</th>");
    heading.append("<th>From code</th>");
    heading.append("<th>To code</th>");
    heading.append("<th>Package version</th>");
    heading.append("<th>Argos version</th>");
    argospmIndexTable.append(heading);
    $.ajax({url: packageIndex,
	contentType: "",
	success: function(response) {
            var data = $.parseJSON(response);
	    $.each(data, function(i, packageData) {
		var tr = $("<tr>");
		var fromName = $("<td/>").append(packageData.from_name);
		tr.append(fromName);
		var toName = $("<td/>").append(packageData.to_name);
		tr.append(toName);
		var linkTd = $("<td/>");
		var link = $("<a/>").append("Download");
		link.attr("href", packageData.links[0]);
		linkTd.append(link);
		tr.append(linkTd);
		var fromCode = $("<td/>").append(packageData.from_code);
		tr.append(fromCode);
		var toCode = $("<td/>").append(packageData.to_code);
		tr.append(toCode);
		var packageVersion = $("<td/>").append(packageData.package_version);
		tr.append(packageVersion);
		var argosVersion = $("<td/>").append(packageData.argos_version);
		tr.append(argosVersion);
		argospmIndexTable.append(tr);
	    });
	}
    });
});
