import React from 'react';
import './login.css';
export default function Login() {
	
	return (
		<div class="login-container">
		<div class="login-screen">
		<div class="login-screen__content">
			<form class="login">
				<div class="login__field">
					<i class="login__icon fas fa-user"></i>
					<input type="text" class="login__input" placeholder="User name" />
				</div>
				<div class="login__field">
					<i class="login__icon fas fa-lock"></i>
					<input type="password" class="login__input" placeholder="Password" />
				</div>
				<button class="button login__submit">
					<span class="button__text">Log In Now</span>
					<i class="button__icon fas fa-chevron-right"></i>
				</button>
			</form>
			<div class="social-login">
				<h3>log in via</h3>
				<div class="social-icons">
					<a href="#" class="social-login__icon fab fa-instagram"></a>
					<a href="#" class="social-login__icon fab fa-facebook"></a>
					<a href="#" class="social-login__icon fab fa-twitter"></a>
				</div>
			</div>
		</div>
		<div class="login-screen__background">
			<span class="login-screen_backgroundshape login-screenbackground_shape4"></span>
			<span class="login-screen_backgroundshape login-screenbackground_shape3"></span>		
			<span class="login-screen_backgroundshape login-screenbackground_shape2"></span>
			<span class="login-screen_backgroundshape login-screenbackground_shape1"></span>
		</div>		
	</div>
</div>
  )
}
