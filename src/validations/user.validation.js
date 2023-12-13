const Joi = require('joi');
const { password, objectId } = require('./custom.validation');

const getUsers = {
  query: Joi.object().keys({
    name: Joi.string(),
    role: Joi.string(),
    sortBy: Joi.string(),
    limit: Joi.number().integer(),
    page: Joi.number().integer(),
  }),
};

const getUser = {
  params: Joi.object().keys({
    userId: Joi.string().custom(objectId),
  }),
};

const updateUser = {
  params: Joi.object().keys({
    userId: Joi.required().custom(objectId),
  }),
  body: Joi.object()
    .keys({
      email: Joi.string().max(100).required().email(),
      password: Joi.string().max(50).required().custom(password),
      first_name: Joi.string().max(100).required(),
      last_name: Joi.string().max(100).required(),
      phone: Joi.string().max(16).required(),
      birthday: Joi.date().iso().required(),
    })
    .min(1),
};

const deleteUser = {
  params: Joi.object().keys({
    userId: Joi.string().custom(objectId),
  }),
};

module.exports = {
  getUsers,
  getUser,
  updateUser,
  deleteUser,
};
