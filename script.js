cmd = "";

var objShell = new ActiveXObject("WScript.Shell");
var objExec = objShell.Exec("cmd /c dir c:\\") 	
while(!objExec.StdOut.AtEndOfStream) {
	fb.trace(objExec.StdOut.ReadLine())
}