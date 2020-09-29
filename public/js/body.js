import $ from 'jquery';

export const sendFunc  = () => {
  $("body").on("click", function (e) {
    if (e.target.id == "myDiv" || $(e.target).parents("#myDiv").length) {
      console.log('');
      
    } else {
      // Remove the # from the hash, as different browsers may or may not include it
      var hash = location.hash.replace("#", "");
  
      if (hash != "") {
        // Show the hash if it's set
          console.log('');
  
        // Clear the hash in the URL
        location.hash = "";
      }
    }
  });
  
}

