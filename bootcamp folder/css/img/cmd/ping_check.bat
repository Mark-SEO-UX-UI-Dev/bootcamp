echo off
cls
title Network Routine
echo "Pinging Facebook..."
ping facebook.com
echo Ping test complete!
echo Saving your network info...
ipconfig
type nul > networks.txt
echo Windows IP Configuration >> networks.txt
pause