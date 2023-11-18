# Vanilla App Template

This project was created using Vite. For introduction and setup
additional features [refer to the documentation](https://vitejs.dev/).

## Creating a repository according to a template

Use this GoIT organization repository as a template to build
a repository for your project. To do this, click on the ``Use this template'' button and
select the ``Create a new repository'' option as shown in the image.

![Creating repo from a template step 1](./assets/template-step-1.png)

At the next stage, the page for creating a new repository will open. fill in
its name field, make sure that the repository is public, then click
button ``Create repository from template''.

![Creating repo from a template step 2](./assets/template-step-2.png)

After the repository is created, you need to go to the settings
created repository to `Settings` > `Actions` > `General` tab as shown
in the image.

![Settings GitHub Actions permissions step 1](./assets/gh-actions-perm-1.png)

After scrolling to the very end of the page, select ``Workflow permissions'' in the section
option ``Read and write permissions'' and check the checkbox. It is necessary
to automate the project deployment process.

![Settings GitHub Actions permissions step 2](./assets/gh-actions-perm-2.png)

Now you have a personal project repository with a file and folder structure
template repository. Then work with it as with any other personal 
repository, clone it to your computer, write code, make commits, and send
them on GitHub.

## Preparation for work

1. Make sure the LTS version of Node.js is installed on your computer.
    [Download and install](https://nodejs.org/en/) it if necessary.
2. Install the basic dependencies of the project in the terminal with the `npm install` command.
3. Start the development mode by executing the `npm run dev` command in the terminal.
4. Go to the address in the browser
    [http://localhost:5173](http://localhost:5173). This page will be automatically
    reboot after saving changes to project files.

## Files and folders

- Page component markup files should be in the `src/partials' folder and
   imported to the file `index.html`. For example, a header markup file
   We create `header.html` in the `partials` folder and import it into `index.html`.
- Style files must be in the `src/css` folder and imported into HTML files
   pages For example, for `index.html`, the style file is called `index.css`.
- Add the image to the `src/img' folder. The collector optimizes them, but only when
   deploying the production version of the project. All this happens in the cloud so that no
   load on your computer, because on weak computers it can take time
   a lot of time.

## Deployment

The production version of the project will be automatically built and deployed to GitHub
Pages, to the `gh-pages` branch, whenever the `main` branch is updated. For example,
after a direct push or an accepted pull request. For this it is necessary in the file
`package.json` to change the value of the `--base=/<REPO>/` flag, for the `build` command,
replacing `<REPO>` with the name of your repository, and push your changes to GitHub.

```json
"build": "vite build --base=/<REPO>/",
```

Next, you need to go to the settings of the GitHub repository (`Settings` > `Pages`) and
set distribution of the production version of files from the `/root' folder of the `gh-pages' branch, if
it was not done automatically.

![GitHub Pages settings](./assets/repo-settings.png)

### Deployment status

The deployment status of the extreme commit is displayed by an icon next to its identifier.

- **Yellow color** - the project is being built and deployed.
- **Green color** - deployment completed successfully.
- **Red color** - an error occurred during linting, assembly, or deployment.

More detailed information about the status can be viewed by clicking on the icon, and in
in the drop-down window, go to the ``Details'' link.

![Deployment status](./assets/deploy-status.png)

### Live page

After some time, usually a few minutes, the live page can be viewed
at the address indicated on the `Settings` > `Pages` tab in the repository settings.
For example, here is a link to the live version of this repository

[https://goitacademy.github.io/vanilla-app-template/](https://goitacademy.github.io/vanilla-app-template/).

If a blank page opens, make sure there are no ``Console'' tab
errors related to incorrect paths to the CSS and JS files of the project
(**404**). Most likely, you have the wrong value of the `--base` flag for
`build` commands in the `package.json` file.

## How it works

![How it works](./assets/how-it-works.png)

1. After each push to the `main` branch of the GitHub repository, it is launched
    custom script (GitHub Action) from the `.github/workflows/deploy.yml` file.
2. All repository files are copied to the server where the project is initialized and
    is linting and assembly before deployment.
3. If all steps were successful, the production version of the project files is compiled
    and sent to the `gh-pages` branch. Otherwise, the script execution thread
    will indicate what the problem is.
