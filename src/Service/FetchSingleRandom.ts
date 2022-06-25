const FetchSingleRandom = () => {
    const data = fetch(`https://www.themealdb.com/api/json/v1/1/random.php`)
        .then((response) => response.json())
        .then((data) => data.meals)
        .catch((err) => {
            throw new Error(err);
            
        })
    return data
}

export default FetchSingleRandom;