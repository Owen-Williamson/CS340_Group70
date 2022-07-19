(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['driverRow'] = template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<tr class=\"driver-row\" data-id=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"id") || (depth0 != null ? lookupProperty(depth0,"id") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data,"loc":{"start":{"line":1,"column":32},"end":{"line":1,"column":38}}}) : helper)))
    + "\" data-name=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"name") || (depth0 != null ? lookupProperty(depth0,"name") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data,"loc":{"start":{"line":1,"column":51},"end":{"line":1,"column":59}}}) : helper)))
    + "\" data-email=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"email") || (depth0 != null ? lookupProperty(depth0,"email") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"email","hash":{},"data":data,"loc":{"start":{"line":1,"column":73},"end":{"line":1,"column":82}}}) : helper)))
    + "\" data-ld=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"ld") || (depth0 != null ? lookupProperty(depth0,"ld") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"ld","hash":{},"data":data,"loc":{"start":{"line":1,"column":93},"end":{"line":1,"column":99}}}) : helper)))
    + "\" data-ed=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"ed") || (depth0 != null ? lookupProperty(depth0,"ed") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"ed","hash":{},"data":data,"loc":{"start":{"line":1,"column":110},"end":{"line":1,"column":116}}}) : helper)))
    + "\">\r\n  <th>add</th>\r\n  <th>delete</th>\r\n  <th>"
    + alias4(((helper = (helper = lookupProperty(helpers,"id") || (depth0 != null ? lookupProperty(depth0,"id") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data,"loc":{"start":{"line":4,"column":6},"end":{"line":4,"column":12}}}) : helper)))
    + "</th>\r\n  <th>"
    + alias4(((helper = (helper = lookupProperty(helpers,"name") || (depth0 != null ? lookupProperty(depth0,"name") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data,"loc":{"start":{"line":5,"column":6},"end":{"line":5,"column":14}}}) : helper)))
    + "</th>\r\n  <th>"
    + alias4(((helper = (helper = lookupProperty(helpers,"email") || (depth0 != null ? lookupProperty(depth0,"email") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"email","hash":{},"data":data,"loc":{"start":{"line":6,"column":6},"end":{"line":6,"column":15}}}) : helper)))
    + "</th>\r\n  <th>"
    + alias4(((helper = (helper = lookupProperty(helpers,"ld") || (depth0 != null ? lookupProperty(depth0,"ld") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"ld","hash":{},"data":data,"loc":{"start":{"line":7,"column":6},"end":{"line":7,"column":12}}}) : helper)))
    + "</th>\r\n  <th>"
    + alias4(((helper = (helper = lookupProperty(helpers,"ed") || (depth0 != null ? lookupProperty(depth0,"ed") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"ed","hash":{},"data":data,"loc":{"start":{"line":8,"column":6},"end":{"line":8,"column":12}}}) : helper)))
    + "</th>\r\n</tr>\r\n";
},"useData":true});
})();