import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { forgotPassword } from '../redux/actions/authAction';

import { FormSubmit } from '../utils/types';

const ForgotPassword = () => {
	const [account, setAccount] = useState('');
	const dispatch = useDispatch();

	const handleSubmit = (e: FormSubmit) => {
		e.preventDefault();
		dispatch(forgotPassword(account));
	};

	return (
		<main className='my-4' style={{ maxWidth: '500px' }}>
			<h2>비밀번호를 잊으셨나요?</h2>

			<form className='form-group' onSubmit={handleSubmit}>
				<label htmlFor='account'>이메일 / 전화번호</label>

				<div className='d-flex align-items-center'>
					<input
						type='text'
						className='form-control'
						id='account'
						name='account'
						onChange={(e) => setAccount(e.target.value)}
					/>

					<button
						className='btn btn-primary mx-2 d-flex align-items-center'
						type='submit'
					>
						<i className='fas fa-paper-plane me-2' /> Send
					</button>
				</div>
			</form>
		</main>
	);
};

export default ForgotPassword;
