const getDataFromLS = () => {
    const data = localStorage.getItem('wish-list');
    if (data) {
        const parsedData = JSON.parse(data);
        return parsedData;
    }
    else 
        return [];
}

const setDataToLS = id => {
    const wishList = getDataFromLS();
    
    if (wishList.includes(id)){
        console.log(id, "is already in wishlist.")
    }
    else{
        wishList.push(id);
        const wishListStr = JSON.stringify(wishList)
        localStorage.setItem('wish-list' , wishListStr);
    }
}

export {setDataToLS as setWishList};