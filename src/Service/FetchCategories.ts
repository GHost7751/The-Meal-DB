const fetchCategories = () => {
    const data = fetch(`https://www.themealdb.com/api/json/v1/1/categories.php`)
    .then((response) => response.json())
    .then((data) => data.categories)

    return data
}

export default fetchCategories;