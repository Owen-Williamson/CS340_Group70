(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['facilityRow'] = template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<tr class=\"facility-row\" data-id=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"id") || (depth0 != null ? lookupProperty(depth0,"id") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data,"loc":{"start":{"line":1,"column":34},"end":{"line":1,"column":40}}}) : helper)))
    + "\" data-c_id=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"customer_id") || (depth0 != null ? lookupProperty(depth0,"customer_id") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"customer_id","hash":{},"data":data,"loc":{"start":{"line":1,"column":53},"end":{"line":1,"column":68}}}) : helper)))
    + "\" data-location=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"location") || (depth0 != null ? lookupProperty(depth0,"location") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"location","hash":{},"data":data,"loc":{"start":{"line":1,"column":85},"end":{"line":1,"column":97}}}) : helper)))
    + "\" data-name=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"name") || (depth0 != null ? lookupProperty(depth0,"name") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data,"loc":{"start":{"line":1,"column":110},"end":{"line":1,"column":118}}}) : helper)))
    + "\">\r\n  <th>add</th>\r\n  <th>delete</th>\r\n  <th>"
    + alias4(((helper = (helper = lookupProperty(helpers,"id") || (depth0 != null ? lookupProperty(depth0,"id") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data,"loc":{"start":{"line":4,"column":6},"end":{"line":4,"column":12}}}) : helper)))
    + "</th>\r\n  <th>"
    + alias4(((helper = (helper = lookupProperty(helpers,"customer_id") || (depth0 != null ? lookupProperty(depth0,"customer_id") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"customer_id","hash":{},"data":data,"loc":{"start":{"line":5,"column":6},"end":{"line":5,"column":21}}}) : helper)))
    + "</th>\r\n  <th>"
    + alias4(((helper = (helper = lookupProperty(helpers,"location") || (depth0 != null ? lookupProperty(depth0,"location") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"location","hash":{},"data":data,"loc":{"start":{"line":6,"column":6},"end":{"line":6,"column":18}}}) : helper)))
    + "</th>\r\n  <th>"
    + alias4(((helper = (helper = lookupProperty(helpers,"name") || (depth0 != null ? lookupProperty(depth0,"name") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data,"loc":{"start":{"line":7,"column":6},"end":{"line":7,"column":14}}}) : helper)))
    + "</th>\r\n</tr>\r\n";
},"useData":true});
})();