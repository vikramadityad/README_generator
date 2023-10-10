// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {

  const licenseBadges = {
    MIT: '![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)',
    Apache: '![License: Apache](https://img.shields.io/badge/License-Apache%202.0-blue.svg)',
    ISC: '![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)',
  };
  return licenseBadges[license] || '';
}




// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  const licenseLinks = {
    MIT: 'https://opensource.org/licenses/MIT',
    Apache: 'https://www.apache.org/licenses/LICENSE-2.0',
    ISC: 'https://opensource.org/licenses/ISC',
    // Add more license URLs here as needed
  };

  return licenseLinks[license] || '';
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  const licenseLink = renderLicenseLink(license);

  return `
  This project is licensed under the [${license} License](${licenseLink}).`;
}


// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {

  const licenseBadge = renderLicenseBadge(data.license);
  const licenseSection = renderLicenseSection(data.license);

  return `

  ${licenseBadge}

  # Title
  ${data.title}
  
  ## Description
  ${data.description}
  
  ## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)
  
  ## Installation
  ${data.installation}
  
  ## Usage
  ${data.usage}
  
  ## License
  ${licenseSection}
  
  ## Contributing
  ${data.contributing}
  
  ## Tests
  ${data.tests}
  
  ## Questions
  If you have any questions, feel free to reach out to me via [GitHub](https://github.com/${data.gituser}) or [email](${data.email}).
  
`;
}

module.exports = generateMarkdown;
