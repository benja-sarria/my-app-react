export const handleTop = (element) => {
    console.log(element);
    if (
        element.target.children[0].children[1].children[2].children[1]
            .children[3]
    ) {
        console.log("itemlist");
        const overlay =
            element.target.children[0].children[1].children[2].children[1]
                .children[3];
        overlay.style.top = `${window.scrollY}px`;
        console.dir(overlay);
    } else {
        const overlay =
            element.target.children[0].children[1].children[2].children[1]
                .children[1];
        overlay.style.top = `${window.scrollY}px`;
    }
};
