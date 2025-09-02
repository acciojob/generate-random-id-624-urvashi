function makeid(l) {
  // write your code here
	var res = " ";
	var char_list = "ABCDEFGHIJKLMNOPQRSTWXYZabcdefghijklmnopqrstuvwxyz0123456789";

	for(var i = 0 ; i<l ; i++){
		res+= char_list.charAt(
			Math.floor(
				Math.random()*char_list.length;
			)
		)

		return res;
	}
}

// Do not change the code below.
const l = parseInt(prompt("Enter a number."), 10); // 
window.alert(makeid(l));
