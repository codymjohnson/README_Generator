// variables
// const fs = require('fs');
// const path = require('path')

// generate markdown for readme
function generateMarkdown(data) {
    return `# ${data.title}

    ## Description

    ${data.description}

    ## Table of Contents

    * [Description](#description)
    * [Installation](#installation)
    * [Contributors](#contributors)
    * [Test](#test)
    * [Username](#username)
    * [Email](#email)
    * [Questions](#questions)
    
    ## Installation

    ${data.installation}

    ## Contributors

    ${data.contributors}

    ## Test

    ${data.test}

    ## Username

    ${data.username}

    ## Email

    ${data.email}

    ## Questions

    ${data.questions}
    <br>
    Github link: https://github.com/${data.username} \t Email: ${data.email}
    `;
}

module.exports = generateMarkdown;