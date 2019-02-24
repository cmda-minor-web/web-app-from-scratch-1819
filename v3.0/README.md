Notes:
What am i working on?
    - checkboxverify() looks for the checked boxes that come after .name
    - it's loop should notice which ones are checked (true) and then add the .name (names) that come before it to an array
    - this array contains only strings and is passed on to callAPIDetail
    - callAPIDetail converts is to the associated fg number
    - callAPIDetail attaches it to its url string and fetches it to get data filtered by the checkboxes.
    - callAPIDetail gives us an productnumber which will be added to CallAPI() which returns product specific nutrient info and calls the template function to handle DOM manipulation