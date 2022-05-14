/*
@licstart  The following is the entire license notice for the
JavaScript code in this page.

MIT License

Copyright (c) 2020 Argos Open Technologies, LLC

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

@licend  The above is the entire license notice
for the JavaScript code in this page.
*/

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
    heading.append("<th>ipfs</th>");
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
		var link = $("<a/>").append("get");
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
		var ipfsLinkTd = $("<td/>");
		for(var i = 0; i < packageData.links.length; i++){
			link = packageData.links[i]
			var protocolEndIndex = link.indexOf(":");
			if(protocolEndIndex < 1){
				continue;
			}
			var protocol = link.substring(0, protocolEndIndex);
			if (protocol === "ipfs"){
				var linkA = $("<a/>").append("ipfs");
				linkA.attr("href", link);
				ipfsLinkTd.append(linkA);
				break;
			}
			
		}
		tr.append(ipfsLinkTd);

		argospmIndexTable.append(tr);
	    });
	}
    });
});

