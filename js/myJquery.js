
$(document).ready(function () {


    console.log($);
    console.log(jQuery);

    // $('selector').action()



    // $('p').click(function () {
    //     console.log("hello")

    // $('p').hide();  //hide the p

    // });  // do this when click on p


    $('p').click(function () {
        // console.log("hello you clicked on p", this)

        // $(this).hide();  //hide the p

        // $('#id').hide();  //to hide a paticular id 

        // $('.class').hide();  //to hide a paticular class


    });  // do this wjen click on p

    // $('p').click();   //click on p




    // 2. ID selector - this is an example of id selector

    // $('#secound').click();

    // 3. Class selector - this is an example of id selector

    // $('.odd').click();


    //other selectors

    // $('*').click() //click on all the elements

    //  $('p.odd').click() //click on all the paragraph where class is odd 

    //  $('p:first').click() //click on  the first paragraph 

    //  Events in jQuery
    //  mouse events =  click , dbclick , mounseenter,mouseleave,hover, mousedown, mouseup, mouseout,toggle, mouseover

    //Keyboard Events = krypress,keydown , keyup

    //Form Events = blur, change, focus,focusin, focusout,select,submit

    //Browser Events = error, resize, scroll

    //Document Loading Events = Jquery.holdReady, Jquery.ready , load, ready , unload


    // $('p').dblclick(function () {
    //     console.log("hello you  double clicked on p", this)

    // $(this).hide();  //hide the p

    // $('#id').hide();  //to hide a paticular id 

    // $('.class').hide();  //to hide a paticular class


    // });
    // $('p').mouseenter(function () {
    //     console.log("hello you  double clicked on p", this)

    // $(this).hide();  //hide the p

    // $('#id').hide();  //to hide a paticular id 

    // $('.class').hide();  //to hide a paticular class


    // });


    // Demoing the on method
    // $('p').on(
    //     {
    //         click: function() {
    //             console.log('thanks for clicking', this);
    //         },
    //         mouseleave: function () {
    //          console.log("mouseleave");               
    //         }
    //     }
    // )

    // $('#sarvesh').hide(10000,function () {
    //     console.log("hidden");
    // });  //it will take 10,000 mili secounds to hide after the dom is loaded  and execute  the function after 10,000 mili secounds .


    // $('#sarvesh').show(10000,function () {
    //     console.log("shown");
    // });  //same as above  but this time it will show

    // $('#beauty').click(function(){
    //     $('#sarvesh').toggle(1000);
    // })

    // $('#beauty').click(function(){
    //     $('#sarvesh').fadeToggle(1000);
    // })

    //fadeIn()
    //fadeOut()
    //fadeToggle()
    //fadeTo()

     
    //Slide Methods - speed and Callback method is optional
      
    // sliderUp()
    // $('#sarvesh').slideUp(1000, function() {
    //    console.log('slide up Dones')
    // });
      
    //slideDown()
    // $('#sarvesh').slideDown(1000);

    //slideToggle()
    // $('#sarvesh').slideToggle(1000);

    //Animate Function in jQuery
    // $('#sarvesh').animate({
    //    opacity:0.3,
    //    height:'150px',
    //    width: '350px'

    // },2000)

    // $('#sarvesh').animate({opacity:0.3},4000);
    // $('#sarvesh').animate({opacity:0.9},1000);
    // $('#sarvesh').animate({height:'150px'},4000);
    // $('#sarvesh').animate({width:'350px'},12000);

    //Manupulating html with jQuery
    
    //to get the text 
    // $('#sarvesh').text();
    // console.log($('#sarvesh').text());


    //to set the text 
    // $('#sarvesh').text('this is harry');

    //to get the html of the  inside a tag 
    // console.log($('body').html());

    //to set the html inside a tag
    // $('body').html('sarvesh is a good boy');

    //to empty a div or selector with id= "sarvesh"
    // $("#sarvesh").empty();

    //to remove a html element from dom 
    // $("#sarvesh").remove();


    // Manuplating the Form Fields with jQuery  
    //to get the value of the text area with id = "texta"

    // console.log($('#texta').val());

    //to set the value of the text area with id = "texta"
    //  $('#texta').val('here we go again');
    //  $('#inp').val('setting it to sarvesh');
       
    //  This will not work with Form fields
    //  $('#inp').html('hello');



    //  Adding the class to a particular element
    //  $("#sarvesh").addClass('new  new2');

    //Removing the Class from a particular element
    // $("#sarvesh").removeClass("new2");

     //Manuplating the css with jQuery

     //to get the css property of a element
    //  console.log($("#sarvesh").css('background-color'));

     // to set the css property of a element
    //  $("#sarvesh").css('background-color','black');
    //  $("#sarvesh").css('color','white');

    // Ajax - Art of exchanging data with the server  without Reloading the page

    // console.log($.get('https://code.jquery.com/jquery-3.6.0.js', function (data,status) {
    //     alert(data);
        
    // }));  //get request in ajax using jquery

    // $.post('https://code.jquery.com/jquery-3.6.0.js',{
    //     name: 'harry',channel: "code with harry"
    // },function (data, status) {
    //     alert(status);
        
    // });  //post request in ajax using jquery


     













     



});
