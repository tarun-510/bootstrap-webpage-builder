
        $(document).ready(function() {
            var clickedDiv;

           

            $("#inputContainer").on("click", "div", function(event) {
              event.stopPropagation(); // Prevent event bubbling
              clickedDiv = $(this);              
                    // Remove border from previously selected divs
                    $('div,section').removeClass('selected-border');
                    $('.colAlignments').css('display', 'block'); 

                    clickedDiv.addClass('selected-border');
                            
                           
                    $('#classInput').val(clickedDiv.attr('class')); 
                    $('#stylesInput').val(clickedDiv.attr('style')); 
                    
                    var bgColor = clickedDiv.css("background-color");
                    var hexColor = rgbToHex(bgColor);

                    $('#bgColorpicker').val(hexColor); 
                    $("section").removeClass("selected-section-border");
                    $("p,small,h1,h2,h3,h4,h5,h6").removeClass("selected-border");
                    $('a').removeClass('selected-border');
                    $('img').removeClass('selected-border');
                    $('#anchorPropertiesDiv').hide();
                    
                    $('.textAlignments').hide();


                    //delete icon
                    
                    $('.delete-btn').remove();
                    
                    var deleteBtn = $('<button class=" delete-btn"><i class="bi bi-trash"></i></buttom> ');
                    $(this).append(deleteBtn);                   
                    deleteBtn.show();                  
                    deleteBtn.click(function(event) {
                        event.stopPropagation(); 
                        $(this).parent().remove(); 
                    });
                   
            });

            $('.row').each(function() {
                if ($(this).hasClass('selected-border')) {
                    $(this).find('.delete-icon').show();
                }
            });

            $("#inputContainer").on("click", "p,a,small,h1,h2,h3,h4,h5,h6", function(event) {
                event.stopPropagation(); 
                clickedDiv = $(this);              
                      
                      $('p,small,h1,h2,h3,h4,h5,h6').removeClass('selected-border');
                      $('.delete-btn').remove();
                      clickedDiv.addClass('selected-border');         
                             
                      $('#classInput').val(clickedDiv.attr('class')); 
                      $('#stylesInput').val(clickedDiv.attr('style'));
  
                      $('.textAlignments').show();

                      var bgColor = clickedDiv.css("background-color");
                      var hexColor = rgbToHex(bgColor);

                      var texColor = clickedDiv.css("color");
                      var thexColor = rgbToHex(texColor);


                      $("#txtColorpicker").val(thexColor);
                      $('#bgColorpicker').val(hexColor); 

                      $("div").removeClass("selected-border");
                      $('a').removeClass('selected-border');
                      $('img').removeClass('selected-border');
                      $('#anchorPropertiesDiv').hide();
                      $("section").removeClass("selected-section-border");

                      //delete icon
                    
                    $('.delete-btn').remove();
                    
                    var deleteBtn = $('<button class=" delete-btn"><i class="bi bi-trash"></i></buttom> ');
                    $(this).append(deleteBtn);                   
                    deleteBtn.show();                  
                    deleteBtn.click(function(event) {
                        event.stopPropagation(); 
                        $(this).parent().remove(); 
                    });
                     
              });


              $("#inputContainer").on("click", "section", function(event) {
                event.stopPropagation(); // Prevent event bubbling
                clickedDiv = $(this);
            
                      // Remove border from previously selected divs
                      $('section').removeClass('selected-section-border');
                      clickedDiv.addClass('selected-section-border');
            
                      $('#classInput').val(clickedDiv.attr('class')); 
                      $('#stylesInput').val(clickedDiv.attr('style'));
            
                      var bgColor = clickedDiv.css("background-color");
                      var hexColor = rgbToHex(bgColor);
                     // alert(hexColor);
                      $('#bgColorpicker').val(hexColor); 
                      $("div,p,small,h1,h2,h3,h4,h5,h6").removeClass("selected-border");
                      $('a').removeClass('selected-border');
                      $('#anchorPropertiesDiv').hide();
                      $('.textAlignments').hide();

                      $('.delete-btn').remove();
                    
                    var deleteBtn = $('<button class=" delete-btn"><i class="bi bi-trash"></i></buttom> ');
                    $(this).append(deleteBtn);                   
                    deleteBtn.show();                  
                    deleteBtn.click(function(event) {
                        event.stopPropagation(); 
                        $(this).parent().remove(); 
                    });

                     
              });
            



            $("#bgColorpicker").on("input", function() {    
                
                if (clickedDiv)
                    {
                        var selectedColor = $(this).val();                 
                        clickedDiv.css("background-color", selectedColor);
                    }
                    else { toastr.warning('Please select a div first!', 'Alert!'); }
                    });                   
                
                
            
            
            $("#txtColorpicker").on("input", function() { 
                if (clickedDiv)
                    {               
                        var selectedColor = $(this).val();                 
                        clickedDiv.css("color", selectedColor);
                    }
                    else { toastr.warning('Please select a div first!', 'Alert!'); }
                   
                });

                function rgbToHex(rgb) {
                    // Remove the 'rgb(' and ')' parts
                    rgb = rgb.substring(4, rgb.length-1)
                         .replace(/ /g, '')
                         .split(',');
            
                    var hex = rgb.map(function(x) {
                        x = parseInt(x).toString(16);
                        return (x.length == 1) ? '0' + x : x;
                    });
            
                    return '#' + hex.join('');
                }
            

            $("#inputContainer").on("click", "a", function(event) {
                $('#anchorPropertiesDiv').show();
                event.stopPropagation(); // Prevent event bubbling
                clickedDiv = $(this);              
                      $('div').removeClass('selected-border');
                      $('a').removeClass('selected-border');
                      clickedDiv.addClass('selected-border');                    
                      $('#classInput').val(clickedDiv.attr('class'));
                      $('#stylesInput').val(clickedDiv.attr('style')); 
                      
                      event.preventDefault(); 
                      var hrefValue = $(this).attr('href'); 
                      $('#hreflink').val(hrefValue); 
                      
                      var anchorText = $(this).html(); 
                      $('#anchortagText').val(anchorText);                      
                      
                     
              });

              $("#inputContainer").on("click", "img", function(event) {
                $('#imgPropertiesDiv').show();
                event.stopPropagation(); // Prevent event bubbling
                clickedDiv = $(this);              
                      // Remove border from previously selected divs
                      $('img').removeClass('selected-border');
                      clickedDiv.addClass('selected-border');                    
                      $('#classInput').val(clickedDiv.attr('class')); 
                      $('#stylesInput').val(clickedDiv.attr('style'));
                      
                      event.preventDefault(); 
                      var srcValue = $(this).attr('src'); 
                     var altValue = $(this).attr('alt');                      
                     var imgWidth = $(this).attr('width');                      
                     
                      $('#imgSrc').val(srcValue); 
                      $('#imgAlt').val(altValue);  
                      $('#imgWidth').val(imgWidth);

                      $("div,p,small,h1,h2,h3,h4,h5,h6").removeClass("selected-border");
                      $('a').removeClass('selected-border');
                      $('#anchorPropertiesDiv').hide();
                                          
                     
              });

              

            $('#updateLink').click(function() {
                if (clickedDiv) {
                  var newHref = $('#hreflink').val(); // Get the new link from the input field
                  clickedDiv.attr('href', newHref); // Set the new href to the selected anchor
                  var NewlinkText = $('#anchortagText').val() 
                  clickedDiv.html(NewlinkText);
                  alert('updated link!')
                  $('#hreflink').val('');
                }                

              });
            
              $('#updateimgSrc').click(function() {
                if (clickedDiv) {
                  var newSrc = $('#imgSrc').val();
                  var newAlt = $('#imgAlt').val();
                  var newWidth = $('#imgWidth').val();
                  
                  
                  clickedDiv.attr('src', newSrc); // Set the new href to the selected anchor
                  clickedDiv.attr('alt', newAlt); 
                  clickedDiv.attr('width', newWidth);                  
                  alert('updated link!')
                  $('#imgSrc').val('');
                  $('#imgAlt').val('');
                  $('#imgWidth').val('');
                  
                }
              });

            
            $("#inputContainer").on("click", "p,ul,small,h1,h2,h3,h4,h5,h6", function(event) {            
                $(this).attr('contenteditable', 'true');
                $('.textAlignments').show();
              });
            
             
            $("#setClass").on("click", function() {
                if (clickedDiv) {
                    // Get the class names from the input field
                    const classNames = $('#classInput').val();
                    
                    // Set the class names on the clicked div
                    clickedDiv.attr('class', classNames);
                    
                    // Optionally, reapply the selected-border class to show the selection
                    clickedDiv.addClass('selected-border');
                } else {
                    alert("Please select a div first.");
                }
            });
            $("#setStyles").on("click", function() {
                if (clickedDiv) {
                    // Get the class names from the input field
                    const newstyles = $('#stylesInput').val();
                    
                    // Set the class names on the clicked div
                    clickedDiv.attr('style', newstyles);
                    
                    // Optionally, reapply the selected-border class to show the selection
                    clickedDiv.addClass('selected-border');
                } else {
                    alert("Please select a div first.");
                }
            });

            

            /* $('section').on('mouseenter',  function() {
                $('.hidden-div').show();
            }).on('mouseleave', function() {
                $('.hidden-div').hide();
            }); */

            $('#MarginTop').click(function() {            
                var buttonValue = $(this).val();
                var inputValue = $('#classInput').val(); 
                $('#classInput').val(inputValue + ' ' + buttonValue);
                $("#setClass").trigger("click");
                
            });

            $('#MarginBottom').click(function() {            
                var buttonValue = $(this).val();
                var inputValue = $('#classInput').val(); 
                $('#classInput').val(inputValue + ' ' + buttonValue);
                $("#setClass").trigger("click");
            });

            $('#MarginLeft').click(function() {            
                var buttonValue = $(this).val();
                var inputValue = $('#classInput').val(); 
                $('#classInput').val(inputValue + ' ' + buttonValue);
                $("#setClass").trigger("click");
            });

            $('#MarginRight').click(function() {            
                var buttonValue = $(this).val();
                var inputValue = $('#classInput').val(); 
                $('#classInput').val(inputValue + ' ' + buttonValue);
                $("#setClass").trigger("click");
            });

            $('#PaddingTop').click(function() {            
                var buttonValue = $(this).val();
                var inputValue = $('#classInput').val(); 
                $('#classInput').val(inputValue + ' ' + buttonValue);
                $("#setClass").trigger("click");
            });

            $('#PaddingBottom').click(function() {            
                var buttonValue = $(this).val();
                var inputValue = $('#classInput').val(); 
                $('#classInput').val(inputValue + ' ' + buttonValue);
                $("#setClass").trigger("click");
            });

            $('#PaddingLeft').click(function() {            
                var buttonValue = $(this).val();
                var inputValue = $('#classInput').val(); 
                $('#classInput').val(inputValue + ' ' + buttonValue);
                $("#setClass").trigger("click");
            });

            $('#PaddingRight').click(function() {            
                var buttonValue = $(this).val();
                var inputValue = $('#classInput').val(); 
                $('#classInput').val(inputValue + ' ' + buttonValue);
                $("#setClass").trigger("click");
            });


            $("#inputContainer").on("click", ".row", function(event) {
               
              $('.rowAlignments').css('display', 'block');
              $('.colAlignments').css('display', 'block');              
             // alert('clicked row');      
                   
            });


            

            $('.rowAlignments').on('click', 'button', function() {
                var buttonValue = $(this).val();
                var inputValue = $('#classInput').val();
                $('#classInput').val(inputValue + ' ' + buttonValue);
                $("#setClass").trigger("click");
              });

              $('.colAlignments').on('click', 'button', function() {
                var buttonValue = $(this).val();
                var inputValue = $('#classInput').val();
                $('#classInput').val(inputValue + ' ' + buttonValue);
                $("#setClass").trigger("click");
              });

              $('.textAlignments').on('click', 'button', function() {
                var buttonValue = $(this).val();
                var inputValue = $('#classInput').val();
                $('#classInput').val(inputValue + ' ' + buttonValue);
                $("#setClass").trigger("click");
              });


            $('#headingOne').click(function() { 
                if (clickedDiv) {               
                clickedDiv.append('<h1>Heading one</h1>');
                }else { toastr.warning('Please select a div first!', 'Alert!'); }
            });
            $('#headingTwo').click(function() { 
                if (clickedDiv) {               
                clickedDiv.append('<h2>Heading Two</h2>');
                }else { toastr.warning('Please select a div first!', 'Alert!'); }
            });
            $('#headingThree').click(function() {      
                if (clickedDiv) {          
                clickedDiv.append('<h3>Heading Three</h3>');
                }else { toastr.warning('Please select a div first!', 'Alert!'); }
            });
            $('#headingFour').click(function() { 
                if (clickedDiv) {               
                clickedDiv.append('<h4>Heading Four</h4>');
                }else { toastr.warning('Please select a div first!', 'Alert!'); }
            });
            $('#headingFive').click(function() {  
                if (clickedDiv) {              
                clickedDiv.append('<h5>Heading Five</h5>');
                }else { toastr.warning('Please select a div first!', 'Alert!'); }
            });
            $('#headingSix').click(function() {  
                if (clickedDiv) {              
                clickedDiv.append('<h6>Heading Six</h6>');
                }else { toastr.warning('Please select a div first!', 'Alert!'); }
            });
            $('#Paragraph').click(function() {  
                if (clickedDiv) {              
                clickedDiv.append('<p>Normal Text</p>');
                }else { toastr.warning('Please select a div first!', 'Alert!'); }
            });
            $('#Small').click(function() {    
                if (clickedDiv) {            
                clickedDiv.append('<small>Normal Text</small>');
                }else { toastr.warning('Please select a div first!', 'Alert!'); }
            });
            $('#unorderedList').click(function() { 
                if (clickedDiv) {               
                clickedDiv.append(`
                    <ul>
                     <li>list item</li>
                     <li>list item</li>
                    </ul>`);

                }else { toastr.warning('Please select a div first!', 'Alert!'); }
            });


            $('#PrimaryButton').click(function() {                
                if (clickedDiv) {
                clickedDiv.append('<a href="#" class="btn btn-primary btn-sm">Button</a>');
                }else { toastr.warning('Please select a div first!', 'Alert!'); }
            });

            $('#Linkbutton').click(function() {                
                if (clickedDiv) {
                clickedDiv.append('<a href="#" class="btn btn-sm btn-link text-decoration-none">Link</a>');
                }else { toastr.warning('Please select a div first!', 'Alert!'); }
            });

            


            $('#Iinfobutton').click(function() {   
                if (clickedDiv) {             
                clickedDiv.append('<a href="#" class="btn btn-info btn-sm">Im a link</a>');
                }else {
                    toastr.warning('Please select a div first!', 'Alert!');
                    //alert("Please select a div first.");
                }
            });
            
            
            $('#spacer-for-md-append').click(function() { 
                clickedDiv.append(`<div class="container spacer-for-md d-none d-sm-block">
                <div class="row" style="padding:1.5rem;">
                    <!--Im a space - Hidden only on xs-->
                </div>
                </div>`);
            });

           
            $('#spacer-for-sm-append').click(function() { 
                clickedDiv.append(`<div class="container spacer-for-md d-none d-sm-block">
                <div class="row" style="padding:0.75rem;">
                    <!--Im a space - Hidden only on xs-->
                </div>
                </div>`);
            });

            $('#insertDiv').click(function() {   
                
                if (clickedDiv) {  

                    clickedDiv.append('<div class=""></div>');

                    }else { toastr.warning('Please select a div first!', 'Alert!'); }               
                
               
            });

            $('#wrapinDiv').click(function() {    
                if (clickedDiv) {  
                            
                    clickedDiv.wrap('<div class=""></div>');

                    }else { toastr.warning('Please select a div first!', 'Alert!'); }  
                

            });
            $('#wrapinFC').click(function() {    
                if (clickedDiv) {  
                            
                    clickedDiv.wrap('<section class="container-fluid"></section>');

                    }else { toastr.warning('Please select a div first!', 'Alert!'); }  

                
            });

            

            

            $('#oneColumn').click(function() { 

                if (clickedDiv) {  
                            
                    clickedDiv.append(`<div class="row">
                        <div class="col-md-12"> </div>
                        </div>`);

                    }else { toastr.warning('Please select a div first!', 'Alert!'); } 

                
            });

            $('#twoColumn').click(function() {   
                if (clickedDiv) {  
                            
                    clickedDiv.append(`<div class="row">
                        <div class="col-md-6">
                        </div>
                        <div class="col-md-6">
                        </div>
                        </div>`);

                    }else { toastr.warning('Please select a div first!', 'Alert!'); } 

               
            });

            $('#threeColumn').click(function() {  
                if (clickedDiv) {  
                            
                    clickedDiv.append(`<div class="row">
                        <div class="col-md-4">
                        </div>
                        <div class="col-md-4">
                        </div>
                        <div class="col-md-4">
                        </div>
                        </div>`);

                    }else { toastr.warning('Please select a div first!', 'Alert!'); } 

                            });

            $('#fourColumn').click(function() {   
                
                if (clickedDiv) {  
                            
                    clickedDiv.append(`<div class="row">
                        <div class="col-md-3">
                        </div>
                        <div class="col-md-3">
                        </div>
                        <div class="col-md-3">
                        </div>
                        <div class="col-md-3">
                        </div>
                        </div>`);

                    }else { toastr.warning('Please select a div first!', 'Alert!'); }                 

                
            });

            $('#sixColumn').click(function() {  
                
                if (clickedDiv) {  
                            
                    clickedDiv.append(`<div class="row">
                        <div class="col-md-2">
                        </div>
                        <div class="col-md-2">
                        </div>
                        <div class="col-md-2">
                        </div>
                        <div class="col-md-2">
                        </div>
                        <div class="col-md-2">
                        </div>
                        <div class="col-md-2">
                        </div>
                        </div>`);
                    }else { toastr.warning('Please select a div first!', 'Alert!'); }                 



                
            });

            $('#addImg').click(function() {  
                clickedDiv.append("<img src='https://placehold.co/100x50?text=Hello+World' width='100' alt='Appended Image'>");
            });             

           // $('#inputContainer').on('click', '#deleteme', function() {
           //     clickedDiv.remove();
          //     });

            $('#deleteme').click(function() { 
                if (clickedDiv) {          
                    clickedDiv.remove();
                    }else { toastr.warning('Please select a div first!', 'Alert!'); }               
                
                
            });
            $('#copyme').click(function() {                
                //var clickedDiv = $(this); 
                if (clickedDiv) {  

                    var copiedDiv = clickedDiv.clone();
                    copiedDiv.insertAfter(clickedDiv);

                    }else { toastr.warning('Please select a div first!', 'Alert!'); } 

                
            });          

            $('#movetoNext').click(function() {
                if (clickedDiv) {
                    var nextDiv = clickedDiv.next();
                    if (nextDiv.length) {
                        clickedDiv.insertAfter(nextDiv);
                    } else {
                        alert("No next section to move after.");
                    }
                } else {
                    alert("Please select a div first.");
                }
            });

            $('#movetoTop').click(function() {
                if (clickedDiv) {
                    var preDiv = clickedDiv.prev();
                    if (preDiv.length) {
                        clickedDiv.insertBefore(preDiv);
                    } else {
                        alert("No next section to move after.");
                    }
                } else {
                    alert("Please select a div first.");
                }
            });

                 
            
            $('#FC').click(function() {                
                //$('#inputContainer').append('<section class="container p-2"><div class="row"><div class="col-md-12"><div></div></div></div></section>');
                $.get('FullContainer.html', function(data) {                    
                    $('#inputContainer').append(data);
                }).fail(function(xhr, status, error) {                    
                    var msg = "Sorry, but there was an error: ";
                    $("#inputContainer").append('<p>' + msg + xhr.status + " " + xhr.statusText + '</p>');
                });
            });
            $('#1C').click(function() {                
                //$('#inputContainer').append('<section class="container p-2"><div class="row"><div class="col-md-12"><div></div></div></div></section>');
                $.get('Column-one.html', function(data) {                    
                    $('#inputContainer').append(data);
                }).fail(function(xhr, status, error) {                    
                    var msg = "Sorry, but there was an error: ";
                    $("#inputContainer").append('<p>' + msg + xhr.status + " " + xhr.statusText + '</p>');
                });
            });

            $('#2C').click(function() {                
                $('#inputContainer').append(`
                    <section class="container p-2">
                    <div class="row">
                    <div class="col-md-6">
                    <div>
                    </div>
                    </div>
                    <div class="col-md-6">
                    <div>
                    </div>
                    </div>
                    </div>
                    </section>`);
            });

            $('#3C').click(function() {                
                $('#inputContainer').append(`
                    <section class="container p-2">
                    <div class="row">
                    <div class="col-md-4">
                    <div>
                    </div>
                    </div>
                    <div class="col-md-4">
                    <div>
                    </div>
                    </div>
                    <div class="col-md-4">
                    <div>
                    </div>
                    </div>
                    </div>
                    </section>`);
            });

            $('#4C').click(function() {
                $('#inputContainer').append(`
                    <section class="container p-2">
                    <div class="row">
                    <div class="col-md-3">
                    <div>
                    </div>
                    </div>
                    <div class="col-md-3">
                    <div>
                    </div>
                    </div>
                    <div class="col-md-3">
                    <div>
                    </div>
                    </div>
                    <div class="col-md-3">
                    <div>
                    </div>
                    </div>
                    </div>
                    </section>`);
            });

            $('#6C').click(function() {                
                $('#inputContainer').append(`
                    <section class="container p-2">
                    <div class="row">
                    <div class="col-md-2">
                    <div>
                    </div>
                    </div>
                    <div class="col-md-2">
                    <div>
                    </div>
                    </div>
                    <div class="col-md-2">
                    <div>
                    </div>
                    </div>
                    <div class="col-md-2">
                    <div>
                    </div>
                    </div>
                    <div class="col-md-2">
                    <div>
                    </div>
                    </div>
                    <div class="col-md-2">
                    <div>
                    </div>
                    </div>
                    </div>
                    </section>`);
            });

            $('#spacer-for-md').click(function() { 
                $('#inputContainer').append(`<div class="container spacer-for-md d-none d-sm-block">
                <div class="row" style="padding:1.5rem;">
                    <!--Im a space - Hidden only on xs-->
                </div>
                </div>`);
            });
            $('#featured-01').click(function() { 
                $('#inputContainer').append(`
                      <section>
                        <div class="container">
                        <div class="row py-5">
                            <div class="col-md-7">
                            <img class="rounded-5 w-100" src="https://picsum.photos/800/600"/>
                            </div>
                            <div class="col-md-5 d-flex align-items-center">
                            <div>
                            <h1>Boost your productivity with our to-do app</h1>
                            <p>Lorem ipsum dolor sit amet consectetur adipiscing eli mattis sit phasellus mollis sit aliquam sit nullam neque ultrices</p>
                            <div class="d-flex gap-4 ">
                                <a href="#" class="btn btn-primary px-4 ">Get Starte</a> 
                                <a href="#" class="btn btn-outline-primary px-4" >Talk Sales</a>
                            </div>
                            </div>
                            </div>
                        </div>
                        </div>
                    </section>    
                    `);
            });

            $('#inputContainer').on('click', '.deletebtn', function() {
             $(this).closest('section').remove();
            });
            

            $('#inputContainer').on('click', '#2C', function() {
                $(this).closest('div').append(`
                    <section class="container p-2">
                    <div class="row">
                    <div class="col-md-6">
                    <div>
                    </div>
                    <div>
                    <div class="col-md-6">
                    </div>
                    </div>
                    </section>`);
            });

            $('#inputContainer').on('click', '#4C', function() {
                $(this).append(`
                    <section class="container p-2">
                    <div class="row">
                    <div class="col-md-3">
                    <div>
                    </div>
                    </div>
                    <div class="col-md-3">
                    <div>
                    </div>
                    </div>
                    <div class="col-md-3">
                    <div>
                    </div>
                    </div>
                    <div class="col-md-3">
                    </div>
                    </div>
                    </section>`);
            });


            $('#inputContainer').on('click', '.innerButton', function() {
                $(this).parent().append('<p>New content added!</p>');
            });


            $("#generateCode").click(function() {
                $("#htmlCode").show();
                var htmlCode = $("#inputContainer").html();
                var cleanedHtmlCode = htmlCode.replace(/contenteditable="true"/g, "");
                $("#htmlCode").val(cleanedHtmlCode);
                $("#downloadHtml").show();
                $("#downloadHtmlbody").show();
                

                var editor = CodeMirror.fromTextArea(document.getElementById("htmlCode"), {
                    mode: "text/html",
                    lineNumbers: true,
                    theme: "default"
                });
               
            });  
            $("#setCode").click(function() {

                
                var htmlCode = $("#htmlCode").val();
                $("#inputContainer").html(htmlCode);

                //var htmlCode = editor.getValue();
                //$("#inputContainer").text(htmlCode);
                
            }); 
            $("#downloadHtml").click(function() {
                var cleanedHtmlCode = $("#htmlCode").val();

                var head = `<!DOCTYPE html>
                            <html lang="en">
                            <head>
                                <meta charset="UTF-8">
                                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                                <title>Title of the page</title>
                                <link rel="stylesheet" href="draggable-resizable-modal/css/modalbox.css" type="text/css"/>
                                <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
                                <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">
                                <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>
                            </head>
                            <body>
                            `;

                var footer = `</body>
                              </html>`;
                var finalhtml = head + cleanedHtmlCode + footer;


                var blob = new Blob([finalhtml], { type: 'text/html' });
                var link = document.createElement('a');
                link.href = URL.createObjectURL(blob);
                link.download = 'cleaned-v2.html';
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
            });

            
            $("#downloadHtmlbody").click(function() {
                var cleanedHtmlCode = $("#htmlCode").val();
               

                var blob = new Blob([cleanedHtmlCode], { type: 'text/html' });
                var link = document.createElement('a');
                link.href = URL.createObjectURL(blob);
                link.download = 'cleaned-v2-body.html';
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
            });

            





            $(document).on('click', function() {
            if (clickedDiv) {
               // $('a').removeClass('selected-border');
                $('#MarginTop').prop('selectedIndex', 0);
                $('#MarginBottom').prop('selectedIndex', 0);
                $('#MarginLeft').prop('selectedIndex', 0);
                $('#MarginRight').prop('selectedIndex', 0);

                $('#PaddingTop').prop('selectedIndex', 0);
                $('#PaddingBottom').prop('selectedIndex', 0);
                $('#PaddingLeft').prop('selectedIndex', 0);
                $('#PaddingRight').prop('selectedIndex', 0);


                $('.rowAlignments').css('display', 'none');
                $('.colAlignments').css('display', 'none');
                
                //$('#anchorPropertiesDiv').hide();                
            }
            
           });

            


        });


       