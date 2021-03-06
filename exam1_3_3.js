$(document).ready(
	function () {

d3.json("exam1.json",function(dataset){ 

		var freshman=[];
		var sophomore=[];
		var junior=[];
		var senior=[];
		var total=[]
		var mark=[];



		for(item in dataset[3])
		{
			if(item!="Year")
			mark.push(""+item+"");
		}
		
		for(var i=0;i<mark.length;i++)
		{
			freshman.push( dataset[0][""+mark[i]+""] );
			sophomore.push( dataset[1][""+mark[i]+""] );
			junior.push( dataset[2][""+mark[i]+""] );
			senior.push( dataset[3][""+mark[i]+""] );
			var sum=freshman[i]+sophomore[i]+junior[i]+senior[i];
			total.push(sum);
		}

			//console.log(total);

		var mark=[];

		for(item in dataset[3])
		{
			if(item!="Year")
			mark.push(""+item+"");
		}

		var wsvg=800;
		var hsvg=550;
		var padding=80;
		var w=500;
		var h=400;
					
		svg=d3.select('.exam1_3_3').append("svg");
		svg.attr("width",wsvg).attr("height",hsvg).attr("id","exam1_3_3");

		var xscale=d3.scale.ordinal()
					.domain(d3.range(total.length))
					.rangeRoundBands([padding,w],0.3);

		var yscale=d3.scale.linear()
					.domain([0,d3.max(total,function(d){return d;})])
					.range([0,h]);


		var yscale1=d3.scale.linear()
					.domain([0,d3.max(total,function(d){return d;})])
					.range([h,0]);


		svg.selectAll(".freshman")
			.data(freshman)
			.enter()
			.append("rect")
			.attr("x",function(d,i){
				return(xscale(i));
				})
			.attr("y",function(d){
				return h-yscale(d)+padding;
			})
			.attr("width",xscale.rangeBand())
			.attr("height",function(d){
				return yscale(d);
			})
			.attr("class","freshman")
			.append("svg:title")
   			.text(function(d,i) { return "Freshman:"+d ;});


		svg.selectAll(".sophomore")
			.data(sophomore)
			.enter()
			.append("rect")
			.attr("x",function(d,i){
				return(xscale(i));
				})
			.attr("y",function(d,i){
				return h-yscale(d)+padding-yscale(freshman[i]);
			})
			.attr("width",xscale.rangeBand())
			.attr("height",function(d){
				return yscale(d);
			})
			.attr("class","sophomore")
			.append("svg:title")
   			.text(function(d,i) { return "Sophomore:"+d; });

		svg.selectAll(".junior")
            .data(junior)
			.enter()
			.append("rect")
			.attr("x",function(d,i){
				return(xscale(i));
				})
			.attr("y",function(d,i){
				return h-yscale(d)+padding-yscale(freshman[i])-yscale(sophomore[i]);
			})
			.attr("width",xscale.rangeBand())
			.attr("height",function(d){
				return yscale(d);
			})
			.attr("class","junior")
			.append("svg:title")
   			.text(function(d,i) { return "Junior:"+d; });

		svg.selectAll(".senior")
			.data(senior)
			.enter()
			.append("rect")
			.attr("x",function(d,i){
				return(xscale(i));
				})
			.attr("y",function(d,i){
				return h-yscale(d)+padding-yscale(freshman[i])-yscale(sophomore[i])-yscale(junior[i]);
			})
			.attr("width",xscale.rangeBand())
			.attr("height",function(d){
				return yscale(d);
			})
			.attr("class","senior")
			.append("svg:title")
   			.text(function(d,i) { return "Senior:"+d; });


		svg.selectAll("text")
	       .data(total)
	       .enter()
	       .append("text")
	       .text(function(d){return d;})
	       .attr("x", function(d, i) {return xscale(i)+25;})
	       .attr("y", function(d){return h-yscale(d)+padding-10; })
	       .attr("font-family", "sans-serif")
	       .attr("font-size", "11px")
	       .attr("fill", "black")
	       .attr("text-anchor", "middle")
	       .attr("class","toptotal");	  

		
	     svg.selectAll(".mark") //bottom mark
	       .data(mark)
	       .enter()
	       .append("text")
	       .text(function(d){return d;})
	       .attr("x", function(d, i) {return xscale(i)+25;})
	       .attr("y", h+padding+15)
	       .attr("class","mark")
	       .attr("font-family", "sans-serif")
	       .attr("font-size", "13px")
	       .attr("fill", "black")
	       .attr("text-anchor", "middle");

	     	svg.append("text")
	     	.text("Student Number")
	     	.attr("x",50)
	     	.attr("y",70)
	       .attr("font-family", "sans-serif")
	       .attr("font-size", "13px")
	       .attr("fill", "black")
	       .attr("text-anchor", "middle");

	       	svg.append("text")
	     	.text("University")
	     	.attr("x",510)
	     	.attr("y",480)
	       .attr("font-family", "sans-serif")
	       .attr("font-size", "13px")
	       .attr("fill", "black")
	       .attr("text-anchor", "middle");


	       svg.append("rect") //freshman rect
	     	.attr("x",570)
	     	.attr("y",325)
	     	.attr("height",20)
	     	.attr("width",20)
	     	.attr("class","freshmanmark");

	       svg.append("text") //freshman text
	     	.text("freshman")
	     	.attr("x",590)
	     	.attr("y",340)
	       .attr("font-family", "sans-serif")
	       .attr("font-size", "13px")
	       .attr("fill", "black")
	       .attr("text-anchor", "left");

	       	svg.append("rect")	//sophomore rect
	     	.attr("x",570)
	     	.attr("y",285)
	     	.attr("height",20)
	     	.attr("width",20)
	     	.attr("class","sophomoremark");

	       svg.append("text")  //sophomore text
	     	.text("sophomore")
	     	.attr("x",590)
	     	.attr("y",300)
	       .attr("font-family", "sans-serif")
	       .attr("font-size", "13px")
	       .attr("fill", "black")
	       .attr("text-anchor", "left");

	       	svg.append("rect") //junior rect
	     	.attr("x",570)
	     	.attr("y",245)
	     	.attr("height",20)
	     	.attr("width",20)
	     	.attr("class","juniormark");

	       svg.append("text") //junior text
	     	.text("junior")
	     	.attr("x",590)
	     	.attr("y",260)
	       .attr("font-family", "sans-serif")
	       .attr("font-size", "13px")
	       .attr("fill", "black")
	       .attr("text-anchor", "left");

	       svg.append("rect") //senior rect
	     	.attr("x",570)
	     	.attr("y",205)
	     	.attr("height",20)
	     	.attr("width",20)
	     	.attr("class","seniormark");

	       svg.append("text") //senior text
	     	.text("senior")
	     	.attr("x",590)
	     	.attr("y",220)
	       .attr("font-family", "sans-serif")
	       .attr("font-size", "13px")
	       .attr("fill", "black")
	       .attr("text-anchor", "left");

	       d3.selectAll(".freshman")  //click on freshman
	        .on("click",function(){
	        		
	        		svg.selectAll(".freshman")
                	.transition()
                	.duration(500)
	        		.attr("y",h+padding);

					svg.selectAll(".sophomore")
						.data(sophomore)
						 .transition()
                		.duration(500)
						.attr("y",function(d){
							return h-yscale(d)+padding;});

					svg.selectAll(".junior")
			            .data(junior)
						 .transition()
                		.duration(500)
						.attr("y",function(d,i){
							return h-yscale(d)+padding-yscale(sophomore[i]);
						});

					svg.selectAll(".senior")
						.data(senior)
						.transition()
                		.duration(500)
						.attr("y",function(d,i){
							return h-yscale(d)+padding-yscale(sophomore[i])-yscale(junior[i]);
						});
						
					svg.selectAll(".toptotal")
				       .data(total)
				       	.transition()
                		.duration(500)
				       .attr("y", function(d,i){
				       	return h-yscale(d)+padding-10+yscale(freshman[i]); 
				       });	


	        });
	
		       d3.selectAll(".sophomore") //click on sophomore
	       		 .on("click",function(){
	        		
	        		svg.selectAll(".sophomore")
                	.transition()
                	.duration(500)
	        		.attr("y",h+padding);

					svg.selectAll(".freshman")
						.data(freshman)
						 .transition()
                		.duration(500)
						.attr("y",function(d){
							return h-yscale(d)+padding;});

					svg.selectAll(".junior")
			            .data(junior)
						 .transition()
                		.duration(500)
						.attr("y",function(d,i){
							return h-yscale(d)+padding-yscale(freshman[i]);
						});

					svg.selectAll(".senior")
						.data(senior)
						.transition()
                		.duration(500)
						.attr("y",function(d,i){
							return h-yscale(d)+padding-yscale(freshman[i])-yscale(junior[i]);
						});
						
					svg.selectAll(".toptotal")
				       .data(total)
				       	.transition()
                		.duration(500)
				       .attr("y", function(d,i){
				       	return h-yscale(d)+padding-10+yscale(sophomore[i]); 
				       });	

	        });
			
				d3.selectAll(".junior") //click on junior
	       		 	.on("click",function(){
	        		
	        		svg.selectAll(".junior")
                	.transition()
                	.duration(500)
	        		.attr("y",h+padding);

					svg.selectAll(".freshman")
						.data(freshman)
						 .transition()
                		.duration(500)
						.attr("y",function(d){
							return h-yscale(d)+padding;});

					svg.selectAll(".sophomore")
			            .data(sophomore)
						 .transition()
                		.duration(500)
						.attr("y",function(d,i){
							return h-yscale(d)+padding-yscale(freshman[i]);
						});

					svg.selectAll(".senior")
						.data(senior)
						.transition()
                		.duration(500)
						.attr("y",function(d,i){
							return h-yscale(d)+padding-yscale(freshman[i])-yscale(sophomore[i]);
						});
						
					svg.selectAll(".toptotal")
				       .data(total)
				       	.transition()
                		.duration(500)
				       .attr("y", function(d,i){
				       	return h-yscale(d)+padding-10+yscale(junior[i]); 
				       });	

	        });

					d3.selectAll(".senior") //click on senior
	       		 		.on("click",function(){
	        		
		        		svg.selectAll(".senior")
		                	.transition()
		                	.duration(500)
			        		.attr("y",h+padding);

						svg.selectAll(".freshman")
							.data(freshman)
							 .transition()
	                		.duration(500)
							.attr("y",function(d){
								return h-yscale(d)+padding;});

						svg.selectAll(".sophomore")
				            .data(sophomore)
							 .transition()
	                		.duration(500)
							.attr("y",function(d,i){
								return h-yscale(d)+padding-yscale(freshman[i]);
							});

						svg.selectAll(".junior")
							.data(junior)
							.transition()
	                		.duration(500)
							.attr("y",function(d,i){
								return h-yscale(d)+padding-yscale(freshman[i])-yscale(sophomore[i]);
							});
							
						svg.selectAll(".toptotal")
					       .data(total)
					       	.transition()
	                		.duration(500)
					       .attr("y", function(d,i){
					       	return h-yscale(d)+padding-10+yscale(senior[i]); 
				       });	

	        });



	       svg.append("text")
	     	.text("The number of senior IE students in the five universities")
	     	.attr("x",10)
	     	.attr("y",25)
	       .attr("font-family", "sans-serif")
	       .attr("font-size", "30px")
	       .attr("fill", "black")
	       .attr("text-anchor", "left");

	       svg.append("text")
	     	.text("---by Ziang Hu")
	     	.attr("x",600)
	     	.attr("y",70)
	       .attr("font-family", "sans-serif")
	       .attr("font-size", "20px")
	       .attr("fill", "black")
	       .attr("text-anchor", "left");

	       svg.append("text")
	     	.text("Data sourse: http://hivelab.org/static/exam1.json")
	     	.attr("x",100)
	     	.attr("y",50)
	       .attr("font-family", "sans-serif")
	       .attr("font-size", "15px")
	       .attr("fill", "black")
	       .attr("text-anchor", "left");


	    var xAxis = d3.svg.axis();
				xAxis.scale(xscale).orient("bottom").ticks(5);
				svg.append("g").attr("class","axis").attr("id","xaxis").attr("id","xaxis").call(xAxis).attr("transform", "translate(0," + (h+padding )+ ")");

		var yAxis = d3.svg.axis();
				yAxis.scale(yscale1).orient("left").ticks(10);
				svg.append("g").attr("class","axis").attr("id","yaxis").call(yAxis).attr("transform", "translate(" + (padding )+ "," + (padding )+ ")");

	}
	)












});