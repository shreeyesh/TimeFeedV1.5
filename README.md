

# TimeFeedV1.5

TimeFeedV1.5 is a web application that allows users to create and share posts in different categories. It provides a platform for users to express their thoughts, share interesting content, and engage in discussions.

## Table of Contents
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Technologies](#technologies)
- [Contributing](#contributing)
- [License](#license)

## Features

- User registration and authentication
- Create and edit posts with titles, content, images, and categories
- View posts by category or all posts
- Like and dislike posts
- Real-time updates with WebSocket integration
- Responsive design for mobile and desktop devices

## Installation

To run the TimeFeedV1.5 application locally, follow these steps:

1. Clone the repository:

   ```shell
   git clone https://github.com/shreeyesh/TimeFeedV1.5.git
      ```
2. Get into the directory:
   ```shell
   cd tf/src/tf_frontend
   ```
3. Install the dependencies:

   ```shell
    npm install
    ```
4. Start the application:

   ```shell
    npm start
    ```
5. Open the application in your browser:

   ```shell
    http://localhost:3000
    ```

   
To deploy Canisters
1. Get into the directory:
   ```shell
   cd tf/src/tf_Backend
   ```
2. Starts the replica, running in the background
   ```shell
   dfx start --background
   ```

3. Deploys your canisters to the replica and generates your candid interface
   ```shell
   dfx deploy
   ````

Once the job completes, your application will be available at `http://localhost:4943?canisterId={asset_canister_id}`.

If you have made changes to your backend canister, you can generate a new candid interface with

   ```bash
   npm run generate
   ```

at any time. This is recommended before starting the frontend development server, and will be run automatically any time you run `dfx deploy`.

If you are making frontend changes, you can start a development server with

## Usage
Open your web browser and navigate to http://localhost:3000.
Register a new user account or log in with an existing account.
Explore the application features such as creating posts, browsing posts by category, and interacting with other users' posts.
Enjoy sharing your thoughts and engaging with the TimeFeedV1.5 community!

## Technologies
The TimeFeedV1.5 application is built with the following technologies:

Front-end:

React.js: JavaScript library for building user interfaces.
React Router: Library for handling routing in a React application.
Axios: Promise-based HTTP client for making API requests.
Socket.io-client: WebSocket library for real-time communication.
CSS Modules: CSS styling approach for scoped styles.
Back-end:

Node.js: JavaScript runtime for running server-side applications.
Express: Web framework for building server-side applications.
MongoDB: NoSQL database for storing user and post data.
Mongoose: Object Data Modeling (ODM) library for MongoDB.
## Contributing
Contributions to the TimeFeedV1.5 project are welcome! If you find any issues or have suggestions for improvements, please open an issue on the GitHub repository. You can also fork the repository, make your changes, and submit a pull request.

When contributing to this repository, please ensure that you follow the code of conduct.

## License
The TimeFeedV1.5 project is licensed under the MIT License.


Welcome to your new TimeFeed project and to the internet computer development community. By default, creating a new project adds this README and some template files to your project directory. You can edit these template files to customize your project and to include your own code to speed up the development cycle.

To get started, you might want to explore the project directory structure and the default configuration file. Working with this project in your development environment will not affect any production deployment or identity tokens.

To learn more before you start working with tf, see the following documentation available online:

- [Quick Start](https://internetcomputer.org/docs/current/developer-docs/quickstart/hello10mins)
- [SDK Developer Tools](https://internetcomputer.org/docs/current/developer-docs/build/install-upgrade-remove)
- [Motoko Programming Language Guide](https://internetcomputer.org/docs/current/developer-docs/build/cdks/motoko-dfinity/motoko/)
- [Motoko Language Quick Reference](https://internetcomputer.org/docs/current/references/motoko-ref/)
- [JavaScript API Reference](https://erxue-5aaaa-aaaab-qaagq-cai.raw.icp0.io)

### Note on frontend environment variables

If you are hosting frontend code somewhere without using DFX, you may need to make one of the following adjustments to ensure your project does not fetch the root key in production:

- set`DFX_NETWORK` to `ic` if you are using Webpack
- use your own preferred method to replace `process.env.DFX_NETWORK` in the autogenerated declarations
  - Setting `canisters -> {asset_canister_id} -> declarations -> env_override to a string` in `dfx.json` will replace `process.env.DFX_NETWORK` with the string in the autogenerated declarations
- Write your own `createActor` constructor
# TimeFeedV1.5
