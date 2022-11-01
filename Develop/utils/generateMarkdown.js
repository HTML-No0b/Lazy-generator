// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== 'None') {
    return `![License Badge](https://img.shields.io/badge/License-${license}-orange)`
  }
  return ''
};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== 'None') {
    return `* [License](#license)`
  }
  return ''
};

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== 'None') {
    return `## License
    
    This project is licensed under the ${license} License`
  }
  return ''
};

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  //The return grabs from the title and licenses to display the users response.
  return `# ${data.title}
${renderLicenseBadge(data.license)}

## Description

${data.description}

## Table of Contents

* [Installation](#installation)
* [Usage](#usage)
${renderLicenseLink(data.license)}
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)

## Installation

To install dependencies run the following command: ${data.install} 

## Usage

${data.usage}

${renderLicenseSection(data.license)}

## Contributing

${data.contribute}

## Tests

To run tests run the following command: ${data.test}

## Questions

If you have any questions about the project you can reach me here at: ${data.email}. To view more of my work vist my Github:[${data.github}](https://github.com/${data.github}/).

`;
};

module.exports = generateMarkdown;
