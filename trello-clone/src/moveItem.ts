export const moveItem = <T>(array: T[], from: number, to: number) => {
    // Firstly ensure the to number is positive
    const startIndex = to < 0 ? array.length + to : to
    // extract the item of interest out of the list
    // splice removes items from the array. It will start removing from the "from"
    // number, and will remove 1 item. We then must pick the first item in the resulting
    // array, hence this line:
    const item = array.splice(from, 1)[0]
    // Place that item into the new location in the list.
    // From the third argument onwards, you can simply add items to the array -- here we
    // add one item, but I could keep going. You add to the location specified by the first argument
    array.splice(to, 0, item)
    // return the array
    return array
}