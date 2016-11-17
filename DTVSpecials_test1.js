
module.exports = {
    tags: ['DirectSpecials'],
    'DirectSpecials Test1' : function (client) {
        client
            .url('http://www.directspecials.com')
            .waitForElementVisible('body',1000)

            // Make sure DNIS is displayed
            .verify.visible('.h-phone')

            // Test that DTV price display
            .verify.containsText('.hero-price .price-point .price-point__dollars','50')
            // Test promo code display
            .verify.containsText('.h-promo','707-113')

            // Test Internet price display

            // hover over menu item and verify dropdown menu appears
            .verify.hidden('.dropdown')
            .moveToElement('.main_nav li:nth-child(2)',20,20)
            .pause(1000)
            .verify.visible('.dropdown')
            // hover over OFFER DETAILS and make sure legal div appears
            .moveToElement('.js-tooltipster-pricing',15,4)
            .pause(1000)
            .verify.visible('.tooltipster-dstar')

            // check that form errors are hidden
            .verify.hidden('.parsley-errors')

            // fill out contact form
            .clearValue('#FirstName')
            .setValue('#FirstName','Test')
            .clearValue('#LastName')
            .setValue('#LastName','Green')
            .clearValue('#Phone1')

            // attempt submit with missing data and check error message pops
            .submitForm('#contact-form')
            .pause(1000)
            .verify.visible('.parsley-errors')

            // fill out remaining data and submit form
            .setValue('#Phone1','7046971281')
            .clearValue('#ZipCode')
            .setValue('#ZipCode','28210')
            .submitForm('#contact-form')
            .pause(1000)

            // check thank you url and message
            .waitForElementVisible('body',1000)
            .assert.urlContains('directv-order-thank-you')
            .assert.containsText('.content_thanks','A DIRECTV specialist will contact you shortly')

            .end();
    }
};