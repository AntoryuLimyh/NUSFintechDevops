//Crypto News from Finnhub API

function Cryptonews ()  {

    Cnews = 'https://finnhub.io/api/v1/news?category=crypto&minId=10&token=c5dq01iad3ifm1hm6gcg'

    console.log(Cnews)
      
    $.getJSON(Cnews, function(infonews) {
    console.log("This is an example of a dynamic JSON file being served by a web server.")
    console.log(infonews);
   
    news = infonews;
    console.log(news)

   //for Date function
   var options = {
    weekday: "short",
    year: "numeric",
    month: "2-digit",
    day: "numeric"
  };
  
   //Loop through the data using foreach and put all the results into a table
   var text =`<table class="cut-off">
          <thead>
            <tr>
              
              <th>Source</th>
              <th>Summary</th>
              <th>Source</th>
              <th>Url</th>
              
            </tr>
        </thead>
  
    <tbody>`;
    news.forEach((item) => {
      // <td>${new Date(item.datetime).toLocaleString("en-SG", options)}</td>
      text = text + `<tr><<td>${item.source}</td><td word-wrap:break-word>${item.headline}</td><td style = word-break: break-all>${item.summary}</td><td>${item.url}</td><</tr>`
     
    });
    text += `</tbody></table><br>`
    //console.log(text);
  
    $(".mypanel").html(text);
  
    });

}

//Forex News from Finnhub API

function Forexnews ()  {


  Cnews = 'https://finnhub.io/api/v1/news?category=forex&minId=10&token=c5dq01iad3ifm1hm6gcg'

  console.log(Cnews)
    
  $.getJSON(Cnews, function(infonews) {
  console.log("This is an example of a dynamic JSON file being served by a web server.")
  console.log(infonews);
 
  news = infonews;
  console.log(news)

 //for Date function
 var options = {
  weekday: "short",
  year: "numeric",
  month: "2-digit",
  day: "numeric"
};

 //Loop through the data using foreach and put all the results into a table
 var text =`<table class="cut-off">
        <thead>
          <tr>
            
          <th>Source</th>
          <th>Summary</th>
          <th>Source</th>
          <th>Url</th>
          
        </tr>
    </thead>

<tbody>`;
news.forEach((item) => {
  // <td>${new Date(item.datetime).toLocaleString("en-SG", options)}</td>
  text = text + `<tr><<td>${item.source}</td><td word-wrap:break-word>${item.headline}</td><td style = word-break: break-all>${item.summary}</td><td>${item.url}</td><</tr>`
   
  });
  text += `</tbody></table><br>`
  //console.log(text);

  $(".mypanel").html(text);

  });

} 


function refresh () {
    location.reload();
   }
