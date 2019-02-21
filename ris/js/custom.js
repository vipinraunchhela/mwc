$(document).ready(function() {

$(".back-m-scroll").mCustomScrollbar({
    setHeight: 393,
});

$(".internal-cem-table").mCustomScrollbar({
    setHeight: 210,
});

$(".table-scroll").mCustomScrollbar({
    setHeight: 82,
});

$(".tab-scroll").mCustomScrollbar({
    setHeight: 1000,
});

$(".welcome-sms").mCustomScrollbar({
    setHeight: 130,
});

$(".gb-horizontal-scroll").mCustomScrollbar({
        axis:"x",
        advanced:{autoExpandHorizontalScroll:true}
});

$(".collapse-btn").click(function(){
	$(".collapse-height").toggleClass('active');
})

$(".table-grid-show").click(function(){
	$(this).parents('.filter-box').siblings('.roaming-pack').find(".table-grid").fadeIn();
	$(this).parents('.filter-box').find(".table-grid-show").addClass("active");
	$(this).parents('.filter-box').find(".roamer-box-show").removeClass("active");
	$(this).parents('.filter-box').siblings('.roaming-pack').find(".roamer-box-hide").hide();
})

$(".roamer-box-show").click(function(){
	$(this).parents('.filter-box').siblings('.roaming-pack').find(".roamer-box-hide").fadeIn();
	$(this).parents('.filter-box').find(".roamer-box-show").addClass("active");
	$(this).parents('.filter-box').find(".table-grid-show").removeClass("active");
	$(this).parents('.filter-box').siblings('.roaming-pack').find(".table-grid").hide();
})

});


