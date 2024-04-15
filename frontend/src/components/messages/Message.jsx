const Message = ({ message }) => {

	return (
		<div className={`chat chat-end`}>
			<div className='chat-image avatar'>
				<div className='w-10 rounded-full'>
					<img alt='Tailwind CSS chat bubble component' src="https://cdn0.iconfinder.com/data/icons/communication-line-10/24/account_profile_user_contact_person_avatar_placeholder-512.png" />
				</div>
			</div>
			<div className={`chat-bubble text-white bg-blue-500 pb-2`}>Hello</div>
			<div className='chat-footer opacity-50 text-xs text-black flex gap-1 items-center'>12:24:36</div>
		</div>
	);
};
export default Message;