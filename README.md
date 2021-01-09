# README.md Generator
This template is the for a README.md Generator app created using node.js. 
This generator was created to make it easy for users to create fast and quality README.md's.

When creating the generator the user will be asked a variety of questions that will be used to populate the final README.md. The questions include name of project, your GitHub username and which license you want to use, among other questions. 
the questions were prompted using the code below:
```js
inquirer
.prompt([
    {
        type: "input",
        message: "What is your Github username?",
        name: "username"
    },
```
The example above only shows one example, you can see the rest either on the js file or one the video demo.

After the user inputs their requirement on the terminal, a readme file will be added to their projects files that will have a README with their answers populated. 

Below you will find the link to the README.md Generator demo where you can watch how it works.
  <a href= "https://drive.google.com/file/d/1hHv1PCLZNitYTejy8putR2sjuO9g-xdr/view">README.md Generator </a> Video Demo.
