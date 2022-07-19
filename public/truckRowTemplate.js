(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['truckRow'] = template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<tr class=\"et-row\" class=\"et-data-row\" class=\"truck-row\" data-id=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"id") || (depth0 != null ? lookupProperty(depth0,"id") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data,"loc":{"start":{"line":1,"column":66},"end":{"line":1,"column":72}}}) : helper)))
    + "\" data-cf-id=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"current_facility_id") || (depth0 != null ? lookupProperty(depth0,"current_facility_id") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"current_facility_id","hash":{},"data":data,"loc":{"start":{"line":1,"column":86},"end":{"line":1,"column":109}}}) : helper)))
    + "\" data-plate=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"plate") || (depth0 != null ? lookupProperty(depth0,"plate") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"plate","hash":{},"data":data,"loc":{"start":{"line":1,"column":123},"end":{"line":1,"column":132}}}) : helper)))
    + "\" data-mw=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"max_weight") || (depth0 != null ? lookupProperty(depth0,"max_weight") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"max_weight","hash":{},"data":data,"loc":{"start":{"line":1,"column":143},"end":{"line":1,"column":157}}}) : helper)))
    + "\" data-mv=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"max_volume") || (depth0 != null ? lookupProperty(depth0,"max_volume") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"max_volume","hash":{},"data":data,"loc":{"start":{"line":1,"column":168},"end":{"line":1,"column":182}}}) : helper)))
    + "\">\r\n  <td>add</td>\r\n  <td>delete</td>\r\n  <td>"
    + alias4(((helper = (helper = lookupProperty(helpers,"id") || (depth0 != null ? lookupProperty(depth0,"id") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data,"loc":{"start":{"line":4,"column":6},"end":{"line":4,"column":12}}}) : helper)))
    + "</td>\r\n  <td>"
    + alias4(((helper = (helper = lookupProperty(helpers,"current_facility_id") || (depth0 != null ? lookupProperty(depth0,"current_facility_id") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"current_facility_id","hash":{},"data":data,"loc":{"start":{"line":5,"column":6},"end":{"line":5,"column":29}}}) : helper)))
    + "</td>\r\n  <td>"
    + alias4(((helper = (helper = lookupProperty(helpers,"plate") || (depth0 != null ? lookupProperty(depth0,"plate") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"plate","hash":{},"data":data,"loc":{"start":{"line":6,"column":6},"end":{"line":6,"column":15}}}) : helper)))
    + "</td>\r\n  <td>"
    + alias4(((helper = (helper = lookupProperty(helpers,"max_weight") || (depth0 != null ? lookupProperty(depth0,"max_weight") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"max_weight","hash":{},"data":data,"loc":{"start":{"line":7,"column":6},"end":{"line":7,"column":20}}}) : helper)))
    + "</td>\r\n  <td>"
    + alias4(((helper = (helper = lookupProperty(helpers,"max_volume") || (depth0 != null ? lookupProperty(depth0,"max_volume") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"max_volume","hash":{},"data":data,"loc":{"start":{"line":8,"column":6},"end":{"line":8,"column":20}}}) : helper)))
    + "</td>\r\n</tr>\r\n";
},"useData":true});
})();