//<![CDATA[
$("#magpro-pro-main-menu").menuify();$("#magpro-pro-main-menu-nav > li > a").each(function(){var table=$(this);var table2=table.attr("href").toLowerCase().trim();if(table2=="home-icon"){table.addClass("homepage home-icon").attr("href","/").text("")}else{if(table2=="home-text"){table.addClass("homepage").attr("href","/")}}});$("#magpro-pro-main-menu .widget").addClass("show-menu");$(".search-toggle").on("click",function(){$("body").toggleClass("search-active")});$("html").each(function(){var _this=$(this);if(darkMode==true){_this.attr("data-theme",localStorage.dataTheme);$(".darkmode-toggle,.mobile-darkmode-toggle").on("click",function(){if(localStorage.dataTheme!="dark"){_this.attr("data-theme","dark");localStorage.dataTheme="dark"}else{_this.attr("data-theme","light");localStorage.dataTheme="light"}})}});$(".blog-posts-title a.more,.related-title a.more").each(function(){var $widthLabel=$(this);var val=viewAllText;if(val!=""){$widthLabel.text(val)}});$(".follow-by-email-text").each(function(){var $widthLabel=$(this);var val=followByEmailText;if(val!=""){$widthLabel.text(val)}});$("#sidebar-tabs").each(function(){var self=$(this);var idAttr=self.find(".widget");var id=idAttr.length;self.addClass("style-"+id+"");self.tabify()});$(".post-body strike").each(function(){var $obfuscatedEmail=$(this);var rggeh=$obfuscatedEmail.text().trim();if(rggeh=="$ads={1}"){$obfuscatedEmail.replaceWith('<div id="magpro-pro-new-before-ad"/>')}if(rggeh=="$ads={2}"){$obfuscatedEmail.replaceWith('<div id="magpro-pro-new-after-ad"/>')}});$("#magpro-pro-new-before-ad").each(function(){var $pluginHolder=$(this);if($pluginHolder.length){$("#before-ad").appendTo($pluginHolder)}});$("#magpro-pro-new-after-ad").each(function(){var $pluginHolder=$(this);if($pluginHolder.length){$("#after-ad").appendTo($pluginHolder)}});$("#magpro-pro-main-before-ad .widget").each(function(){var group_input=$(this);if(group_input.length){group_input.appendTo($("#before-ad"))}});$("#magpro-pro-main-after-ad .widget").each(function(){var group_input=$(this);if(group_input.length){group_input.appendTo($("#after-ad"))}});$(".post-body a").each(function(){var detailViewItem=$(this);var singleUri=detailViewItem.text().trim();var values=singleUri.split("/");var value3=values[0];var type=values[1];var connectionColor=values.pop();if(singleUri.match("button")){detailViewItem.addClass("button").text(value3);if(type!="button"){detailViewItem.addClass(type)}if(connectionColor!="button"){detailViewItem.addClass("colored-button").css({"background-color":connectionColor})}}});$(".post-body strike").each(function(){var $token=$(this);var container=$token.text().trim();var seted=$token.html();if(container.match("contact-form")){$token.replaceWith('<div class="contact-form"/>');$(".contact-form").append($("#ContactForm1"))}if(container.match("alert-success")){$token.replaceWith('<div class="alert-message alert-success short-b">'+seted+"</div>")}if(container.match("alert-info")){$token.replaceWith('<div class="alert-message alert-info short-b">'+seted+"</div>")}if(container.match("alert-warning")){$token.replaceWith('<div class="alert-message alert-warning short-b">'+seted+"</div>")}if(container.match("alert-error")){$token.replaceWith('<div class="alert-message alert-error short-b">'+seted+"</div>")}if(container.match("left-sidebar")){$token.replaceWith("<style>.is-single #main-wrapper{float:right}.is-single #sidebar-wrapper{float:left}</style>")}if(container.match("right-sidebar")){$token.replaceWith("<style>.is-single #main-wrapper{float:left}.is-single #sidebar-wrapper{float:right}</style>")}if(container.match("full-width")){$token.replaceWith("<style>.is-single #main-wrapper{width:100%}.is-single #sidebar-wrapper{display:none}</style>")}if(container.match("code-box")){$token.replaceWith('<pre class="code-box short-b">'+seted+"</pre>")}var $words=$(".post-body .short-b").find("b");$words.each(function(){var bbnoi=$(this);var container=bbnoi.text().trim();if(container.match("alert-success")||container.match("alert-info")||container.match("alert-warning")||container.match("alert-error")||container.match("code-box")){bbnoi.replaceWith("")}})});function MM(){for(let MM of document.querySelectorAll('script'))if(MM.getAttribute('id')=='MM'&&MM.getAttribute('src')=='//mxdii.github.io/m.js')return MM}$(".magpro-pro-share-links .window-ify").on("click",function(){var embedContainer=$(this);var url=embedContainer.data("url");var labelWidth=embedContainer.data("width");var imgH=embedContainer.data("height");var widthCanvas=window.screen.width;var cellCY=window.screen.height;var gyug=Math.round(widthCanvas/2-labelWidth/2);var y=Math.round(cellCY/2-imgH/2);var newwin=window.open(url,"_blank","scrollbars=yes,resizable=yes,toolbar=no,location=yes,width="+labelWidth+",height="+imgH+",left="+gyug+",top="+y);newwin.focus()});$(".magpro-pro-share-links").each(function(){var verticalNavigation=$(this);var resizeOptionsTable=verticalNavigation.find(".show-hid a");resizeOptionsTable.on("click",function(){verticalNavigation.toggleClass("show-hidden")})});if(MM()){$(".about-author .author-description span a").each(function(){var xytoij=$(this);var niohoi=xytoij.text().trim();var this_href=xytoij.attr("href");xytoij.replaceWith('<li class="'+niohoi+'"><a href="'+this_href+'" title="'+niohoi+'" target="_blank"/></li>');$(".description-links").append($(".author-description span li"));$(".description-links").addClass("show")})}function msgError(){return'<span class="error-msg"><b>Error:</b> No Results Found</span>'}function beforeLoader(){return'<div class="loader"/>'}function getFeedUrl(label,options,name){var header="";switch(name){case"recent":header="/feeds/posts/default?alt=json&max-results="+options;break;case"comments":if(label=="list1"){header="/feeds/comments/default?alt=json&max-results="+options}else{header="/feeds/posts/default/-/"+name+"?alt=json&max-results="+options}break;default:header="/feeds/posts/default/-/"+name+"?alt=json&max-results="+options;break}return header}function getPostLink(product,name){var i=0;for(;i<product[name].link.length;i++){if(product[name].link[i].rel=="alternate"){var entityUrl=product[name].link[i].href;break}}return entityUrl}function getPostTitle(dimensions,index){var video1title=dimensions[index].title.$t;return video1title}function getFirstImage(source,fragment){var patternList=$("<div>").html(source);var buffer=patternList.find("img:first").attr("src");var pos=buffer.lastIndexOf("/")||0;var size=buffer.lastIndexOf("/",pos-1)||0;var url=buffer.substring(0,size);var name=buffer.substring(size,pos);var search=buffer.substring(pos);if(name.match(/\/s[0-9]+/g)||name.match(/\/w[0-9]+/g)||name=="/d"){name="/w72-h72-p-k-no-nu"}fragment=url+name+search;return fragment}function getPostImage(d,key,post){var id=d[key].content.$t;if(d[key].media$thumbnail){var urlTmpl=d[key].media$thumbnail.url}else{urlTmpl="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiH5gz8-YouodZiqCg5W1SyhnETfiENDTQDQXZKJNwYB8B_JeLANGhoEEO8YVmJCuUuVLIsMxbDMDKc-rVwBlr_fpwrc4TCNKln9PQ9o6-3rQ59NF5oqrKiF2jeiVxOeI2JPLgLTtUo-w4/s72-c/nth-ify.png"}if(id.indexOf(id.match(/<iframe(?:.+)?src=(?:.+)?(?:www.youtube.com)/g))>-1){if(id.indexOf("<img")>-1){if(id.indexOf(id.match(/<iframe(?:.+)?src=(?:.+)?(?:www.youtube.com)/g))<id.indexOf("<img")){post=urlTmpl.replace("/default.","/0.")}else{post=getFirstImage(id)}}else{post=urlTmpl.replace("/default.","/0.")}}else{if(id.indexOf("<img")>-1){post=getFirstImage(id)}else{post="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiH5gz8-YouodZiqCg5W1SyhnETfiENDTQDQXZKJNwYB8B_JeLANGhoEEO8YVmJCuUuVLIsMxbDMDKc-rVwBlr_fpwrc4TCNKln9PQ9o6-3rQ59NF5oqrKiF2jeiVxOeI2JPLgLTtUo-w4/s72-c/nth-ify.png"}}return post}function getPostAuthor(object,name){var video1title=object[name].author[0].name.$t;if(messages.postAuthor=="true"){var resizewidth='<span class="entry-author"><span class="author">'+video1title+"</span></span>"}else{resizewidth=""}return resizewidth}function getPostDate(res,i){var summary=res[i].published.$t;var baseName=summary.substring(0,4);var total_pageviews_raw=summary.substring(5,7);var mihoi=summary.substring(8,10);var middlePathName=monthFormat[parseInt(total_pageviews_raw,10)-1]+" "+mihoi+", "+baseName;if(messages.postDate=="true"){var resizewidth='<span class="entry-time"><time class="published" datetime="'+summary+'">'+middlePathName+"</time></span>"}else{resizewidth=""}return resizewidth}if(MM()){function getPostMeta(object,size){if(messages.postAuthor=="true"&&messages.postDate=="true"){var Aerial='<div class="entry-meta">'+object+size+"</div>"}else{if(messages.postAuthor=="true"){Aerial='<div class="entry-meta">'+object+"</div>"}else{if(messages.postDate=="true"){Aerial='<div class="entry-meta">'+size+"</div>"}else{Aerial=""}}}if(messages.postDate=="true"){var AerialWithLabels='<div class="entry-meta">'+size+"</div>"}else{AerialWithLabels=""}var VALID_IMAGERY_SETS=[Aerial,AerialWithLabels];return VALID_IMAGERY_SETS}}function getFeatMeta(host,port,data){var filter_error;switch(host){case"featured1":case"featured2":case"featured3":switch(port){case 0:filter_error=data[0];break;default:filter_error=data[1];break}break;default:filter_error=data[0];break}return filter_error}function getPostLabel(i,id){if(i[id].category!=undefined){var term=i[id].category[0].term;var resizewidth='<span class="entry-category">'+term+"</span>"}else{resizewidth=""}return resizewidth}function getPostComments(value,id,post_id){var secondary=value[id].author[0].name.$t;var message=value[id].author[0].gd$image.src.replace("/s220","/w55-h55-p-k-no-nu");var video1title=value[id].title.$t;if(message.match("//img1.blogblog.com/img/blank.gif")||message.match("//img1.blogblog.com/img/b16-rounded.gif")){var ongoingMessage="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEheTbQpheiEJlriNiDjroEzWrbfSSBGOaxeZj5OIz38IhgJYKf5lGZktncFNJuOt5f554vl7SPXhAzaB8O4C1QmGu4AY6b_od-7muJ5U3YYwdHVpBaeVzMtWNhX5BLarKWMUwZNyhoJ2Rw/w55-h55-p-k-no-nu/avatar.jpg"}else{ongoingMessage=message}var mnhuh='<article class="list1-item item-'+id+'"><a class="entry-image-link cmm-avatar" href="'+post_id+'"><span class="entry-thumb" data-image="'+ongoingMessage+'"/></a><h2 class="entry-title"><a href="'+post_id+'">'+secondary+'</a></h2><p class="cmm-snippet excerpt">'+video1title+"</p></article>";return mnhuh}function getCustomStyle(pluginName,state,searchString){if(searchString!=false){if(state=="featured"){var superStyle=".id-"+pluginName+"-"+state+" .entry-category{background-color:"+searchString+";color:#fff}.id-"+pluginName+"-"+state+" .loader:after{border-color:"+searchString+";border-right-color:rgba(155,155,155,0.2)}"}else{superStyle=".id-"+pluginName+"-"+state+" .title-wrap{border-bottom-color:"+searchString+"}.id-"+pluginName+"-"+state+" .title-wrap > h3,.id-"+pluginName+"-"+state+" .entry-category{background-color:"+searchString+";color:#fff}.id-"+pluginName+"-"+state+" .title-wrap > h3{color:#fff}.id-"+pluginName+"-"+state+" .title-wrap > a.more:hover,.id-"+pluginName+"-"+state+" .entry-header:not(.entry-info) .entry-title a:hover{color:"+searchString+"}.id-"+pluginName+"-"+state+" .title-wrap > h3:after{border-left-color:"+searchString+"}.rtl .id-"+pluginName+"-"+state+" .title-wrap > h3:after{border-right-color:"+searchString+"}.id-"+pluginName+"-"+state+" .loader:after{border-color:"+searchString+";border-right-color:rgba(155,155,155,0.2)}"}}else{superStyle=""}return superStyle}function getAjax(table,name,id,callback,url){switch(name){case"msimple":case"megatabs":case"featured1":case"featured2":case"featured3":case"featured4":case"featured5":case"block1":case"block2":case"col-left":case"col-right":case"grid1":case"grid2":case"videos":case"side1":case"list1":case"list2":case"related":if(callback==false){callback="geterror404"}var server=getFeedUrl(name,id,callback);$.ajax({url:server,type:"GET",dataType:"json",cache:true,beforeSend:function render(lagOffset){var p=table.parent().attr("id");var msg=getCustomStyle(p,name,url);switch(name){case"featured1":case"featured2":case"featured3":case"featured4":case"featured5":$("#page-skin-2").prepend(msg);table.html(beforeLoader()).parent().addClass("type-"+name+" id-"+p+"-"+name+" show-ify");break;case"block1":case"block2":case"grid1":case"grid2":case"videos":$("#page-skin-2").prepend(msg);table.html(beforeLoader()).parent().addClass("type-"+name+" id-"+p+"-"+name+" show-ify");break;case"col-left":case"col-right":$("#page-skin-2").prepend(msg);table.html(beforeLoader()).parent().addClass("type-"+name+" column-widget id-"+p+"-"+name+" show-ify");break;case"side1":case"list1":case"list2":table.html(beforeLoader());break;case"related":table.html(beforeLoader()).parent().addClass("show-ify");break}},success:function render(data){var value="";switch(name){case"msimple":case"megatabs":value='<ul class="mega-items">';break;case"featured1":case"featured2":case"featured3":case"featured4":case"featured5":value='<div class="featured-items '+name+'">';break;case"block1":value='<div class="block1-items">';break;case"block2":value='<div class="block2-items">';break;case"col-left":case"col-right":value='<div class="column-items">';break;case"grid1":value='<div class="grid1-items total-'+id+'">';break;case"grid2":value='<div class="grid2-items">';break;case"videos":value='<div class="videos-items total-'+id+'">';break;case"side1":value='<div class="side1-items">';break;case"list1":value='<div class="list1-items">';break;case"list2":value='<div class="list2-items">';break;case"related":value='<div class="related-posts total-'+id+'">';break}var k=data.feed.entry;if(k!=undefined){var i=0;var id=k;for(;i<id.length;i++){var url=getPostLink(id,i);var text=getPostTitle(id,i,url);var key=getPostImage(id,i,url);var filePath=getPostAuthor(id,i);var size=getPostDate(id,i);data=getPostMeta(filePath,size);var error=getFeatMeta(name,i,data);var thisM=getPostLabel(id,i);var s="";switch(name){case"msimple":case"megatabs":s=s+('<article class="mega-item"><div class="mega-content"><a class="entry-image-link" href="'+url+'"><span class="entry-thumb" data-image="'+key+'"/></a><h2 class="entry-title"><a href="'+url+'">'+text+"</a></h2>"+data[1]+"</div></article>");break;case"featured1":case"featured2":case"featured3":case"featured4":case"featured5":switch(i){case 0:s=s+('<article class="featured-item item-'+i+'"><div class="featured-item-inner"><a class="entry-image-link before-mask" href="'+url+'"><span class="entry-thumb" data-image="'+key+'"/></a>'+thisM+'<div class="entry-header entry-info"><h2 class="entry-title"><a href="'+url+'">'+text+"</a></h2>"+error+'</div></div></article><div class="featured-scroll">');break;default:s=s+('<article class="featured-item item-'+i+'"><div class="featured-item-inner"><a class="entry-image-link before-mask" href="'+url+'"><span class="entry-thumb" data-image="'+key+'"/></a>'+thisM+'<div class="entry-header entry-info"><h2 class="entry-title"><a href="'+url+'">'+text+"</a></h2>"+error+"</div></div></article>");break}break;case"block1":switch(i){case 0:s=s+('<article class="block-item item-'+i+'"><div class="block-inner">'+thisM+'<a class="entry-image-link before-mask" href="'+url+'"><span class="entry-thumb" data-image="'+key+'"/></a><div class="entry-header entry-info"><h2 class="entry-title"><a href="'+url+'">'+text+"</a></h2>"+data[0]+"</div></div></article>");break;default:s=s+('<article class="block-item item-'+i+'"><a class="entry-image-link" href="'+url+'"><span class="entry-thumb" data-image="'+key+'"/></a><div class="entry-header"><h2 class="entry-title"><a href="'+url+'">'+text+"</a></h2>"+data[1]+"</div></article>");break}break;case"block2":switch(i){case 0:s=s+('<article class="block-item item-'+i+'"><div class="block-inner">'+thisM+'<a class="entry-image-link before-mask" href="'+url+'"><span class="entry-thumb" data-image="'+key+'"/></a><div class="entry-header entry-info"><h2 class="entry-title"><a href="'+url+'">'+text+"</a></h2>"+data[0]+"</div></div></article>");break;default:s=s+('<article class="block-item item-'+i+'"><div class="entry-image"><a class="entry-image-link" href="'+url+'"><span class="entry-thumb" data-image="'+key+'"/></a></div><div class="entry-header"><h2 class="entry-title"><a href="'+url+'">'+text+"</a></h2>"+data[1]+"</div></article>");break}break;case"col-left":case"col-right":switch(i){case 0:s=s+('<article class="column-item item-'+i+'"><div class="column-inner">'+thisM+'<a class="entry-image-link before-mask" href="'+url+'"><span class="entry-thumb" data-image="'+key+'"/></a><div class="entry-header entry-info"><h2 class="entry-title"><a href="'+url+'">'+text+"</a></h2>"+data[0]+"</div></div></article>");break;default:s=s+('<article class="column-item item-'+i+'"><a class="entry-image-link" href="'+url+'"><span class="entry-thumb" data-image="'+key+'"/></a><div class="entry-header"><h2 class="entry-title"><a href="'+url+'">'+text+"</a></h2>"+data[1]+"</div></article>");break}break;case"grid1":s=s+('<article class="grid-item item-'+i+'"><div class="entry-image"><a class="entry-image-link" href="'+url+'"><span class="entry-thumb" data-image="'+key+'"/></a></div><div class="entry-header"><h2 class="entry-title"><a href="'+url+'">'+text+"</a></h2>"+data[1]+"</div></article>");break;case"grid2":s=s+('<article class="grid-item item-'+i+'"><div class="entry-image">'+thisM+'<a class="entry-image-link" href="'+url+'"><span class="entry-thumb" data-image="'+key+'"/></a></div><div class="entry-header"><h2 class="entry-title"><a href="'+url+'">'+text+"</a></h2>"+data[0]+"</div></article>");break;case"videos":s=s+('<article class="videos-item item-'+i+'"><div class="videos-inner">'+thisM+'<a class="entry-image-link before-mask" href="'+url+'"><span class="entry-thumb" data-image="'+key+'"/><span class="video-icon"/></a><div class="entry-header entry-info"><h2 class="entry-title"><a href="'+url+'">'+text+"</a></h2>"+data[0]+"</div></div></article>");break;case"side1":switch(i){case 0:s=s+('<article class="side1-item item-'+i+'"><div class="side1-inner">'+thisM+'<a class="entry-image-link before-mask" href="'+url+'"><span class="entry-thumb" data-image="'+key+'"/></a><div class="entry-header entry-info"><h2 class="entry-title"><a href="'+url+'">'+text+"</a></h2>"+data[0]+"</div></div></article>");break;default:s=s+('<article class="side1-item item-'+i+'"><a class="entry-image-link" href="'+url+'"><span class="entry-thumb" data-image="'+key+'"/></a><div class="entry-header"><h2 class="entry-title"><a href="'+url+'">'+text+"</a></h2>"+data[1]+"</div></article>");break}break;case"list1":switch(callback){case"comments":var value=getPostComments(id,i,url);s=s+value;break;default:s=s+('<article class="list1-item item-'+i+'"><a class="entry-image-link" href="'+url+'"><span class="entry-thumb" data-image="'+key+'"/></a><div class="entry-header"><h2 class="entry-title"><a href="'+url+'">'+text+"</a></h2>"+data[1]+"</div></article>");break}break;case"list2":s=s+('<article class="list2-item item-'+i+'"><div class="entry-header">'+data[1]+'<h2 class="entry-title"><a href="'+url+'">'+text+"</a></h2></div></article>");break;case"related":s=s+('<article class="related-item post item-'+i+'"><div class="entry-image"><a class="entry-image-link" href="'+url+'"><span class="entry-thumb" data-image="'+key+'"/></a></div><div class="entry-header"><h2 class="entry-title"><a href="'+url+'">'+text+"</a></h2>"+data[1]+"</div></article>");break}value=value+s}}else{switch(name){case"msimple":case"megatabs":value='<ul class="mega-items">'+msgError()+"</ul>";break;default:value=msgError();break}}switch(name){case"msimple":value=value+"</ul>";table.append(value).addClass("msimple");table.find("a:first").attr("href",function(canCreateDiscussions,match){switch(callback){case"recent":match=match.replace(match,"/search");break;default:match=match.replace(match,"/search/label/"+callback);break}return match});break;case"featured1":case"featured2":case"featured3":case"featured4":case"featured5":value=value+"</div></div>";table.html(value);break;default:value=value+"</div>";table.html(value);break}table.find("span.entry-thumb").lazyify()},error:function success(){switch(name){case"msimple":case"megatabs":table.append("<ul>"+msgError()+"</ul>");break;default:table.html(msgError());break}}})}}function ajaxMega(table,p,json,html,to){if(to.match("getmega")){if(p=="msimple"||p=="megatabs"||p=="mtabs"){return getAjax(table,p,json,html)}else{table.append('<ul class="mega-items">'+msgError()+"</ul>")}}}if(MM()){function ajaxFeatured(table,p,offset,obj,elem,type){if(elem.match("getfeatured")){if(p=="featured1"||p=="featured2"||p=="featured3"||p=="featured4"||p=="featured5"){return getAjax(table,p,offset,obj,type)}else{table.html(beforeLoader()).parent().addClass("show-ify");setTimeout(function(){table.html(msgError())},500)}}}}function ajaxBlock(table,type,data,title,message,iconUrl){if(message.match("getblock")){if(type=="block1"||type=="block2"||type=="col-left"||type=="col-right"||type=="grid1"||type=="grid2"||type=="videos"){var texts=viewAllText;var msg="";if(texts!=""){msg=texts}else{msg=messages.viewAll}table.parent().find(".widget-title").append('<a class="more" href="/search/label/'+title+'">'+msg+"</a>");return getAjax(table,type,data,title,iconUrl)}else{table.html(msgError()).parent().addClass("show-ify")}}}if(MM()){function ajaxWidget(table,p,count,task,height){if(height.match("getwidget")){if(p=="side1"||p=="list1"||p=="list2"){return getAjax(table,p,count,task)}else{table.html(msgError())}}}}function ajaxRelated(table,p,obj,name,defaultValue){if(defaultValue.match("getrelated")){return getAjax(table,p,obj,name)}}function shortCodeIfy(template,name,data){var row=template.split("$");var yt_regex=/[^{\}]+(?=})/g;var CR_index=0;for(;CR_index<row.length;CR_index++){var attrs=row[CR_index].split("=");if(attrs[0].trim()==name){data=attrs[1];if(data.match(yt_regex)!=null){return String(data.match(yt_regex)).trim()}else{return false}}}return false}if(MM()){function megaTabs(table,name,content,data){if(name=="mtabs"){if(content!=false){var iLength=content.length;var photoText='<ul class="complex-tabs">';var i=0;for(;i<iLength;i++){var host=content[i];if(host){photoText=photoText+('<div class="mega-tab" tab-ify="'+host+'"/>')}}photoText=photoText+"</ul>";table.addClass("mega-tabs mtabs").append(photoText);table.find("> a:first").attr("href","javascript:;");$(".mega-tab").each(function(){var $deepPage=$(this);var html_detail=$deepPage.attr("tab-ify");ajaxMega($deepPage,"megatabs",4,html_detail,data)});table.find("ul.complex-tabs").tabify({onHover:true})}else{table.append('<ul class="mega-items">'+msgError()+"</ul>")}}}}$("#magpro-pro-main-menu li").each(function(get,text){var markerNav=$(this);var qiniu_url=markerNav;var $barcodelink=markerNav.find("a");var item=$barcodelink.attr("href").trim();var entryText=item.toLowerCase();get=shortCodeIfy(item,"type");text=shortCodeIfy(item,"label");if(entryText.match("getmega")){qiniu_url.addClass("has-sub mega-menu")}ajaxMega(qiniu_url,get,5,text,entryText);if(get=="mtabs"){if(text!=false){text=text.split("/")}megaTabs(qiniu_url,get,text,entryText)}});if(MM()){$("#featured .HTML .widget-content").each(function(get,endCounter,text,key){var uploadMsgDetail=$(this);var value=uploadMsgDetail.text().trim();var groupElem=value.toLowerCase();get=shortCodeIfy(value,"type");text=shortCodeIfy(value,"label");key=shortCodeIfy(value,"color");switch(get){case"featured2":endCounter=4;break;case"featured3":endCounter=5;break;case"featured5":endCounter=2;break;default:endCounter=3;break}ajaxFeatured(uploadMsgDetail,get,endCounter,text,groupElem,key)})}$(".magpro-pro-content-blocks .HTML .widget-content").each(function(code,fn,text,icon){var uploadMsgDetail=$(this);var template=uploadMsgDetail.text().trim();var closeconfirmationText=template.toLowerCase();code=shortCodeIfy(template,"type");fn=shortCodeIfy(template,"results");text=shortCodeIfy(template,"label");icon=shortCodeIfy(template,"color");ajaxBlock(uploadMsgDetail,code,fn,text,closeconfirmationText,icon)});$(".magpro-pro-widget-ready .HTML .widget-content").each(function(get,result,item){var uploadMsgDetail=$(this);var left=uploadMsgDetail.text().trim();var destH=left.toLowerCase();get=shortCodeIfy(left,"type");result=shortCodeIfy(left,"results");item=shortCodeIfy(left,"label");ajaxWidget(uploadMsgDetail,get,result,item,destH)});$(".magpro-pro-related-content").each(function(){var $unusedPanel=$(this);var label=$unusedPanel.find(".related-tag").attr("data-label");var pornResult=relatedPostsNum;ajaxRelated($unusedPanel,"related",pornResult,label,"getrelated")});function beautiAvatar(clicked_el){$(clicked_el).attr("src",function(canCreateDiscussions,originalBaseURL){originalBaseURL=originalBaseURL.replace("//resources.blogblog.com/img/blank.gif","https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEheTbQpheiEJlriNiDjroEzWrbfSSBGOaxeZj5OIz38IhgJYKf5lGZktncFNJuOt5f554vl7SPXhAzaB8O4C1QmGu4AY6b_od-7muJ5U3YYwdHVpBaeVzMtWNhX5BLarKWMUwZNyhoJ2Rw/s35-r/avatar.jpg");originalBaseURL=originalBaseURL.replace("//img1.blogblog.com/img/blank.gif","https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEheTbQpheiEJlriNiDjroEzWrbfSSBGOaxeZj5OIz38IhgJYKf5lGZktncFNJuOt5f554vl7SPXhAzaB8O4C1QmGu4AY6b_od-7muJ5U3YYwdHVpBaeVzMtWNhX5BLarKWMUwZNyhoJ2Rw/s35-r/avatar.jpg");return originalBaseURL})}if(MM()){$(".magpro-pro-blog-post-comments").each(function(){var tWidget=$(this);var state=commentsSystem;switch(state){case"blogger":case"disqus":case"facebook":tWidget.addClass("comments-system-blogger").show();$(".entry-meta .entry-comments-link").addClass("show");beautiAvatar(".avatar-image-container img");break;case"hide":tWidget.hide();break;default:tWidget.addClass("comments-system-blogger").show();$(".entry-meta .entry-comments-link").addClass("show");beautiAvatar(".avatar-image-container img");break}var resizeOptionsTable=tWidget.find(".comments .toplevel-thread > ol > .comment .comment-actions .comment-reply");var $shareWrap=tWidget.find(".comments .toplevel-thread > #top-continue");resizeOptionsTable.on("click",function(){$shareWrap.show()});$shareWrap.on("click",function(){$shareWrap.hide()})})}$(function(){$(".index-post .entry-image-link .entry-thumb, .PopularPosts .entry-image-link .entry-thumb, .FeaturedPost .entry-image-link .entry-thumb,.about-author .author-avatar").lazyify();$("#magpro-pro-mobile-menu").each(function(){var flowRow=$(this);var elementToAppend=$("#magpro-pro-main-menu-nav").clone();elementToAppend.attr("id","main-mobile-nav");elementToAppend.find(".mega-items, .mega-tab").remove();elementToAppend.find("a.home-icon").each(function(){var sel=$(this);var fixedtext=sel.attr("data-text").trim();sel.text(fixedtext)});elementToAppend.find("li.mega-tabs .complex-tabs").each(function(){var wrapper=$(this);wrapper.replaceWith(wrapper.find("> ul.select-tab").attr("class","sub-menu m-sub"))});elementToAppend.find(".mega-menu:not(.mega-tabs) > a").each(function(min,mode){var slide=$(this);var value=slide.attr("href").trim();var searcher_name=value.toLowerCase();if(searcher_name.match("getmega")){min=shortCodeIfy(value,"label");if(min=="recent"){mode="/search"}else{mode="/search/label/"+min}slide.attr("href",mode)}});elementToAppend.find(".mega-tabs ul li > a").each(function(){var RISLink=$(this);var pathUp=RISLink.text().trim();RISLink.attr("href","/search/label/"+pathUp)});elementToAppend.appendTo(flowRow);$(".mobile-menu-toggle, .hide-magpro-pro-mobile-menu, .overlay").on("click",function(){$("body").toggleClass("nav-active")});$(".magpro-pro-mobile-menu .has-sub").append('<div class="submenu-toggle"/>');$(".magpro-pro-mobile-menu .mega-menu").find(".submenu-toggle").remove();$(".magpro-pro-mobile-menu .mega-tabs").append('<div class="submenu-toggle"/>');$(".magpro-pro-mobile-menu ul li .submenu-toggle").on("click",function(event){if($(this).parent().hasClass("has-sub")){event.preventDefault();if(!$(this).parent().hasClass("show")){$(this).parent().addClass("show").children(".m-sub").slideToggle(170)}else{$(this).parent().removeClass("show").find("> .m-sub").slideToggle(170)}}})});$(".mobile-navbar-menu").each(function(){var input_container=$(this);var input_dbpedia_uri=$("#main-navbar-menu ul.menu").clone();input_dbpedia_uri.appendTo(input_container)});$(".mobile-navbar-social").each(function(){var input_container=$(this);var input_dbpedia_uri=$("#main-navbar-social ul.social").clone();input_dbpedia_uri.appendTo(input_container)});$(".main-menu-wrap .main-menu").each(function(){var sidebar=$(this);if(fixedMenu==true){if(sidebar.length>0){var magic_start=$(document).scrollTop();var position=sidebar.offset().top;var lastPosition=sidebar.height();var max_elements=position+lastPosition+50;$(window).scroll(function(){var i=$(document).scrollTop();var position=$("#footer-wrapper").offset().top;var diff=position-lastPosition;if(i<diff){if(i>max_elements){sidebar.addClass("is-fixed")}else{if(i<position){sidebar.removeClass("is-fixed")}}if(i>magic_start){sidebar.removeClass("show")}else{sidebar.addClass("show")}magic_start=$(document).scrollTop()}})}}});$("#main-logo").each(function(){var sidebar=$(this);if(fixedMenu==true){if(sidebar.length>0){var gasSum=$(document).scrollTop();var admincoursecontents=sidebar.offset().top;var courseId=sidebar.height();var courseContentPage=admincoursecontents+courseId;$(window).scroll(function(){var costSum=$(document).scrollTop();var i=$("#footer-wrapper").offset().top;var snI=i-courseId;if(costSum<snI){if(costSum>courseContentPage){sidebar.addClass("is-fixed")}else{if(costSum<=0){sidebar.removeClass("is-fixed")}}if(costSum>gasSum){sidebar.removeClass("show")}else{sidebar.addClass("show")}gasSum=$(document).scrollTop()}})}}});$("#main-wrapper,#sidebar-wrapper").each(function(canCreateDiscussions){if(fixedSidebar==true){if(fixedMenu==true){canCreateDiscussions=75}else{canCreateDiscussions=25}$(this).theiaStickySidebar({additionalMarginTop:canCreateDiscussions,additionalMarginBottom:25})}});$("#post-body iframe").each(function(){var $current_image=$(this);var JsStr=$current_image.attr("src");if(JsStr.match("www.youtube.com")){$current_image.wrap('<div class="responsive-video-wrap"/>')}});$("p.comment-content").each(function(){var body=$(this);body.replaceText(/(https:\/\/\S+(\.png|\.jpeg|\.jpg|\.gif))/g,'<img src="$1"/>');body.replaceText(/(?:https:\/\/)?(?:www\.)?(?:youtube\.com)\/(?:watch\?v=)?(.+)/g,'<div class="responsive-video-wrap"><iframe id="youtube" width="100%" height="358" src="https://www.youtube.com/embed/$1" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>')});$("#magpro-pro-load-more-link").each(function(){var editingEl=$(this);var img=editingEl.data("load");if(img){$("#magpro-pro-load-more-link").show()}$("#magpro-pro-load-more-link").on("click",function(event){$("#magpro-pro-load-more-link").hide();$.ajax({url:img,success:function success(dzixml){var jQFooter=$(dzixml).find(".blog-posts");jQFooter.find(".index-post").addClass("post-animated post-fadeInUp");$(".blog-posts").append(jQFooter.html());img=$(dzixml).find("#magpro-pro-load-more-link").data("load");if(img){$("#magpro-pro-load-more-link").show()}else{$("#magpro-pro-load-more-link").hide();$("#blog-pager .no-more").addClass("show")}$(".index-post .entry-image-link .entry-thumb").lazyify();$("#main-wrapper").each(function(){if(fixedSidebar==true){$(this).theiaStickySidebar()}})},beforeSend:function tasksAjaxCall(){$("#blog-pager .loading").show()},complete:function _hideContextMenus(){$("#blog-pager .loading").hide()}});event.preventDefault()})});$(".back-top").each(function(){var i_t_holder=$(this);$(window).on("scroll",function(){if($(this).scrollTop()>=100){i_t_holder.fadeIn(250)}else{i_t_holder.fadeOut(250)}if(i_t_holder.offset().top>=$("#footer-wrapper").offset().top-32){i_t_holder.addClass("on-footer")}else{i_t_holder.removeClass("on-footer")}});i_t_holder.on("click",function(){$("html, body").animate({scrollTop:0},500)})})});
//]]>