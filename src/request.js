
const request = async (url) => {
    const response = await fetch(url)
    const res = await  response.json()
    return res

}
export default  request