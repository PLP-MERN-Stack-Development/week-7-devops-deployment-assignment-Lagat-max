const request = require('supertest');
const app = require('./app'); // Assuming your server's main file is app.js

describe('Server Main Entry Point', () => {
	test('GET / should respond with status 200', async () => {
		const response = await request(app).get('/');
		expect(response.statusCode).toBe(200);
	});

	test('GET /api should respond with JSON', async () => {
		const response = await request(app).get('/api');
		expect(response.headers['content-type']).toEqual(expect.stringContaining('json'));
		expect(response.statusCode).toBe(200);
	});

	test('sample test: 2 + 2 = 4', () => {
		expect(2 + 2).toBe(4);
	});
});