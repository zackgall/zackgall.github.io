jQuery(document).ready(function($) {


    //skillset bar animation
    
    $('.level-bar-inner').css('width', '0');
    
    $(window).on('load', function() {

        $('.level-bar-inner').each(function() {
        
            var itemWidth = $(this).data('level');
            
            $(this).animate({
                width: itemWidth
            }, 800);
            
        });

    });
    
    // Bootstrap Tooltip for Skillset
    $('.level-label').tooltip();
    
    
    // Github Calendar
    GitHubCalendar("#github-graph", "zackgall");
    
    
    //Github Activity Feed
    GitHubActivity.feed({ username: "zackgall", selector: "#ghfeed" });


});