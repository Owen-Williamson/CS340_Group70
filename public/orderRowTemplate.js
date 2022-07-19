(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['orderRow'] = template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<tr class=\"order-row\" data-id=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"id") || (depth0 != null ? lookupProperty(depth0,"id") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data,"loc":{"start":{"line":1,"column":31},"end":{"line":1,"column":37}}}) : helper)))
    + "\" data-c-id=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"customer_id") || (depth0 != null ? lookupProperty(depth0,"customer_id") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"customer_id","hash":{},"data":data,"loc":{"start":{"line":1,"column":50},"end":{"line":1,"column":65}}}) : helper)))
    + "\" data-sf-id=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"start_facility_id") || (depth0 != null ? lookupProperty(depth0,"start_facility_id") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"start_facility_id","hash":{},"data":data,"loc":{"start":{"line":1,"column":79},"end":{"line":1,"column":100}}}) : helper)))
    + "\" data-ef-id=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"end_facility_id") || (depth0 != null ? lookupProperty(depth0,"end_facility_id") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"end_facility_id","hash":{},"data":data,"loc":{"start":{"line":1,"column":114},"end":{"line":1,"column":133}}}) : helper)))
    + "\" data-cf-id=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"current_facility_id") || (depth0 != null ? lookupProperty(depth0,"current_facility_id") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"current_facility_id","hash":{},"data":data,"loc":{"start":{"line":1,"column":147},"end":{"line":1,"column":170}}}) : helper)))
    + "\" data-weight=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"weight") || (depth0 != null ? lookupProperty(depth0,"weight") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"weight","hash":{},"data":data,"loc":{"start":{"line":1,"column":185},"end":{"line":1,"column":195}}}) : helper)))
    + "\" data-volume=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"volume") || (depth0 != null ? lookupProperty(depth0,"volume") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"volume","hash":{},"data":data,"loc":{"start":{"line":1,"column":210},"end":{"line":1,"column":220}}}) : helper)))
    + "\">\r\n  <th>add</th>\r\n  <th>delete</th>\r\n  <th>"
    + alias4(((helper = (helper = lookupProperty(helpers,"id") || (depth0 != null ? lookupProperty(depth0,"id") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data,"loc":{"start":{"line":4,"column":6},"end":{"line":4,"column":12}}}) : helper)))
    + "</th>\r\n  <th>"
    + alias4(((helper = (helper = lookupProperty(helpers,"customer_id") || (depth0 != null ? lookupProperty(depth0,"customer_id") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"customer_id","hash":{},"data":data,"loc":{"start":{"line":5,"column":6},"end":{"line":5,"column":21}}}) : helper)))
    + "</th>\r\n  <th>"
    + alias4(((helper = (helper = lookupProperty(helpers,"start_facility_id") || (depth0 != null ? lookupProperty(depth0,"start_facility_id") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"start_facility_id","hash":{},"data":data,"loc":{"start":{"line":6,"column":6},"end":{"line":6,"column":27}}}) : helper)))
    + "</th>\r\n  <th>"
    + alias4(((helper = (helper = lookupProperty(helpers,"end_facility_id") || (depth0 != null ? lookupProperty(depth0,"end_facility_id") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"end_facility_id","hash":{},"data":data,"loc":{"start":{"line":7,"column":6},"end":{"line":7,"column":25}}}) : helper)))
    + "</th>\r\n  <th>"
    + alias4(((helper = (helper = lookupProperty(helpers,"current_facility_id") || (depth0 != null ? lookupProperty(depth0,"current_facility_id") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"current_facility_id","hash":{},"data":data,"loc":{"start":{"line":8,"column":6},"end":{"line":8,"column":29}}}) : helper)))
    + "</th>\r\n  <th>"
    + alias4(((helper = (helper = lookupProperty(helpers,"weight") || (depth0 != null ? lookupProperty(depth0,"weight") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"weight","hash":{},"data":data,"loc":{"start":{"line":9,"column":6},"end":{"line":9,"column":16}}}) : helper)))
    + "</th>\r\n  <th>"
    + alias4(((helper = (helper = lookupProperty(helpers,"volume") || (depth0 != null ? lookupProperty(depth0,"volume") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"volume","hash":{},"data":data,"loc":{"start":{"line":10,"column":6},"end":{"line":10,"column":16}}}) : helper)))
    + "</th>\r\n</tr>\r\n";
},"useData":true});
})();