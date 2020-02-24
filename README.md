Lit-Element Component
-------------

Usage: 

   <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <script src="node_modules/@webcomponents/webcomponentsjs/webcomponents-loader.js"></script>
      <script src="node_modules/@webcomponents/webcomponentsjs/webcomponents-bundle.js"></script>
      <script type="module" src="node_modules/checkout-descriptor"></script>
      <title>Lit Element</title>
    </head>
    <body>
      <ps-description text="hola"></ps-description>
    </body>
    </html>

Where the available options are:

| Property      | Type          | Description                                                 |
| ------------- | ------------- | ----------------------------------------------------------- |
| text          | String        | Text to render, element won't render if no text is supplied |