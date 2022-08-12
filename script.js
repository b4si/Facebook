$(document).ready(function(){
    $("#signup-form").validate({
        rules:{
            fname:{
                required:true,
                minlenght:4
            },
            sname:{
                required:true,
                minlenght:4
            },
            emailid:{
                required:true,
                email:true

            },
        }

    })

})
    
