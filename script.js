// Tabbed Menu
function openMenu(evt, menuName) {
   var i, menuList, tablinks;

   // getting the html elements with the class name 'menu'
   // ['Steak', 'Pizza', 'Mains']
   menuList = document.getElementsByClassName("menu");

   // for each item, set the style.display to be non! -> don't show them
   for (i = 0; i < menuList.length; i++) {
      menuList[i].style.display = "none";
   }

   // for click link, removing the green styling
   tablinks = document.getElementsByClassName("tablink");
   for (i = 0; i < menuList.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" w3-green", "");
   }

   // for the menu item we clicked, add the style back
   document.getElementById(menuName).style.display = "block";
   evt.currentTarget.firstElementChild.className += " w3-green";
   //  document.getElementById("myLink").click();
}

function openAllMenus(event) {
   var menuList = document.getElementsByClassName("menu");
      var tablinks = document.getElementsByClassName("tablink");
   for (var i = 0; i < menuList.length; i++) {
      menuList[i].style.display = "block";
      tablinks[i].className = tablinks[i].className.replace(" w3-green", "");
   }
}






