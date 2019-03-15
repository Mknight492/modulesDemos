const namedImport = "This is a named import/export"
const anotherNamedImport = "this is another named import/export"


//i export an object with as many other named objects inside of it.
//in reality this creates an object like this 
/*
{
namedImport : namedImport,
anotherNamedImport: anotherNamedImport
}
*/
export {namedImport, anotherNamedImport}