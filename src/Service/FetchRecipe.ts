const fetchRecipe = (id : string | undefined) => {
    const data = fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
    .then((response) => response.json())
    .then((data) => data.meals)
    .catch((err) => {
        throw new Error ( err )
    })

    return data
}

export default fetchRecipe;