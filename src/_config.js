var config = {};

config.mongoURI = {
  test: 'mongodb://localhost/first-mean-app-testing',
  development: 'mongodb://localhost/first-mean-app',
  production: process.env.MONGODB_URI
};

//
//config.SALT_WORK_FACTOR = {
//  test: 10,
//  development: 10,
//  production: 12
//};


config.SALT_WORK_FACTOR = 10;

config.TOKEN_SECRET = '\xc5\x9f\x8b ,\xe4\xe9\xcd>\xf9O\xba:^\xd8%\xe0\xed\x15\xf8r\\)\xe1S\xf6\xd6"\xc1\xce!I\xc9F (\xd9c\\o\xe97\x1d\x1fU\xfb\x0c\x8e\x90n\xe0\xcdln7\x85\x94?\xb7[';



module.exports = config;