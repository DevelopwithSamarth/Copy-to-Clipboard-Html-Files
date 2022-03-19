function copyText() {
				var copiedtext= document.getElementById("texttocopy");
   texttocopy.select();
   texttocopy.setSelectionRange(0, 99999);
   document.execCommand("copy");
   document.getElementById("Btn");
   Btn.focus()
   alert("The copied text is: " + copiedtext.value);
}
