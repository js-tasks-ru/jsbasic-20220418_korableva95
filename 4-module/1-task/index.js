function makeFriendsList(friends) {
  let list = document.createElement('ul')
for(let name of friends){
list.innerHTML += `<li>${name.firstName} ${name.lastName}</li>`
}
return list
}
