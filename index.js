console.log('startedd');
const user = getUser(1, (user)=>{
    console.log('user info in callback', user);
    const userRepos= getGitRepos(user.gitRepoUserName, (repos)=>{
        console.log('user repos',repos);
    });
});
// console.log('User Info', user);
function getUser(id,callback) {
    setTimeout(() => {
        console.log('Fetching information from database');
        callback({ id: id,name: "Parag", gitRepoUserName: 'ParagGit' })
    }, 2000)
}

function getGitRepos(userName, callback){
    setTimeout(()=>{
        callback(['repo1','repo2'])
    },2000)
}