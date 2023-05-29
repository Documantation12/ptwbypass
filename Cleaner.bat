@echo off
MODE 101,42
setlocal EnableDelayedExpansion
set "chars=ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"
for /l %%a in (1,1,20) do (
  set /a rand=!random! %% 62
  for %%b in (!rand!) do set "rand_char=!chars:~%%b,1!!rand_char!"
)
title [ !rand_char! ]
set /a num=(%Random% %%9)+1 
color %num%
cls


@echo off
MODE 101,42
title [ !rand_char! ] 
set /a num=(%Random% %%9)+1 
color %num%
echo Press any key to start ...
pause >nul

:start
echo.
echo                                  /--l----------l--------l-----l------^--l
echo                                  lllllllllll   l--------l---------------O
echo                                  l--------------------------^----------l
echo                                  \_l,-------l ------------------------l
echo                                  /   /`\      /
echo                                  /   /  `\   /
echo                                  /   /\(,-----}
echo                                  /---/
echo                                   ______________________________________
echo.                                 /                                      \ 
echo                                  \           Jaguar Cleaner             /
echo                                  /                                      \         
echo                                  \______________________________________/
echo.                                 /                                      \
echo                                  \              - MAIN -                /
echo                                  /______________________________________\
echo                                  \                                      /
echo                                  /      [1] Clear Temp File             \  
echo                                  \      [2] Clear App Logs              /  
echo                                  /      [3] Clear Windows Logs          \  
echo                                  \      [R]  {FIX CLEANER}              /  
echo                                  /      [4]  ShortCut Logs              \
echo                                  \      [5] Flush DNS                   /
echo                                  /      [6] File Shreder                \
echo                                  \______________________________________/
echo                               
echo.                               
echo.




                                       set/p choice=^                                    [+] Choose Number : 
if not '%choice%'=='' set choice=%choice:~0,1%
if '%choice%'=='1' goto Temp
if '%choice%'=='2' goto Prefetch
if '%choice%'=='3' goto Logs
if '%choice%'=='R' goto Refresh
if '%choice%'=='r' goto Refresh
if '%choice%'=='4' goto ink
if '%choice%'=='5' goto Flush
if '%choice%'=='6' goto Shred
ECHO "%choice%" is not valid, try again
ECHO.


:Logs
@echo off
MODE 101,42
title [ Cleaner ] 
set /a num=(%Random% %%9)+1 
color %num%
FOR /F "tokens=1,2*" %%V IN ('bcdedit') DO SET adminTest=%%V
IF (%adminTest%)==(Access) goto noAdmin
for /F "tokens=*" %%G in ('wevtutil.exe el') DO (call :do_clear "%%G")
echo.
echo All Event Logs have been cleared!
goto theEnd

:do_clear
echo clearing %1
wevtutil.exe cl %1
goto :eof

:noAdmin
echo Current user permissions to execute this .BAT file are inadequate.
echo This .BAT file must be run with administrative privileges.
echo Exit now, right click on this .BAT file, and select "Run as administrator".  
pause >nul

:theEnd
pause
goto :start
pause  
goto end
goto start

:Temp
@echo off
MODE 101,42
title [ Cleaner ] 
set /a num=(%Random% %%9)+1 
color %num%
Del /S /F /Q %temp%
Del /S /F /Q %Windir%\Temp
test&cls
timeout 3
test&cls
goto :start
pause  
goto end
goto start

:Prefetch
ECHO @echo off
MODE 101,42
title [ Cleaner ] 
set /a num=(%Random% %%9)+1 
color %num%
@echo off
cd/
@echo
del *.log /a /s /q /f
pause
goto :start
pause  
goto end
goto start

:Refresh
@echo off
MODE 101,42
title [ Cleaner ] 
echo ______________________________________
echo. CLEANER FIXED                      
echo      FIXED
echo  CLEANER FIXED
echo ______________________________________
echo.
pause
test&cls
goto :start
pause  
goto end
echo.
echo.
echo [-] Version : v2 
test&cls
goto :start
pause  
goto end
goto start
goto Startup

:Logs
@echo off
MODE 101,42
title [ Cleaner ] 
set /a num=(%Random% %%9)+1 
color %num%
echo.
test&cls
goto :start
pause  
goto end
goto start
goto Startup

:Flush
ipconfig /release
timeout 3
ipconfig /flushdns
timeout 3
ipconfig /renew 
timeout 3
test&cls
goto :start
pause  
goto end
goto start
goto Bin
goto end
goto start
goto Startup

:Bin
@echo off
MODE 101,42
title [ Cleaner ] 
set /a num=(%Random% %%9)+1 
color %num%
echo  ______________________________________________________________________________ 
test&cls
erase /s/q/f "C:\$RECYCLE.BIN\*">nul
echo.
echo.
pause
echo.
echo.
set /a num=(%Random% %%9)+1
color %num%
test&cls
goto :start
pause  
goto end
goto start
goto Startup

:ink
@echo off
MODE 101,42
title [ Cleaner ] 
set /a num=(%Random% %%9)+1 
color %num%

echo Fixing all shortcuts...
for %%i in (*.lnk) do (
    powershell -Command "$ws = New-Object -ComObject WScript.Shell; $s = $ws.CreateShortcut('%%~fi'); $s.Save()"
)
echo All shortcuts fixed!

echo.
echo Press any key to exit...
pause >nul
goto start

