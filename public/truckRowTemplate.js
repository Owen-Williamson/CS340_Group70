(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['truckRow'] = template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<tr class=\"truck-row\" data-id=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"id") || (depth0 != null ? lookupProperty(depth0,"id") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data,"loc":{"start":{"line":1,"column":31},"end":{"line":1,"column":37}}}) : helper)))
    + "\" data-cf-id=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"current_facility_id") || (depth0 != null ? lookupProperty(depth0,"current_facility_id") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"current_facility_id","hash":{},"data":data,"loc":{"start":{"line":1,"column":51},"end":{"line":1,"column":74}}}) : helper)))
    + "\" data-plate=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"plate") || (depth0 != null ? lookupProperty(depth0,"plate") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"plate","hash":{},"data":data,"loc":{"start":{"line":1,"column":88},"end":{"line":1,"column":97}}}) : helper)))
    + "\" data-mw=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"max_weight") || (depth0 != null ? lookupProperty(depth0,"max_weight") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"max_weight","hash":{},"data":data,"loc":{"start":{"line":1,"column":108},"end":{"line":1,"column":122}}}) : helper)))
    + "\" data-mv=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"max_volume") || (depth0 != null ? lookupProperty(depth0,"max_volume") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"max_volume","hash":{},"data":data,"loc":{"start":{"line":1,"column":133},"end":{"line":1,"column":147}}}) : helper)))
    + "\">\r\n  <th>add</th>\r\n  <th>delete</th>\r\n  <th>"
    + alias4(((helper = (helper = lookupProperty(helpers,"id") || (depth0 != null ? lookupProperty(depth0,"id") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data,"loc":{"start":{"line":4,"column":6},"end":{"line":4,"column":12}}}) : helper)))
    + "</th>\r\n  <th>"
    + alias4(((helper = (helper = lookupProperty(helpers,"current_facility_id") || (depth0 != null ? lookupProperty(depth0,"current_facility_id") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"current_facility_id","hash":{},"data":data,"loc":{"start":{"line":5,"column":6},"end":{"line":5,"column":29}}}) : helper)))
    + "</th>\r\n  <th>"
    + alias4(((helper = (helper = lookupProperty(helpers,"plate") || (depth0 != null ? lookupProperty(depth0,"plate") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"plate","hash":{},"data":data,"loc":{"start":{"line":6,"column":6},"end":{"line":6,"column":15}}}) : helper)))
    + "</th>\r\n  <th>"
    + alias4(((helper = (helper = lookupProperty(helpers,"max_weight") || (depth0 != null ? lookupProperty(depth0,"max_weight") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"max_weight","hash":{},"data":data,"loc":{"start":{"line":7,"column":6},"end":{"line":7,"column":20}}}) : helper)))
    + "</th>\r\n  <th>"
    + alias4(((helper = (helper = lookupProperty(helpers,"max_volume") || (depth0 != null ? lookupProperty(depth0,"max_volume") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"max_volume","hash":{},"data":data,"loc":{"start":{"line":8,"column":6},"end":{"line":8,"column":20}}}) : helper)))
    + "</th>\r\n</tr>\r\n";
},"useData":true});
})();