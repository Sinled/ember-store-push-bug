import DS from 'ember-data';

export default DS.Model.extend({
	someNumberField: DS.attr('number', { defaultValue: 1 }),
});
