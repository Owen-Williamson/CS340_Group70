(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['deliveryRow'] = template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<tr class=\"order-row\" data-id=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"id") || (depth0 != null ? lookupProperty(depth0,"id") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data,"loc":{"start":{"line":1,"column":31},"end":{"line":1,"column":37}}}) : helper)))
    + "\" data-d-id=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"driver_id") || (depth0 != null ? lookupProperty(depth0,"driver_id") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"driver_id","hash":{},"data":data,"loc":{"start":{"line":1,"column":50},"end":{"line":1,"column":63}}}) : helper)))
    + "\" data-t-id=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"truck_id") || (depth0 != null ? lookupProperty(depth0,"truck_id") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"truck_id","hash":{},"data":data,"loc":{"start":{"line":1,"column":76},"end":{"line":1,"column":88}}}) : helper)))
    + "\" data-sf-id=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"start_facility_id") || (depth0 != null ? lookupProperty(depth0,"start_facility_id") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"start_facility_id","hash":{},"data":data,"loc":{"start":{"line":1,"column":102},"end":{"line":1,"column":123}}}) : helper)))
    + "\" data-ef-id=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"end_facility_id") || (depth0 != null ? lookupProperty(depth0,"end_facility_id") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"end_facility_id","hash":{},"data":data,"loc":{"start":{"line":1,"column":137},"end":{"line":1,"column":156}}}) : helper)))
    + "\" data-weight=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"total_weight") || (depth0 != null ? lookupProperty(depth0,"total_weight") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"total_weight","hash":{},"data":data,"loc":{"start":{"line":1,"column":171},"end":{"line":1,"column":187}}}) : helper)))
    + "\" data-volume=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"total_volume") || (depth0 != null ? lookupProperty(depth0,"total_volume") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"total_volume","hash":{},"data":data,"loc":{"start":{"line":1,"column":202},"end":{"line":1,"column":218}}}) : helper)))
    + "\" data-late=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"late") || (depth0 != null ? lookupProperty(depth0,"late") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"late","hash":{},"data":data,"loc":{"start":{"line":1,"column":231},"end":{"line":1,"column":239}}}) : helper)))
    + "\" data-dt=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"departure_time") || (depth0 != null ? lookupProperty(depth0,"departure_time") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"departure_time","hash":{},"data":data,"loc":{"start":{"line":1,"column":250},"end":{"line":1,"column":268}}}) : helper)))
    + "\" data-eat=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"expected_arrival_time") || (depth0 != null ? lookupProperty(depth0,"expected_arrival_time") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"expected_arrival_time","hash":{},"data":data,"loc":{"start":{"line":1,"column":280},"end":{"line":1,"column":305}}}) : helper)))
    + "\" data-aat=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"actual_arrival_time") || (depth0 != null ? lookupProperty(depth0,"actual_arrival_time") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"actual_arrival_time","hash":{},"data":data,"loc":{"start":{"line":1,"column":317},"end":{"line":1,"column":340}}}) : helper)))
    + "\">\r\n  <th>add</th>\r\n  <th>delete</th>\r\n  <th>"
    + alias4(((helper = (helper = lookupProperty(helpers,"id") || (depth0 != null ? lookupProperty(depth0,"id") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data,"loc":{"start":{"line":4,"column":6},"end":{"line":4,"column":12}}}) : helper)))
    + "</th>\r\n  <th>"
    + alias4(((helper = (helper = lookupProperty(helpers,"driver_id") || (depth0 != null ? lookupProperty(depth0,"driver_id") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"driver_id","hash":{},"data":data,"loc":{"start":{"line":5,"column":6},"end":{"line":5,"column":19}}}) : helper)))
    + "</th>\r\n  <th>"
    + alias4(((helper = (helper = lookupProperty(helpers,"truck_id") || (depth0 != null ? lookupProperty(depth0,"truck_id") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"truck_id","hash":{},"data":data,"loc":{"start":{"line":6,"column":6},"end":{"line":6,"column":18}}}) : helper)))
    + "</th>\r\n  <th>"
    + alias4(((helper = (helper = lookupProperty(helpers,"start_facility_id") || (depth0 != null ? lookupProperty(depth0,"start_facility_id") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"start_facility_id","hash":{},"data":data,"loc":{"start":{"line":7,"column":6},"end":{"line":7,"column":27}}}) : helper)))
    + "</th>\r\n  <th>"
    + alias4(((helper = (helper = lookupProperty(helpers,"end_facility_id") || (depth0 != null ? lookupProperty(depth0,"end_facility_id") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"end_facility_id","hash":{},"data":data,"loc":{"start":{"line":8,"column":6},"end":{"line":8,"column":25}}}) : helper)))
    + "</th>\r\n  <th>"
    + alias4(((helper = (helper = lookupProperty(helpers,"total_weight") || (depth0 != null ? lookupProperty(depth0,"total_weight") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"total_weight","hash":{},"data":data,"loc":{"start":{"line":9,"column":6},"end":{"line":9,"column":22}}}) : helper)))
    + "</th>\r\n  <th>"
    + alias4(((helper = (helper = lookupProperty(helpers,"total_volume") || (depth0 != null ? lookupProperty(depth0,"total_volume") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"total_volume","hash":{},"data":data,"loc":{"start":{"line":10,"column":6},"end":{"line":10,"column":22}}}) : helper)))
    + "</th>\r\n  <th>"
    + alias4(((helper = (helper = lookupProperty(helpers,"late") || (depth0 != null ? lookupProperty(depth0,"late") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"late","hash":{},"data":data,"loc":{"start":{"line":11,"column":6},"end":{"line":11,"column":14}}}) : helper)))
    + "</th>\r\n  <th>"
    + alias4(((helper = (helper = lookupProperty(helpers,"departure_time") || (depth0 != null ? lookupProperty(depth0,"departure_time") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"departure_time","hash":{},"data":data,"loc":{"start":{"line":12,"column":6},"end":{"line":12,"column":24}}}) : helper)))
    + "</th>\r\n  <th>"
    + alias4(((helper = (helper = lookupProperty(helpers,"expected_arrival_time") || (depth0 != null ? lookupProperty(depth0,"expected_arrival_time") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"expected_arrival_time","hash":{},"data":data,"loc":{"start":{"line":13,"column":6},"end":{"line":13,"column":31}}}) : helper)))
    + "</th>\r\n  <th>"
    + alias4(((helper = (helper = lookupProperty(helpers,"actual_arrival_time") || (depth0 != null ? lookupProperty(depth0,"actual_arrival_time") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"actual_arrival_time","hash":{},"data":data,"loc":{"start":{"line":14,"column":6},"end":{"line":14,"column":29}}}) : helper)))
    + "</th>\r\n</tr>\r\n";
},"useData":true});
})();