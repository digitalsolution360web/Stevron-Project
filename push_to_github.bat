@echo off
echo Navigating to project directory...
cd /d f:\STEVRON\my-project
echo Pushing to GitHub (https://github.com/digitalsolution360web/Stevron-Project.git)...
git add .
git commit -m "Final professional updates, FAQ and responsiveness fixes"
git push origin main
echo Done.
pause
