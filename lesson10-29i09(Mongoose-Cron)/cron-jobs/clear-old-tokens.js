const { Op } = require('sequelize');
const dayjs = require('dayjs');

const { oAuthService } = require('../services');

module.exports = async () => {
    await oAuthService.deleteByParams({
        createAt: {
            [Op.lte]: dayjs().subtract(30, 'day').format()
        }
    })
}
