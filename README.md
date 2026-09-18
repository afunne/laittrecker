# NodeWords

NodeWords is a client-side vocabulary testing tool for distributed application terminology. It models two independent request/response paths:

- **Existing version:** an Estonian prompt expects a Russian response.
- **Reverse version:** a Russian prompt expects an Estonian response.

The vocabulary payload is stored locally in `script.js`, and each refresh selects a new prompt for each direction. There is no build step or server dependency: open `index.html` directly or serve the folder with any static web server.

## Development branch

The implementation branch is `feature/estonian-russian-vocabulary-testing`.
The published default branch is `main`.

## GitHub and LiteTracker handoff

After adding the GitHub remote, push this branch with:

```powershell
git push -u origin feature/estonian-russian-vocabulary-testing
```

To publish the current stable version on `main`, use:

```powershell
git push -u origin main
```

In the corresponding LiteTracker story, add the GitHub repository URL and this exact branch name. Verify the link opens the repository with the branch selector set to `feature/estonian-russian-vocabulary-testing`.

For webhook-based activity tracking, configure the LiteTracker webhook to listen to push events from this repository. Each pushed commit contains its commit message, branch name, author, and changed files for the integration to display.

## Testing checklist

1. Open `index.html` in a browser.
2. Confirm both columns receive prompts and refresh independently.
3. Enter the displayed translation in each direction and check that the success/error response is local to that column.
4. Confirm the Enter key submits each input and that the layout remains usable on a narrow viewport.