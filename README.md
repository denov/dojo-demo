This is a demo to show how to structure and wire up a single screen web app using dojo (1.9.2).

This demo is using Spring Boot (http://projects.spring.io/spring-boot/) to start up the demo. To start the app;

    mvn spring-boot:run


To build JS for production

    mvn exec:exec

** Make sure to change the path to the CSS and Dojo in index.html to test build and or to deploy to production.


Things shown in this app:

 * Complete separation on concerns.  Markup, Style (CSS), logic, and text are all in separate files. Under /js/app/widget you'll find
   * Templates are located in the templates dir.
   * String Bundles are located in the nls dir.  To add support for different located one just needs to create the correctly named folder with the needed js files.
   * CSS is located in the resources dir.

 * Usable browser forward and back buttons, along being bookmark'able

 * screen1 shows the use of the LayoutContainer with a dojox.GridContainer and a couple dojox.widget.Portlet dijits.

 * screen2 shows the use of the AccordionContainer and loading of external content via the ContentPane's href attribute.

 * screen3 shows the use custom Dialog.









