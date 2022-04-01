Things which can be improved

- Date Validation: If the user manually types in '2022-02-31', it will be prevent from submiiting in the browser. But it can be hard to be validated in JavaScript.
- The different ways to handle invalid date in Chrome, Edge vs. Safari, firefox. Invalid date like '2022-02-29' will be caught by Chrome, converting it into '2022-03-01' ('2022-02-29' into '2022-03-02'). However, Safari and Firefox will simply throw a syntax error.
