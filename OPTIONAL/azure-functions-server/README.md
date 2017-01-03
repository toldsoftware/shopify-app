# OPTIONAL Azure Functions

TODO: move azure-functions-server to separate npm project

## Setup

- copy src-server folder into project root
- create Azure Function App https://portal.azure.com
    - Setup Git Deploy
        - Settings > Configure Continuous Integration > Setup > Select Git Project
    - Setup CORS for any origin - for testing
        - Settings > Configure CORS
            - Remove Entries
            - Enter *
- Install azure-functions-server project
    npm i @told/azure-functions-server --save
- Run afs cli


## Final Project Structure

- src-server contains server-only code (code that cannot be tested with karma)
    - azure function entrances
    - server resources access code
- src contains app models and business logic
    - app models and business logic can be tested with karma
    - app models and business logic can be used to do client side processing (that can be verified by server-side processing if needed)
- .deployment controls the azure git deployment to point to "lib-server"
- (generated) lib-server contains the server-side deployment code
    - a clone of lib code
    - a clone of package.json with dev-dependencies removed
    - a generated function entry point for each entry point in src-server