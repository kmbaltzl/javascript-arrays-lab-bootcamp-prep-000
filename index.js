var kittens = ["Milo", "Otis", "Garfield"]

function destructivelyAppendKitten(name) {
  kittens.push(name)
  return kittens
}

function destructivelyPrependKitten(name) {
  kittens.unshift(name)
  return kittens
  }
  
  function destructivelyRemoveLastKitten(name) {
   kittens.pop()
   return kittens
  }
  
  function destructivelyRemoveFirstKitten(name) {
    kittens = kittens.slice(1)
    return kittens
  }
  
  function appendKitten(name) {
   var kitten = [...kittens, name]
    return kitten
  }
  
   function prependKitten(name) {
    var kitten = [name,...kittens]
    return kitten
  }
  
  function removesLastKitten(name) {
    var kitten = name.slice(0,kittens.length-1)
    return kitten
  }