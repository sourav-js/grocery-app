
var request=require("request"),

cheerio=require("cheerio"),

express=require("express"),
app=express();
 
 request("https://www.flipkart.com/search?q=woodland+shoes",function(error,response,html){
   var items=[]
   var $=cheerio.load(html)
   $("._1xHGtK").each(function(i,el){

   	  var data=$(el)
     console.log(data.find("._2B099V").children().first().attr("class"))   	   
})
})


app.listen(7888,function(){

	 console.log("server started")
})