# Squared
![Squared logo](Project/Web/squared-web/src/images/squared-logo.png)
Squared is an upcoming multiplayer competitive board-game where the objective is to capture as much of the board as possible.

## Installation
First, download the repository. You can do this via [git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)
> git clone https://github.com/snacksbro/squared.git

Or alternatively just download the [.zip](https://github.com/snacksbro/squared/archive/refs/heads/master.zip)

Obtain a copy of [Python3](https://www.python.org/downloads/), [Pip3](https://pip.pypa.io/en/stable/installation/), and then execute:
> pip3 install -r requirements.txt

While in the `/Project/Api/flaskapp` directory.

To set the Python environment to development and enable Hot-Reload, run the following command in the terminal
> export FLASK_ENV=development

You'll also need [Node.js](https://nodejs.org/en/download/). Install the requirements after with:
> npm install

While in the `/Project/Web/squared-web` directory.

## Running Locally
In `Project/Api/flaskapp`, simply execute `flask run`. This will run the API server on `http://localhost:5000`.
Navigate to `Project/Web/squared-web`, then execute `npm start`. This will start the frontend server.

## Project Layout
`Deliverables/` is where assignment deliverables are kept.
`Project` is where the code for the project is kept.
`Project/Api` is the Flask backend of the project.
`Project/Web` is the React frontend of the project.

## Issues
When getting any sort of unexpected behavior, you may want to report it as a bug in the Issue Tracker. Refer to ISSUES.md for a template on creating one of these. This is so we, the developers, can get an idea of where/how the problem is occurring so we can quickly fix it, as well as to be aware if a new version of some of the software we use is causing it.

## Contact
* Keijaoh Campbell (keijaoh.campbell@maine.edu)
* Jeffrey Fosgate (jeffrey.fosgate@maine.edu)
* Jacob Lorenzo (jacob.w.lorenzo@maine.edu)
* Shea Keegan (shea.keegan@maine.edu)
* Tyler Walker (tyler.j.walker@maine.edu)

## License
To be decided next meeting

