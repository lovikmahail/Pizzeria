menu_list_array = ["Veg Margherita Pizza","Cheese and Corn","Deluxe Veggie","Mexican Green Wave","Peppy Paneer","Chicken Taco Piza", ];

function show_item(){
var item=document.getElementById("display_addedmenu").innerHTML=menu_list_array;
        for(var i=0;i<menu_list_array.length;i++){
            htmldata=htmldata+imgtags+ menu_list_array[i]+'<br>';
        }
         document.getElementById("display_addedmenu").innerHTML = htmldata;		
      }