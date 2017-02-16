import DS from 'ember-data';

export default DS.Model.extend({
  complaintId: DS.attr('string'),
  dateReceived: DS.attr('string'),
  dateSentToCompany: DS.attr('string'),
  timelyResponse: DS.attr('string'),
  consumerDisputed: DS.attr('string'),
  submittedVia: DS.attr('string'),
  createdAt: DS.attr('string'),
  updatedAt: DS.attr('string'),
  consumerComplaintCompanies: DS.belongsTo('consumer-complaint-company'),
  consumerComplaintProducts: DS.belongsTo('consumer-complaint-product'),
  consumerComplaintSubproducts: DS.belongsTo('consumer-complaint-subproduct'),
  consumerComplaintIssues: DS.belongsTo('consumer-complaint-issue'),
  consumerComplaintSubissues: DS.belongsTo('consumer-complaint-subissue')
});
