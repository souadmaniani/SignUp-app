import React, { useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css"
import axios from 'axios'

const SignUp = () => {
    const [fullName, setfullName] = useState('')
    const [userName, setuserName] = useState('')
    const [email, setemail] = useState('')
    const [password, setpassword] = useState('')
    
	const changeFullName = (event)=> {
		setfullName(event.target.value)
	}
	const changeUsername = (event)=> {
		setuserName(event.target.value)
	}
	const changeEmail = (event)=> {
		setemail(event.target.value)
	}
	const changePassword = (event)=> {
		setpassword(event.target.value)
	}
	const Submit = (event) => {
		event.preventDefault()
		const data = {
			fullName: fullName,
			userName: userName,
			email: email,
			password: password
		}
		axios.post(`http://localhost:4000/api/v1/signup`, data)
		.then((res) => console.log(res))
		.catch((err) => console.log(err))
		setfullName('')
		setuserName('')
		setemail('')
		setpassword('')
	}

    return (
        <div className="container">
			<form onSubmit={Submit}>
				<input
					type="text"
					className="form-control form-group"
					placeholder="Enter fullName"
					onChange= {changeFullName}
					value= {fullName}
				/>

				<input
					type="text"
					className="form-control form-group"
					placeholder="Enter username"
					onChange= {changeUsername}
					value= {userName}
				/>

				<input
					type="email"
					className="form-control form-group"
					placeholder="Enter email"
					onChange= {changeEmail}
					value= {email}
				/>
			<input
				type="password"
				className="form-control form-group"
				placeholder="Enter password"
				onChange= {changePassword}
				value= {password}
			/>
			<input type="submit" className="btn btn-danger btn-block" value="Submit"/>
		</form>
	</div>
    )
  }

  export default SignUp