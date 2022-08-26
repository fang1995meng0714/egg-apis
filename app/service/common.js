const { Service } = require("egg");
const crypto = require('crypto'); 

class CommonService extends Service{
    async getUser(params) {
        const {app} = this;
        return await app.mysql.select("users", {
            where: {
                username: params.username
            }
        })
    }

    getMd5Data(data) {
	    return crypto.createHash('md5').update(data).digest('hex');
	}
}
module.exports = CommonService;