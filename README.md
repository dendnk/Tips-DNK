# Tips-DNK

# Unreal Engine

### Movement parameters
```
p.VisualizeMovement 1/0 - show movement parameters and draw acceleration/velocity vectors
```

### For updating Details panel in Editor check
```
GUnrealEd->UpdateFloatingPropertyWindows(true); 
```

### Editor flow after clicking on component
```
FEditorViewportClient::ProcessClickInViewport -> FEditorViewportClient::ProcessClick(View,HitProxy,Key,Event,HitX,HitY) ->
-> FComponentVisualizerManager::HandleClick(FEditorViewportClient* InViewportClient, HHitProxy* HitProxy, const FViewportClick& Click) ->
-> FComponentVisualizerManager::HandleProxyForComponentVis(InViewportClient, HitProxy, Click);
=========================================
GUnrealEd->FindComponentVisualizer(ClickedComponent->GetClass());
bool bIsActive = Visualizer->VisProxyHandleClick(InViewportClient, VisProxy, Click);
```

### Some useful tips for increasing FPS while in editor:

1. Enable Game mode (toggling by key "G")
2. Hide unnecessary objects (for instance: Landscapes (or setup them with proper parameters)
3. Change View mode (for example from Lit to Unlit)
4. You can check fps by command [stat fps] (input this command again to hide stats)
5. Also you can check number of draw calls and polygons by command [stat rhi]

### To generate ProjectName.xcworkspace file on Mac you need run command
```
/UnrealEngine/Engine/Build/BatchFiles/Mac/GenerateProjectFiles.sh -project=/ProjectName/ProjectName.uproject -Game
```

### To watch bytecode you need to add to Engine prints.ini or DefaultEngine.ini
```
[Kismet]
CompileDisplaysBinaryBackend=true
```

### To watch C++ code 
```
[Kismet]
CompileDisplaysTextBackend=true
```

But unreal can go down after that) UE5 crashed without patch
And there are no much text prints in log, it needs to check in debugger what it want to print


### To turn off conversions in any "control version" program, it needs to change GUID to the one similar value in register for all:
![image](https://user-images.githubusercontent.com/14108292/154050415-724f22a9-745f-4e0c-b269-c389515725f3.png)



# Plastic SCM

 - To fix line endings in plastic SCM you need to add the \<AutoEolConversion\>Auto\</AutoEolConversion\> in client.conf file.

# Windows Power Shell

### Renaming via special commands

Add prefix "A_" :
```
dir | Rename-Item -NewName {"A_" + $_.Name} 
```

Replace space on underscore : 
```
dir | Rename-Item –NewName { $_.Name –replace “ “,”_” }
```

Replace letters to Upper case : 
```
dir | Rename-Item -NewName {(Get-Culture).TextInfo.ToTitleCase($_.Name)} 
```

Rename all files in subfolders on TitleCase : 
```
Get-ChildItem -Recurse | Rename-Item -NewName {(Get-Culture).TextInfo.ToTitleCase($_.Name)}
```



# Refactoring 

``` https://refactoring.guru/ru ```


