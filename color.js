
 let color = ["#F1FF06", "#A5FF06", "#59FF06", "#FF6506", "#FF1E06", "#B0736C", "#B0A56C", "#06EA9D", "#06EA9D", "#06EA9D","#98D8DE","#D098D1", "#770C79","#000000","#2F062E", "#F6F6F6", "#B38282", "#EAA36B", "#E8EA6B", "#EA6BD5"]
 let i = 0;
 document.querySelector("button").addEventListener("click",  function(){
   i = i < color.length ? i = i+1 : 0;

 document.querySelector("body").style.background = color[i];
 })

