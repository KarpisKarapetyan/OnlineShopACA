module.exports = (req,res,next)=>{
    res.reader('Content-Range', "adminPanel")
}