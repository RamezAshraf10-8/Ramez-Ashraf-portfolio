@echo off
title Ramez Ashraf - Portfolio Local Server
echo ========================================================
echo   Launching Ramez Ashraf's AI & Engineering Portfolio
echo ========================================================
echo.
echo Starting local web server at http://localhost:8080 ...
start "" "http://localhost:8080"
python -m http.server 8080
pause
