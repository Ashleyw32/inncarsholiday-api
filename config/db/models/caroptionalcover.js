const globalObj = require("../global/global-import");
const sequelize = globalObj.sequelize;
const Sequelize = globalObj.Sequelize;
const globalOptions = globalObj.SequelizeGlobalOptions;

const CarOptionalCover = sequelize.define("CarOptionalCover", {
    Id: {
        type: Sequelize.BIGINT,
        primaryKey: true,
        autoIncrement: true
    },
    CarRegistrationId: {
        type: Sequelize.BIGINT,
        allowNull: false
    },
    OptionalCoverId: {
        type: Sequelize.BIGINT,
        allowNull: false
    },
    IsActive: {
        type: Sequelize.BOOLEAN,
        allowNull: true
    },
    CreatedOn: {
        type: Sequelize.DATE,
        allowNull: true
    },
    UpdatedOn: {
        type: Sequelize.DATE,
        allowNull: true
    }
}, globalOptions);

module.exports = CarOptionalCover;
