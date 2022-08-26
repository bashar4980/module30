// Write an arrow function where it will do the following:
// a) It will take an array where the array elements will be the
// name of your friends
// b) Check if the length of each element is even, push elements
// with even length to a new array and return the result;

const friends = ['Rimon', 'Amin' , 'Raju', 'Sagor' , "Masud" , "Abdul Jobbar" , 'Kutub uddin'];

const getEvenLengthName = friends =>{
    const evenFriendName = []
       for(let friend of friends){
         if(friend.length % 2 === 0){
            evenFriendName.push(friend);
         }
       }
    return evenFriendName;
}

console.log(getEvenLengthName(friends));


const getFriends = friends.filter((friend)=>{
    const result = friend.length %2 === 0;
    return result ;
})

console.log(getFriends);