function loadRepos() {
	let user = document.getElementById('username').value;
	let ulRepos = document.getElementById('repos');
	//let button = document.querySelector('button');

	//button.addEventListener('click', loadRepos);

	fetch(`https://api.github.com/users/${user}/repos`) //от този url ще вадим информацията
		.then(function(response) {
			if(response.ok === false) {    //ако респонса не е true, хвърляме грешка, като взимаме статуса и текста на респонса
				throw new Error (`${response.status} ${response.statusText}`);
			}
			return response.json() //ако респонса е true, взимаме json на респонса
		})
		.then(function(data) {
			ulRepos.innerHTML = "";
			for(let repo of data) {
				ulRepos.innerHTML += `<li><a href = "${repo.html_url}">${repo.full_name}</a></li>`
			}
		})
		.then(function (error) {
			ulRepos.innerHTML = `${error.message}`;
		}) 

	

}