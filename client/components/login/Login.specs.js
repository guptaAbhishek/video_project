describe('Login Service',function(){
  it('should get login success',
  inject(function(LoginService, $httpBackend) {

    $httpBackend.expect('POST', 'http://localhost:3000/user/auth')
      .respond(200, "[{ success : 'true', id : 123 }]");

    LoginService.login('ali', 'password')
      .then(function(data) {
        expect(data.success).toBeTruthy();
    });

  $httpBackend.flush();
});
});
