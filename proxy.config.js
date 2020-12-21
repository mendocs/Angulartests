const proxy = [
	{
	  context: '/api',
	  //target: 'https://localhost:5001',
	  target: 'https://testeef.azurewebsites.net',
	  pathRewrite: {'^/api' : ''},
	  secure: false,
     logLevel: "debug",
     changeOrigin: true
	}
  ];
  module.exports = proxy;

  //http://127.0.0.1:4200/forms/driven
