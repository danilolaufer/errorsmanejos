export const compressString = (req, res) => {
    let string = `Hola Codersssssssssssssssssssssss`;
    for (let i = 0; i < 5e4; i++) {
        string += ` Hola Codessssssssssssssssss`; 
    }
    res.send(string);
};