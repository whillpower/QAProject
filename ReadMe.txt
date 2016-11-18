README

wgreen’s QA Project

Running the test - The MacBook I have from RV doesn’t give me root user access, so Nightwatch had to be installed locally.  As such, you’ll need to start in the bin folder of the project to use the Nightwatch runner, then use the node nightwatch command with the -t option to run just the DTVSpecials_test1 file.

	>cd ./wgreenQAproject/bin

	>node nightwatch -t ../test/DTVSpecials_test1.js

This assumes you have Nightwatch installed globally on your machine.  If you don't, you can install it locally within your project folder.

The config is set up to start the selenium server automatically when the test runs.

This is a quick test that ensures key components of the www.directspecials.com home page are visible and functional.  There are 11 tests contained within it:

Initial Test
1- site body is visible

Key Information
2- span containing the DNIS is visible
3- span containing the DTV price has a value of ’50’
4- span containing the promo code has a value of ‘707-113’

Interactive Elements
5- the header dropdown menu is hidden by default
6- the header dropdown menu appears when hovered over
7- the legal disclosure for the DTV offer appears when hovered over

Contact Form
8- the contact form error message is hidden by default
9- the contact form error message appears when incomplete data is submitted
10 & 11- when a valid lead is submitted, the url changes to the thank you page and the appropriate message is displayed


STRATEGY
I went with simple tests, since this is the first time I’ve written a unit test, let alone used Nightwatch or Selenium.  Without access to the variables governing which DNIS, promo code, and price point are displayed, I’m not able to generate a dynamic test to compare an expected result with the actual value.

Additional tests could be written to ensure links redirect properly, I’m working on those as well as exploring some other features of the API.  I’m also building out Firefox and Explorer versions of the test.

The key metrics on the site that need to be there and accurate are going to be:
DNIS - is it one of ours and is it displayed?  If it’s not our number or it’s not populating, how would RV make money?

Promo code - I assume this is tied to halo data and would typically signify an interaction id was generated and we’re able to track this user interaction.

Pricing - a big selling point, the most common reason a person browses the site.  This needs to be right.

Legal - gotta have those restrictions

