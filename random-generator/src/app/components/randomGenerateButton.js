function handleClick() {
    alert("Button geklickt!");
    //Math.Floor(Math.Random() * 3);
}

export default function RandomGenerateButton() {
    return (
        <button type="button" onclick={handleClick} class="text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2" >New Random Combination</button>
    )
}