# BackstopJS scenario properties used in this course:

```
label                    // [required] Tag saved with your reference images
url                       // [required] The url of your app state
readySelector            // Wait until this selector exists before continuing.
hideSelectors            // Array of selectors set to visibility: hidden
removeSelectors          // Array of selectors set to display: none
onReadyScript            // After the above conditions are met -- use this script to modify UI state prior to screen shots e.g. hovers, clicks etc.
clickSelector            // Click the specified DOM element prior to screen shot (available with default onReadyScript)
postInteractionWait      // Wait for a selector after interacting with hoverSelector or clickSelector (optionally accepts wait time in ms. Idea for use with a click or hover element transition. available with default onReadyScript)
selectors                // Array of selectors to capture. Defaults to document if omitted. Use "viewport" to capture the viewport size. See Targeting elements in the next section for more info...
misMatchThreshold        // Percentage of different pixels allowed to pass test
requireSameDimensions    // If set to true -- any change in selector size will trigger a test failure.
```
