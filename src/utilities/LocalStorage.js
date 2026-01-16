const getReadBookList = () => {
    const readBooks = localStorage.getItem('read-books');
    if (readBooks) {
        const readBooksParsed = JSON.parse(readBooks);
        return readBooksParsed;
    }
    else {
        return [];
    } 
}

const setReadBookList = id => {
    const readBooksList = getReadBookList();
    if (readBooksList.includes(id)) {
         console.log(id, 'is already added.')
    }
    else {
        readBooksList.push(id);
         const readBooksStr = JSON.stringify(readBooksList);
         localStorage.setItem('read-books', readBooksStr)
    }
}

const getWishBooksList = () => {
    const wishBooks = localStorage.getItem('wish-books');
    if (wishBooks) {
        const wishBooksParsed = JSON.parse(wishBooks);
        return wishBooksParsed;
    }
    else {
        return [];
    }
}
const setWishBooksList = id => {
    const wishBookList = getWishBooksList();
    if (wishBookList.includes(id)){
        console.log(id, 'is already in the wish list.');
    }
    else{
        wishBookList.push(id);
        const wishBooksStr = JSON.stringify(wishBookList);
        localStorage.setItem('wish-books', wishBooksStr);
    }
}

export {setReadBookList, setWishBooksList, getReadBookList, getWishBooksList}