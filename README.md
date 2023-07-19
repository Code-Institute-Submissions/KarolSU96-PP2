# To- Do Lit Website!

This website allows users to add, delete and mark tasks as completed.
It provides a user-friendly interaface for managing tasks and keepung track of which of them are completed.

Website Link: https://karolsu96.github.io/PP2/

GitHub Repo: https://github.com/KarolSU96/PP2

## Table of Contents

[Features](#features)
[Languages](#languages)
[Deployment](#deployment)
[Bugs](#bugs)
[Credits](#credits)
[Validators](#validators)
[Improvement](#improvement)

## Features

- ### Crate a task
- Add a new task by entering it in the input field and clicking on "Add" button.

- ### Delete a task
- Click on the "x" to delete the desired task.

- ### Mark as completed
- Click on the task to cross it out and mark it as completed.

- ### Edit a task
- Use the "Edit" button to change the task. The new task can be then added in popup box.

- ### Display the total number of tasks
- Total number of tasks is dynamically updated as tasks are added or removed.

## Languages:

- HTML
- CSS
- JavaScript

## Deployment:

This website is deployed using GitHub Pages.
The Editor that I've been using is VS Code with extensions:

- Auto Close Tag
- Color Highlight
- ESLint
- file-icons
- GitHub Codespaces
- Live Preview
- Live Server
- One Dark Pro
- Prettier - Code formatter
- stylelint-plus
- Toggle Column Selection

I would like to thank Code Institute for a short toutorial for deployment of the websites on GitHub.

Let me take you through the process of deployment of this website:

1. Go to project's direcotry on Github.
2. Click on "Settings".
3. Scroll to the "GitHub Pages".
4. Select Main as "Source"
5. Click save.
6. The site link will be generated after a few minutes.

## Bugs:

- Throughout the developlent process I struggled with delete function. Somehow my approach wasnt working or was not consistent. I figured out that it there must be someting going on with the icon, after carefully examining the page with Pesticide Chrome excension. I managed to find a thread on stack https://stackoverflow.com/questions/60692659/icon-makes-the-button-not-clickable and changed the pointer-events property to none.

## Credits:

- Notes Icon - Flaticon https://www.flaticon.com/free-icon/pencil_3075908?term=note&page=1&position=5&origin=tag&related_id=3075908
- Github Icon - Fontawesome https://fontawesome.com/
- Code Institute Tutors Team, which really helped me get through bugs. It really wouldn't be possible for me to make this project without them.
- Tyler Potts Toutorial which helped me with prompting user for the input and idea for a project https://www.youtube.com/watch?v=MkESyVB4oUw&t=1362s

## Validators:

- W3C validator shows no errors or warnings.
- Jigsaw validator shows no errors or warnings.

## Improvement:

- There is still room for improvment. In the future I would like to add a user profiles, which would save the tasks even after refreshing the page. User could then log in with her/his login and save their notes.
