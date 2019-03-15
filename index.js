
// as namedExport is a named import I must use a named export
import {namedExport } from "./namedExport"

//here i must use a * as it's a default export
// I can also rename the variable to anything i Like here
import * as defaultExport from "./defaultExport"

// import {defaultExport} from "./defaultExport.js" <--- this doesn't work - you're mixing the two up