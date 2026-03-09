# Guidelines for testing and quality assurance

- When working on specs and especially verifying the specs make sure to test happy paths and reasonably possible exceptions
- You MUST NOT write new automated tests scripts for this project (however don't delete existing ones, they are exceptions). We have just a bunch of html and css files that you can just read and process yourself.
- Write temporary scripts to test browser behaviour (for example to inspect what data is being send in "Network" of the browser or check how some styles were rendered in browser). Remove those temp scripts after you used them and you don't need them anymore.
- ALWAYS prefer an easier test over complex test. For example you need to check if there is a text in a html file, just read the files instead of writing an automated test that greps against the file.
- YOU MUST ALWAYS find the root cause of any issue you are debugging. YOU MUST NEVER fix a symptom or add a workaround instead of finding a root cause, even if it is faster or I seem like I'm in a hurry.
- For tests regarding appearance make screenshots and read the screenshot files to ensure something looks how it should look.
- Prefer global tools over locally installed tools. If you can, use "npx" to start a webserver or to use playwright, instead of adding dependencies to the project.
- If you can verify something by reading HTML/CSS, do that instead of writing any script
