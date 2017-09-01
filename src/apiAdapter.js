export const getWords = () =>{
  return(
    fetch('http://localhost:3000/home')
    .then(res => res.json())

  )
}
