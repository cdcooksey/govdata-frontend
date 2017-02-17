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
  consumerComplaintCompany: DS.belongsTo('consumer-complaint-company'),
  consumerComplaintProduct: DS.belongsTo('consumer-complaint-product'),
  consumerComplaintSubproduct: DS.belongsTo('consumer-complaint-subproduct'),
  consumerComplaintIssue: DS.belongsTo('consumer-complaint-issue'),
  consumerComplaintSubissue: DS.belongsTo('consumer-complaint-subissue')
});
