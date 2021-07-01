/**
 * Function that queries an string or an array of strings on an object array
 * @param {string} value Search input
 * @param {Array<any>} data Data to be queried
 * @param {string | Array<string>} props Properties by which the data will be filtered
 * @returns {any} Array containing results
 */
 export const _filter = (value: string, data: any, props: string | string[]): Array<any> | void => {
    if(data[0] === undefined) return;
    const query: string = value.toLowerCase();
    let newArray: Array<any> = [];
    // eslint-disable-next-line
    data.filter((e: any) => {
        if(typeof(props) === 'string') return e[props].toLowerCase().includes(query);
        props.forEach((prop: string) => {
            if(String(e[prop]).toLowerCase().includes(query)) newArray = data.filter((e: any) => String(e[prop]).toLowerCase().includes(query));
        });
    });
    return newArray;
}