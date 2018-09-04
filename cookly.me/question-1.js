var check = (str => {
  return str.split('').reverse().join('').toLowerCase() == str.toLowerCase()
})

console.log(check('Anna'))

console.log(check('HelloWOrld'))