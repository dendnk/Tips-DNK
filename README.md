# Tips-DNK

# Unreal Engine


To watch bytecode you need to add to Engine prints.ini or DefaultEngine.ini
[Kismet]
CompileDisplaysBinaryBackend=true
А чтобы смотреть С++ код надо добавить
[Kismet]
CompileDisplaysTextBackend=true

But unreal can go down after that) UE5 crashed without patch
And there are no much text prints in log, it needs to check in debugger what it want to print


There were no any conversions, it needs to change GUID values in register:
![image](https://user-images.githubusercontent.com/14108292/154050415-724f22a9-745f-4e0c-b269-c389515725f3.png)



# Plastic SCM

 - To fix line endings in plastic SCM you need to add the <AutoEolConversion>Auto</AutoEolConversion> in client.conf file.
