import GenderCheckbox from "./GenderCheckbox";

const Login = () => {
  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
      <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
        <h1 className="text-3xl font-semibold text-center text-gray-300">
          Sign Up
          <span className="text-blue-500"> ChatApp</span>
        </h1>
        <form>
					<div>
						<label className='label p-2'>
							<span className='text-base text-gray-300 label-text'>Full Name</span>
						</label>
						<input
							type='text'
							placeholder='Enter your name here'
							className='w-full input input-bordered h-10'
						/>
					</div>

					<div>
						<label className='label'>
							<span className='text-base text-gray-300 label-text'>Username</span>
						</label>
						<input
							type='text'
							placeholder='Enter your username here'
							className='w-full input input-bordered h-10'
						/>
					</div>
          <div>
						<label className='label'>
							<span className='text-base text-gray-300 label-text'>Password</span>
						</label>
						<input
							type='password'
							placeholder='Create a password'
							className='w-full input input-bordered h-10'
						/>
					</div>
          <div>
						<label className='label'>
							<span className='text-base text-gray-300 label-text'>Confirm Password</span>
						</label>
						<input
							type='password'
							placeholder='Confirm password'
							className='w-full input input-bordered h-10'
						/>
					</div>
          <GenderCheckbox/>
					<a href="#" className='text-sm text-gray-300  hover:underline hover:text-blue-600 mt-2 inline-block'>
						{"Don't"} have an account?
					</a>

					<div>
						<button className='btn btn-block btn-sm mt-2'>
							Sign Up
						</button>
					</div>
				</form>
      </div>
    </div>
  );
};

export default Login;

