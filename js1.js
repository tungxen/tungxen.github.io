var requestId;
trung = 0;
blood = 200;
var kill = 0;
$(document).ready(function(){
	$(document).on({
		mouseenter: function () {
			trung++;
			$(this).css("fill", "red");
		},
		mouseleave: function () {
			trung--;
			$(this).css("fill", "orange");
		}
	}, "circle"); //pass the element as an argument to .on
});
var arrayPath = [
"M272,244L650,114L492,322L175,151A193.5722842184,193.5722842184,0,1,1,195,411A254.6201369695,254.6201369695,0,0,1,572,421S127,249,727,139L738,459L458,476L732,456L872,239L865,464L867,139L600,21L313,141L68,32L412,27L53,144L575,117L593,389L615,114L540,371L188,276L465,319",
"M405,520L802,465L562,540L140,520L385,510L357,205L343,460L308,185L265,457L735,423L357,112L777,110L400,275A135.6624727431,135.6624727431,0,1,1,218,320S600,553,687,222L240,237L627,193L235,170L232,305L570,295L573,460L130,455L635,450",
"M810,465L850,183L410,303L710,305L665,138L328,130L675,80L375,187L90,73L315,28L215,415L605,403L245,305L550,325L413,470L150,502L517,510L500,235L817,55L370,52L128,218L5,5L200,205L48,13",
"M135,182L375,345L520,205L675,375L875,208L573,198L863,413L515,383L840,513L835,268L535,295L850,332L613,487L613,250L285,112L290,365L512,365L273,330L663,330L430,305L682,293L410,253L430,35L430,310L467,65L468,227",
"M175,220L690,230L350,190L378,440L422,208L507,440L305,133L582,387L760,213L705,435L875,288L853,490L448,465L802,443L628,163L528,410L118,382L362,475L495,133L565,402",
"M195,397L497,405A573.8660882153,573.8660882153,0,0,0,222,210C210,20,100,30,680,200C878,3,867,3,360,170L702,130L392,342L677,298L165,260L470,220L452,443L672,433L652,220L325,208L348,427L755,328L832,515L845,283L847,500",
"M383,548L630,336L568,525L123,376L555,358Q765,313,183,276Q805,223,367,400Q877,563,155,71L495,148L245,53L240,455L213,151L168,348L15,363L375,508L437,188L170,201L157,31L10,8L342,13L352,161",
"M155,540L611,537L351,523L630,508L336,490L745,493L728,273L758,477L488,448S438,445,750,240S23,278,358,337S401,538,668,245L488,285L795,500",
"M46,510L366,346L193,450L565,311L296,231L613,393L381,423L513,71L530,231L775,93L771,360L598,71L328,96L321,311L123,278L458,241",
"M798,515L653,425L840,260L678,68L863,12L696,212L446,203L730,240L406,160L403,370L423,120L625,113L576,327S838,25,103,318Q330,90,570,443Q866,32,293,383L531,475L306,453L525,330",
];
/*	A variable to keep track of where we are on the line
	0 = start, 1 = end */
var counter = 0;

/*	A boolean variable to keep track of the direction we want to travel in 
	true = move to the left, false move to the right */
var direction = true;

/*	First get a reference to the enclosing div and then to
	the 2 svg paths */
var svgContainer = document.getElementById("outerWrapper");
var svg ;
resetSVG();
/*	the var 'svg' contains a reference to two paths so svg.length = 2
	svg[0] is the straight line and svg[1] is the curved lines */

/*	Now get the length of those two paths */
var defaultLenght = 1000;

/*	Also get a reference to the two star polygons */
var stars = svgContainer.getElementsByTagName("circle");

var frame = 0;
function moveStar() {

	counter += 0.002;


	/*	Now the magic part. We are able to call .getPointAtLength on the tow paths to return 
		the coordinates at any point along their lengths. We then simply set the stars to be positioned 
		at these coordinates, incrementing along the lengths of the paths */
	stars[0].setAttribute("transform","translate("+ (counter * defaultLenght)  + ",0)");

	/*	Use requestAnimationFrame to recursively call moveStar() 60 times a second
		to create the illusion of movement */
	requestId = requestAnimationFrame(moveStar);
	
	//if (trung) {
	//	blood--;
	//}
	//if (blood <= 0) {
		//$('#kill').text(++kill);
		//die ();
		//window.cancelAnimationFrame(requestId);
		//stars[0].setAttribute("fill","white");
	//}
	frame++;
	if (frame == 600) {
		resetSVG ();
		frame = 0;
	}
}

function resetSVG() {
	var pathD = arrayPath[Math.floor(Math.random() * arrayPath.length)];
	circle = document.createElementNS('http://www.w3.org/2000/svg',"circle"); 
	rect = document.createElementNS('http://www.w3.org/2000/svg',"rect"); 
	circle.setAttributeNS(null, 'r', '15'); circle.setAttributeNS(null, 'cy', '300'); 
	circle.setAttributeNS(null, 'r', '15'); circle.setAttributeNS(null, 'cx', '600');
	rect.setAttributeNS(null,"x",550);
	rect.setAttributeNS(null,"y",250);
	rect.setAttributeNS(null,"width",100);
	rect.setAttributeNS(null,"height",100);

	$('#outerWrapper svg').empty();
	$('#outerWrapper svg').append(circle);
	$('#outerWrapper svg').append(rect);
	$('#kill').text(trung);
}
function die () {
	resetSVG();
	blood= 200;
	trung = false;
	//direction = true;
}

function resetDuong() {
	resetSVG();
	
}

$(window).keydown(function(e) { 
	ek = e.which;
	if (ek==37)
	{
		
	}
	if (ek==39)
	{
		
	}
	if (ek==38)
	{
		
	}
	if (ek==40)
	{

	}
	circle1 = document.createElementNS('http://www.w3.org/2000/svg',"circle");
	circle1.setAttributeNS(null, 'r', '15'); circle1.setAttributeNS(null, 'cy', '300'); 
	circle1.setAttributeNS(null, 'r', '15'); circle1.setAttributeNS(null, 'cx', '600');
	$('#outerWrapper svg').empty();
	$('#outerWrapper svg').append(circle1);
});


