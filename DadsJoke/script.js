const joke = document.querySelector("#jokes")
const btn = document.querySelector("button")
const getDadJoke = async () => {
    try{
        const confic = {headers:{Accept: 'application/json'}};
        const res = await axios.get("https://icanhazdadjoke.com/",confic)
        return res.data.joke;
    }
    catch (e){
        return"Error !!!!";
    }
}
const addJoke = async () => {
    jk =  await getDadJoke()
    const newLI = document.createElement('li')
    newLI.append(jk)
    joke.append(newLI)
}
btn.addEventListener("click", addJoke);