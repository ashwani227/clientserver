To run the project successfully, please make sure to install Node and Vue in your system.
Go to the ClientServer directory and run command 'node server.js'
The node server will be running on localhost:4000 and will be generating device data after a particular interval of time.

Open a new terminal window and change directory from ClientServer to ClientServer/demo
Run the command 'npm run serve'
The VueJS will be running on localhost:8081 and open this URL in the browser.
Browser will show a table with 2 default values and further newly generated values.
The socket will be broadcasting to all the connected users. In order to check, open a seperate browser window and use the URL localhost:8081 and observe the results.




<!-- Code Explaination -->
There is an extra field unique_id for the data which is a combination of both ID and the random generated value.
There are 2 benefits in using this unique_id:
1. v-bind:key will not throw error as duplicate key occurance is very rare.
2. For Client - Bonus 2, this can be used as an Identifier to look for the redundant values with different time-stamp, but due to other commitments, I am not able to complete Bonus 2 round.