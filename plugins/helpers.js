import Vue from 'vue'
import { auth, db, storage } from '@/services/firebase'
import Cookie from 'js-cookie'
import jsPDF from 'jspdf'
import html2canvas from 'html2canvas'
import * as fb from '@/services/firebase.js'

Vue.mixin({
     mounted() {
     },
    methods:{
         getBgColor(step) {
               let fill = null
               switch(step) {
                    case 10:
                         fill = "#69B34C"
                         break
                    case 9:
                         fill = "#69B34C"
                         break
                    case 8:
                         fill = "#ACB334"
                         break
                    case 7:
                         fill = "#ACB334"
                         break         
                    case 6:
                         fill = "#FAB733"
                         break          
                    case 5:
                         fill = "#FAB733"
                         break
                    case 4:
                         fill = "#FF8E15"
                         break          
                    case 3:
                         fill = "#FF8E15"
                         break          
                    case 2:
                         fill = "#FF4E11"
                         break          
                    case 1:
                         fill = "#FF4E11"
                         break
                    case 0:
                         fill = "#FF0D0D"
                         break                                        
                    default:
                         fill = "orange"
                         break
               }
               return fill
         },
          async getDoc({ collection_name, uid }) {
               let ref = await fb.db.collection(collection_name).doc(uid)
               const doc = await ref.get()
               return doc
          },         
          updateSlider(slider, active) {
               let fill = null
                    switch(active) {
                         case "0":
                              fill = "#69B34C"
                              break
                         case "1":
                              fill = "#69B34C"
                              break
                         case "2":
                              fill = "#ACB334"
                              break
                         case "3":
                              fill = "#ACB334"
                              break         
                         case "4":
                              fill = "#FAB733"
                              break          
                         case "5":
                              fill = "#FAB733"
                              break
                         case "6":
                              fill = "#FF8E15"
                              break          
                         case "7":
                              fill = "#FF8E15"
                              break          
                         case "8":
                              fill = "#FF4E11"
                              break          
                         case "9":
                              fill = "#FF4E11"
                              break
                         case "10":
                              fill = "#FF0D0D"
                              break                                        
                         default:
                              fill = "orange"
                              break
                    }
               // I've added annotations to make this easier to follow along at home. Good luck learning and check out my other pens if you found this useful


               // First let's set the colors of our sliders
               const settings={
                    fill,
                    background: '#d7dcdf'
                    }

                    slider = $(slider.target).parent()[0]
          
                    slider.querySelector('input').addEventListener('input', (event)=>{
                         // 2. apply our fill to the input
                              applyFill(event.target);
                         });
                    // Don't wait for the listener, apply it now!
                    applyFill(slider.querySelector('input'));
          

                    // This function applies the fill to our sliders by using a linear gradient background
                    function applyFill(slider) {
                         // Let's turn our value into a percentage to figure out how far it is in between the min and max of our input
                         const percentage = 100*(slider.value-slider.min)/(slider.max-slider.min);
                         // now we'll create a linear gradient that separates at the above point
                         // Our background color will change here
                         const bg = `linear-gradient(90deg, ${settings.fill} ${percentage}%, ${settings.background} ${percentage+0.1}%)`;
                         slider.style.background = bg;
                    }
          
          },
          getDateTime() {
            var now     = new Date(); 
            var year    = now.getFullYear();
            var month   = now.getMonth()+1; 
            var day     = now.getDate();
            var hour    = now.getHours();
            var minute  = now.getMinutes();
            var second  = now.getSeconds(); 
            if(month.toString().length == 1) {
                 month = '0'+month;
            }
            if(day.toString().length == 1) {
                 day = '0'+day;
            }   
            if(hour.toString().length == 1) {
                 hour = '0'+hour;
            }
            if(minute.toString().length == 1) {
                 minute = '0'+minute;
            }
            if(second.toString().length == 1) {
                 second = '0'+second;
            }   
            var dateTime = year+'/'+month+'/'+day+' ' + now.toLocaleTimeString();   
             return dateTime;
          },
          camelCaseToSentenceCase(text) {
               if (text) {
                    const result = text.replace(/([A-Z])/g, " $1");
                    const finalResult = result.charAt(0).toUpperCase() + result.slice(1);
                    return finalResult    
               }
          },
          exportAsPDF(elem, hide, filename) {
               $(`#${hide}`).hide()
               html2canvas($(`#${elem}`)[0], { allowTaint: true }).then(function(canvas) {
                    var imgData = canvas.toDataURL('image/png');
                    /*
                    Here are the numbers (paper width and height) that I found to work. 
                    It still creates a little overlap part between the pages, but good enough for me.
                    if you can find an official number from jsPDF, use them.
                    */
                    var imgWidth = 210; 
                    var pageHeight = 295;  
                    var imgHeight = canvas.height * imgWidth / canvas.width;
                    var heightLeft = imgHeight;
              
                    var doc = new jsPDF('p', 'mm');
                    var position = 0;
              
                    doc.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
                    heightLeft -= pageHeight;
              
                    while (heightLeft >= 0) {
                      position = heightLeft - imgHeight;
                      doc.addPage();
                      doc.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
                      heightLeft -= pageHeight;
                    }
                    doc.save(`${filename}.pdf`)               
                    $(`#${hide}`).show()
               })         

          },
          printElem(elem, non_rendered)
          {
               $(`#${non_rendered}`).hide()
               html2canvas(document.getElementById(elem)).then(function (canvas) {			
                    var anchorTag = document.createElement("a");
                    document.body.appendChild(anchorTag);
                    anchorTag.download = "filename.png";
                    anchorTag.href = canvas.toDataURL("image/png", 1.0);
                    anchorTag.target = '_blank';
                    anchorTag.click();
                    // var pdf = new jsPDF();
                    // pdf.addImage(anchorTag.href, 'PNG', 0, 0);
                    // pdf.save("download.pdf");                    
               });
               $(`#${non_rendered}`).show()
          },         
          //Generate PDF
          generatePDF() {
               pdf = "";
               $("#downloadbtn").hide();
               $("#genmsg").show();
               html2canvas($("#editor")[0], { allowTaint: true }).then(function(canvas) {

               calculatePDF_height_width(".print-wrap",0);
               var imgData = canvas.toDataURL("image/png", 1.0);
                    pdf = new jsPDF('p', 'pt', [PDF_Width, PDF_Height]);
               pdf.addImage(imgData, 'JPG', top_left_margin, top_left_margin, HTML_Width, HTML_Height);

               });

               html2canvas($("#editor")[0], { allowTaint: true }).then(function(canvas) {

               this.calculatePDF_height_width(".print-wrap",1);
                    
               var imgData = canvas.toDataURL("image/png", 1.0);
               pdf.addPage(PDF_Width, PDF_Height);
               pdf.addImage(imgData, 'JPG', top_left_margin, top_left_margin, HTML_Width, HTML_Height);

               });

               html2canvas($(".print-wrap:eq(2)")[0], { allowTaint: true }).then(function(canvas) {

               calculatePDF_height_width(".print-wrap",2);
                    
               var imgData = canvas.toDataURL("image/png", 1.0);
               pdf.addPage(PDF_Width, PDF_Height);
               pdf.addImage(imgData, 'JPG', top_left_margin, top_left_margin, HTML_Width, HTML_Height);


               
                    //console.log((page_section.length-1)+"==="+index);
                    setTimeout(function() {

                         //Save PDF Doc	
                         pdf.save("HTML-Document.pdf");

                         //Generate BLOB object
                         var blob = pdf.output("blob");

                         //Getting URL of blob object
                         var blobURL = URL.createObjectURL(blob);

                         //Showing PDF generated in iFrame element
                         var iframe = document.getElementById('sample-pdf');
                         iframe.src = blobURL;

                         //Setting download link
                         var downloadLink = document.getElementById('pdf-download-link');
                         downloadLink.href = blobURL;

                              $("#sample-pdf").slideDown();
                              
                              
                              $("#downloadbtn").show();
                              $("#genmsg").hide();
                    }, 0);
               });
          },           
          jsonToPDF(obj) {
               
               var doc = new jsPDF();
               // console.log(obj, "obj")
               
               // var specialElementHandlers = {
               //      '#editor': function (element, renderer) {
               //          return true;
               //      }
               // };               
               // doc.html($('#editor').html(), 15, 15, {
               //      'width': 170
               //  });
               // doc.save('sample-file.pdf');

               var employees = [
                    {"firstName":"John", "lastName":"Doe"}, 
                    {"firstName":"Anna", "lastName":"Smith"},
                    {"firstName":"Peter", "lastName":"Jones"},
                ];               
               employees.forEach(function(employee, i){
                   doc.text(20, 10 + (i * 10), 
                       "First Name: " + employee.firstName +
                       "Last Name: " + employee.lastName);
               });
               doc.save('Test.pdf');               
          }
    }
})