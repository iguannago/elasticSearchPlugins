var store = DS.Store.create({
  // Optional elasticsearch URL
  //
  adapter: DS.ElasticSearchAdapter.create({url: 'http://localhost:9200'}),
  // `revision` is an internal Ember compatibility tracking
  //
  revision: 4
});



Person = DS.Model.extend({ name: DS.attr('string') });

Person.reopenClass({ url: 'people/person' });

Person.createRecord({ id: 1, name: "John" });
store.commit();

var people = Person.find();
people.toArray().map( function(person) { return person.get("name") } );
// => ["John"]

var person = Person.find(1);
person.set("name", "Frank");
store.commit();

var people = Person.find( {query: { query_string: { query: "frank" } }} );
people.toArray().map( function(person) { return person.get("name") } );
// => ["Frank"]

