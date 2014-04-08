## Run Cloud Foundry commands from the Jazzhub editor shell

With the shell, you can run commands as you do from the command line. 
To use the shell from the JazzHub code editor, follow these steps:

1. To access the shell from the JazzHub code editor, click the Shell icon.
>	![JazzHub shell](../images/guidejhwebide/jazzhubshell.jpg) 
2. The first time that you use the shell, you must set the target to point to BlueMix. From a command line, type cfo target https://api.ng.bluemix.net and press Enter.
>	![Set target for shell](../images/guidejhwebide/jazzhubshelltarget.jpg) 
3. You might want to use the shell to execute a command like cfo apps so you can view a list of all your applications.
>	![View apps in a shell](../images/guidejhwebide/jazzhubshellcfoapp.jpg) 
If you get the error "Error: Invalid Auth Token", login with your IBM ID and password before executing cfo target. The instruction to login is cfo login <IBM ID> <password>.
4. You can obtain a list of all of the Cloud Foundry commands by typing help cfo.
>	![View cfo help](../images/guidejhwebide/jazzhubeditorcode.jpg) 
