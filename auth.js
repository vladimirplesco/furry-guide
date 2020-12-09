function authenticate(login, password) {
	if (login === 'login' || password === 'password') {
		return 'You were logged!';
	} else {
		return 'login/password is incorrect';
	}
}
