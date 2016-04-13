var http=require('http')
var cheerio=require('cheerio')

var url='http://www.imooc.com/learn/637'


function fliterHtml(html){
   var $=cheerio.load(html)
   var charpers=$('.chapter')
   


   // [{
   // 	  chapterTitle:'', 
   // 	  videos:[
   //        title:'',
   //        id:''
   // 	  ]
   // }]

   var courseData=[]
   charpers.each(function(item){
   	 var chapter=$(this)
   	 var title=chapter.find('strong').text()
   	 var videos=chapter.find('.video').children('li')
   	 var chapterData={
   	 	title:title,   
   	 	videos:[] 
   	 }

   	 videos.each(function(item){
   	 	var video=$(this).find('.studyvideo')
   	 	var videoTitle=video.text()
   	 	var id=video.attr('href').split('video/')[1]
   	 	chapterData.videos.push({
   	 		title:videoTitle, 
   	 		id:id 
   	 	})

   	 	courseData.push(chapterData)
   	 })
   })

   return courseData
}


function printCourseInfo(courseData){
	courseData.forEach(function(item){
		var chapterTitle=item.title
		console.log(chapterTitle)
		item.videos.forEach(function(video){
			console.log('video id:'+video.id+","+video.title)
		})
	})
}

http.get(url,function(res){
	var html='';
	res.on('data',function(data){
		html+=data
	})

	res.on('end',function(){
		//console.log(html)
		var courseData= fliterHtml(html)
		printCourseInfo(courseData)
	})


}).on('error',function(){
	console.log('请求出错')
})