function loadRepos() {
	let user = document.getElementById('username');
	let ulRepos = document.getElementById('repos');
	let button = document.querySelector('button');

	button.addEventListener('click', loadRepos);

	function loadRepos(event) {
		let url = `https://api.github.com/users/${user.value}`;
		let htppRequest = new XMLHttpRequest;
		htppRequest.addEventListener('readystatechange', function() {
			if(htppRequest.readyState === 4 && htppRequest.status === 200 ) {
				ulRepos.appendChild(htppRequest.responseText);
			}
		})
	}

}