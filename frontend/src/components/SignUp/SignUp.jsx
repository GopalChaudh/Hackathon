import React from 'react';
import './signup.css';
export default function SignUp() {
  return (
<div class="signup-container">
	<div class="signup-screen">
		<div class="signup-screen__content">
			<form class="signup">
				<div class="signup__field">
					<i class="signup__icon fas fa-user"></i>
					<input type="text" class="signup__input" placeholder="User name" />
				</div>
				<div class="signup__field">
					<i class="signup__icon fas fa-user"></i>
					<input type="text" class="signup__input" placeholder="Email" />
				</div>
				<div class="signup__field">
					<i class="signup__icon fas fa-lock"></i>
					<input type="password" class="signup__input" placeholder="Password" />
				</div>
				<button class="button signup__submit">
					<span class="button__text">Signup In Now</span>
					<i class="button__icon fas fa-chevron-right"></i>
				</button>				
			</form>
			<div class="social-signup">
				<h3>Signup in via</h3>
				<div class="social-icons">
					<a href="#" class="social-signup__icon fab fa-instagram"></a>
					<a href="#" class="social-signup__icon fab fa-facebook"></a>
					<a href="#" class="social-signup__icon fab fa-twitter"></a>
				</div>
			</div>
		</div>
		<div class="signup-screen__background">
			<span class="signup-screen_backgroundshape signup-screenbackground_shape4"></span>
			<span class="signup-screen_backgroundshape signup-screenbackground_shape3"></span>		
			<span class="signup-screen_backgroundshape signup-screenbackground_shape2"></span>
			<span class="signup-screen_backgroundshape signup-screenbackground_shape1"></span>
		</div>		
	</div>
</div>
  )
}
