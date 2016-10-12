describe('Login Service',function(){
  it('should get login success',
  inject(function(LoginService, $httpBackend) {

    $httpBackend.expect('POST', 'https://api.mydomain.com/login')
      .respond(200, "[{ success : 'true', id : 123 }]");

    LoginService.login('test@test.com', 'password')
      .then(function(data) {
        expect(data.success).toBeTruthy();
    });

  $httpBackend.flush();
});
});
