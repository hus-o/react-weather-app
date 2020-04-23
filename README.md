## React-Weather-App

### Plan
* CRA, install enzyme, delete unneccessary files from CRA and create a test folder
* Run a simple "render without crashing" test to pass
* Initial commit to Github
* Create basic input component and placeholder image homepage
* Create routes
* Create API calls and results page
* Add tests for image and weather api rendering / no input
* Further styling
* Cleanup and check everything works as intended

### Pre-lunch notes
* Struggled with making form submit redirect to new route with the search data - managed to solve using withRouter history
* Missing "https" infront of weather API string resulted in 404, took about an hour to realise and fix

### Post-lunch notes
* There was some struggle in getting the image to load on time or have a placeholder text, due to my image search requiring the weather API's description - to bring the user a more representative image. I could've done it by having the image call within the same function as the weather API but I thought it would be too messy. Sadly I couldn't find a way around it after that, and with time being short I just let the load time incur a 1-2 second penalty.
* I made the image component separate - this was slightly more work but I liked the learning opportunity, it allowed me to serve an image to the home page and results page - differently, depending on a condition.
* Some stuff I'd like to work on:
* I added a error handler, but I wasn't sure how to test it to see if it works - this 
* Being able to add Home page tests. Due to some error about withRouter being used outside a router - I done this near the begining to allow pass the state and change the page, it looked simple and it worked - didn't realise I'd be dealing with problems later - the other button I have is simply linked via HTML. I'd probably like to go a similar route so that my Home test file can be working and I can simulate clicks and changes
* I'd like to add more detail to the results and make sure the image loading has a placeholder or some sort of onLoad function
