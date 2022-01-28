const core = require('@actions/core');
const github = require('@actions/github');

try {
    // throw new Error("mock error message")
    core.debug("Sample debug");
    core.warning("Sample warning");
    core.error("Sample error")
    const name = core.getInput('who-to-greet');
    console.log(`Hello ${name}`);
    core.setSecret(name);
    console.log(`Hello ${name}`);
    const time = new Date();
    core.setOutput("time", time.toTimeString());
    core.startGroup('Start group');
    console.log(JSON.stringify(github,null,'\t'));
    core.endGroup();
    core.exportVariable("HELLO", "hello");
} catch (error) {
    core.setFailed(error.message)
}