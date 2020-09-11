    const people = [
      { name: 'Wes', year: 1988 },
      { name: 'Kait', year: 1986 },
      { name: 'Irv', year: 1970 },
      { name: 'Lux', year: 2015 }
    ];

    const comments = [
      { text: 'Love this!', id: 523423 },
      { text: 'Super good', id: 823423 },
      { text: 'You are the best', id: 2039842 },
      { text: 'Ramen is my fav food ever', id: 123523 },
      { text: 'Nice Nice Nice!', id: 542328 }
    ];

    // Some and Every Checks
    // Array.prototype.some() // is at least one person 19 or older?
    const date = new Date();
    const years = date.getFullYear();
    console.log(years);

    let age = people.map((a) =>{
      return  (years - a.year);
    })

    let checkSome = age.some(persons => (persons >= 19));
    console.log(checkSome);

                        //OR
    const isAdult = people.some(person => ((new Date()).getFullYear()) - person.year >= 19);

    // Array.prototype.every() // is everyone 19 or older?
    let checkEvery = age.every(persons => (persons >= 19));
    console.log(checkEvery);

    // Array.prototype.find()
    // Find is like filter, but instead returns just the one you are looking for
    // find the comment with the ID of 823423
    let findComment = comments.find(a => a.id === 823423);
    console.log(findComment);

    // Array.prototype.findIndex()
    // Find the comment with this ID
     let findCommentAny = comments.findIndex(a => (a.id === 823423));
    console.log(findCommentAny);

    // delete the comment with the ID of 823423
  let commentsAfter = comments.splice(1, 1);
  console.table(comments); 



