const UserModel = require("../models/user");

exports.createUser = async (req, res) => {
    try {
        const user =  UserModel(req.body);
        const result = await user.save();
        res.status(201).send(result);
    } catch (err) {
        res.status(500).send({
            message: err.message,
        });
    }
};

exports.getUser = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await UserModel.findOne({ $and: [{ email: email }, { password: password }] });
        res.status(200).send(user);
    } catch (err) {
        res.status(404).send({
            message: err.message,
        });
    }
}