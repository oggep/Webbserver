
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/Webshop', {useNewUrlParser: true});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {

});

const personSchema = new mongoose.Schema({
    name: String,
    age: Number,
  });

  personSchema.methods.speak = () => {
      console.log("hej");
      const presetation = this.name 
      ? `my name is ${this.name}.` 
      : `We are watching you!`
  }

  const Person = mongoose.model('Person', personSchema);

  const oskar = new Person ({name: 'Oskar', age: 18});
  const philip = new Person ({name: 'Philip', age: 18});
  const hugo = new Person ({name: 'Hugo', age: 17});
  const mojje = new Person ({name: 'Mojje', age: 19});
  

  oskar.save();
  philip.save();
  hugo.save();
  mojje.save();
