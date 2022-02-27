/**
 * Object that represents a folder
 */
Platform.Models.Folder = Em.Object.extend({
    
    name           : '',
    path           : '',
    indent         : false,
    description    : '',
    isMetro        : false,
    
    contents       : false
    
});