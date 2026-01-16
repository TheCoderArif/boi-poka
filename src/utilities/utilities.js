const getDataFromLS = () => {
    const bookList = localStorage.getItem('book-list');
    if (bookList) {
        const parsedBookList = JSON.parse(bookList);
        return parsedBookList;
    }
    else
        return [];
};

const setDataToLS = (id) => {
    const previousData = getDataFromLS();
    if (previousData.includes(id)){
        console.log(id, 'is already in the list')
    }
    else
        previousData.push(id);

    

    const bookDataStr = JSON.stringify(previousData);
    localStorage.setItem('book-list', bookDataStr);

}

export {setDataToLS};