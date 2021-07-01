  
  
  // start with strings, numbers and booleans
  console.log("start with strings, numbers and booleans");

    let age = 20;
    let age2 = age;
    console.table(age,age2);
    age = 30;
    console.table(age,age2);
    age2 = 40;
    console.table(age,age2);

    console.log("if u change value of age it dosen't goona effect");


    // Let's say we have an array
    const players = ['Wes', 'Sarah', 'Ryan', 'Poppy'];

    // and we want to make a copy of it.
    let team = players;
    console.log(team,players);

    // You might think we can just do something like this:
    team[3] = 'lux';

    // however what happens when we update that array?
    console.log("now here is the problem!")
    console.log(team,players);

    // now here is the problem!
    console.log("oh no - we have edited the original array too!");

    // oh no - we have edited the original array too!

    // Why? It's because that is an array reference, not an array copy. They both point to the same array!
    console.log("Why? It's because that is an array reference, not an array copy. They both point to the same array!");

    // So, how do we fix this? We take a copy instead!
    console.log("So, how do we fix this? We take a copy instead!");

    // one way
    console.log("one way")
    const team2 = players.slice();
    console.log(team2,players);

    team2[3] = 'hello';
    console.log(team2,players);

    // or create a new array and concat the old one in
    console.log("or create a new array and concat the old one in")
    let team3 = [].concat(players);

    // or use the new ES6 Spread
    console.log("or use the new ES6 Spread")
    let team4 = [...players];
    console.log(team4,players);
    team4[3] = 'hee haaw'
    console.log(team4,players);

    // now when we update it, the original one isn't changed
    console.log("now when we update it, the original one isn't changed");

    // The same thing goes for objects, let's say we have a person object
    console.log("The same thing goes for objects, let's say we have a person object")

    // with Objects
    const person = {
      name: 'Wes Bos',
      age: 80
    };

    // and think we make a copy:
    console.log("and think we make a copy:");
    let colt = person;
    console.log(colt,person);
    colt.age = 40;
    console.log(colt,person)

    // how do we take a copy instead?
    console.log("how do we take a copy instead?")
    let steele = Object.assign({},person,{age:35});
    console.log(steele,person);

    // We will hopefully soon see the object ...spread
    console.log("We will hopefully soon see the object ...spread");
    // const steele2 = {...person};

    // Things to note - this is only 1 level deep - both for Arrays and Objects. lodash has a cloneDeep method, but you should think twice before using it.
    console.log("Things to note - this is only 1 level deep - both for Arrays and Objects. lodash has a cloneDeep method, but you should think twice before using it.");

    const wes = {
      name: 'Wes',
      age: 100,
      social: {
        twitter: '@wesbos',
        facebook: 'wesbos.developer'
      }
    };
    let dev = Object.assign({}, wes)
    console.log(wes,dev);
    dev.social.twitter = "bla bla"
    console.log(wes.social,dev.social);

    console.log("it will only work 1 level deep")



