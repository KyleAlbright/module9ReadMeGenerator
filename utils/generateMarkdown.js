// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(License) {
  if (License !== "None") {
    return `![badge](https://img.shields.io/badge/License-${License}-blueviolet.svg)`;
  } else {
    return "";
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(License) {
  if (License !== "None") {
    return `[${License}](https://choosealicense.com/licenses/${License})`;
  } else {
    return "";
  }
}
// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(License) {
    if (License !== "None") {
        return ` ## [License](#table-of-contents)

        ${renderLicenseLink(License)} `;
}   else {
    return "";
}
}
// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.Title}
  ${renderLicenseBadge(data.License)}
  
  ## Table-of-contents

* Description
* Installation
* Usage
* Contributing
* Tests

${renderLicenseSection(data.License)}

### Description
${data.Description}



### Installation 
${data.Installation}



### Usage 
${data.Usage}



### Contributing 
${data.Contributing}



### Tests
${data.Tests}



#### Questions? 
Github:(https://github.com/${data.Github})
Email:(${data.Email})

`;
}

module.exports = generateMarkdown;
