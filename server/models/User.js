'use strict';
module.exports=(sequelize,DataTypes)=>{
const User=sequelize.define(
    'User',{
        username: DataTypes.STRING,
        password: DataTypes.STRING
    }
);
User.associate=function(models){
    User.hasMany(models.List, {
        foreignKey: 'userid'
    })
}
return User;
}

