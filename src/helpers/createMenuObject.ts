type menuOptions = '' | 'dog' | 'cat' | 'fish' | 'all';

export const createMenuObject = (activeMenu: menuOptions) => {
    let returnObjetct = {
        dog: false,
        cat: false,
        fish: false,
        all: false,
    };
    
    if(activeMenu !== '') {
        returnObjetct[activeMenu] = true;
    }

    return returnObjetct;
}