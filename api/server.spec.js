const server = require('./server.js');
const request = require('supertest');

describe('server testing', () => {
  test('should be in the testing environemnt', () => {
    expect(process.env.DB_ENV).toBe('testing');
  })

  describe('GET Call', () => {
    it('should return 200 status code', async () => {
      const res = await request(server).get('/');
      // console.log(res);
      expect(res.status).toBe(200);
    });

    it('should be jsont type', async () => {
      const res = await request(server).get('/');
      expect(res.type).toBe('application/json')
    });

    it('should return correct api data', async () => {
      const res = await request(server).get('/');
      expect(res.body).toEqual({api: 'ready to become best hunter'});
    });
  });
});
