
"use strict";

module.exports = function (sequelize, DataTypes) {

    var User = sequelize.define ("wmscf_users", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        login: {
            type: DataTypes.STRING,
            allowNull: false
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false
        },
        createdAt: {
            type: DataTypes.mssql.DATE,
            get      : function()  {
                var date = new Date(this.getDataValue('createdAt'));
                var month = date.getMonth();
                var day = date.getDate();
                var year = date.getFullYear();
                var hours = date.getHours();
                var min = date.getMinutes();
                var sec = date.getSeconds();

                // whatever format you need
                return new Date(year+'-'+month+'-'+day+' '+hours+':'+ min+':'+sec);
            }
        },
        updatedAt: {
            type: DataTypes.mssql.DATE,
            get      : function()  {
                var date = new Date(this.getDataValue('createdAt'));
                var month = date.getMonth();
                var day = date.getDate();
                var year = date.getFullYear();
                var hours = date.getHours();
                var min = date.getMinutes();
                var sec = date.getSeconds();

                // whatever format you need
                return new Date(year+'-'+month+'-'+day+' '+hours+':'+ min+':'+sec);
            }
        }

        }, {
        freezeTableName: true,
        classMethods: {
            associate: function (models) {

                //User.hasMany (models.subscribed_podcast, {
                //    foreignKey: 'user_id',
                //    onDelete:'CASCADE',
                //    hooks: true
                //});
                //
                //User.hasMany (models.shared_episodes, {
                //    foreignKey: 'user_id',
                //    onDelete:'CASCADE',
                //    hooks: true
                //});
                //
                //User.hasMany (models.pending_episodes, {
                //    foreignKey: 'user_id',
                //    onDelete:'CASCADE',
                //    hooks: true
                //});
                //
                //User.hasMany (models.favorited_episodes, {
                //    foreignKey: 'user_id',
                //    onDelete:'CASCADE',
                //    hooks: true
                //});
            }
        }
    });

    return User;
};