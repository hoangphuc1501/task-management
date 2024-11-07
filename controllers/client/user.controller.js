const User = require("../../models/user.model");
const md5 = require("md5")
const generateHelper = require("../../helpers/generate.helper");
module.exports.register = async (req, res) => {
    const user = req.body

    const existUser = await User.findOne({
        email: user.email,
        deleted: false
    })
    if(existUser){
        res.json({
            code: "error",
            message: "Email đã tồn tại!"
        });
        return;
    }
    const dataUser = {
        fullName: user.fullName,
        email: user.email,
        password: md5(user.password),
        token: generateHelper.generateRandomString(30),
        status: "active"
    }
    const newsUser = new User(dataUser);
    await newsUser.save();


    res.json({
        code: "success",
        message: "Đăng ký thành công!",
        token: newsUser.token
    })
}