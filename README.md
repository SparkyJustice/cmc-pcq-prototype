# Civil Money Claims Prototype - protected characteristic questions

This is a copy of the CMC prototype to be used for user testing with PCQs, it uses the May 2019 version of the prototype. It only runs with node version 8.12 or lower due to package dependencies. 

The call to the PCQs is made before the check your answers page. The defendant journey calls the PCQs if there is no counter claim and the full amount is repaid. This is the scenario used for user testing. Due to time contraints the prototype could not be amended to handle all the defendant journeys.

## Documentation ##
The project and planning documents are held on [Confluence](https://tools.hmcts.net/confluence/display/CD/Protected+Characteristics+Questions)

## CMC env_variables ##
BUILPACK_CLEAR_CACHE = 1

NPM_CONFIG_PRODUCTION = false
