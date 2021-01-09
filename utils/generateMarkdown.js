// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  return "https//license.com";
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.projectName}

![GitHub repo size](https://img.shields.io/github/repo-size/scottydocs/README-template.md)

<!-- TABLE OF CONTENTS -->
<details open="open">
  <summary><h2 style="display: inline-block">Table of Contents</h2></summary>
  <ol>
    <li>
      <a href="#description">Description</a>
    </li>
    <li>
      <a href="#prerequisites">Prerequisites</a>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#license">License</a></li>
  </ol>
</details>

## Description
${data.description}
## Prerequisites

Before you begin, ensure you have met the following requirements:

## Usage ${data.projectName}

To use ${data.projectName}, follow these steps: ${data.usage}
 
Command to run test: ${data.command}

## Contributing to ${data.projectName}

To contribute to ${data.projectName}, follow these steps: 
${data.contribution}

## Contact

If you want to contact me you can reach me at ${data.email}.
You can also go to my GitHub accout to view projects, look me up as ${data.username}!

## License
${data.license}

This project uses the following license: [${data.license}](${renderLicenseLink(
    data.license
  )}).
`;
}

module.exports = generateMarkdown;
