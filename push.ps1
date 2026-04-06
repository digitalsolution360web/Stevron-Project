# Navigating to the project directory
$projectDir = "f:\STEVRON\my-project"
if (Test-Path $projectDir) {
    Set-Location $projectDir
    Write-Host "In project directory: $projectDir"
    
    # Adding changes
    Write-Host "Adding changes to Git..."
    git add .
    
    # Committing
    $commitMsg = "Final professional updates and fixes"
    Write-Host "Committing with message: $commitMsg"
    git commit -m $commitMsg
    
    # Pushing
    Write-Host "Pushing to GitHub..."
    git push origin main
    
    Write-Host "Done! Please check your repository."
} else {
    Write-Error "Project directory not found at $projectDir"
}
pause
