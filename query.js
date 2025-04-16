$(function(){
    $('p').on(
        {
            click: function(){
                console.log("U clicked", this);
            },
            
            mouseenter: function(){
                console.log("you hovered here", this);
            }
            
        }
        
    )
}
)

// $(function(){
//     $('p').on({
//         click: function() {
//             console.log("You clicked", this);
//         },
//         mouseenter: function() {
//             console.log("You hovered here");
//         },
//         mouseleave: function() {
//             console.log("You left the hover area");
//         }
//     });
// });
