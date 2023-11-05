

<?php
/*
just use a json file to store 
stuff on the server side,
send it to the client side when required

as well as the count, also in json file

so I have to in this file,

provide endpoints for:
    update_count - upon recieving request, adds 1 to count in JSON file
    get_count - upon recieving requests, sends JSON file for count
    update_handle_list - upon recieving request, adds handle info to JSON file
    get_handle_list - upon recieving requests, sends JSON file for handles
*/
$host = 'localhost:3306';
$user = 'daniel';
$pass = 'Me1tante1conan';
$dbname = 'hackathonProject2db';
$conn = mysqli_connect($host, $user, $pass, $dbname)
if ($!conn){
    die('Could not connect: '.mysqli_connect_error());
}
echo 'Connected successfully<br/>';
$sql = ''
if(mysqli_query($conn, $sql)){
    echo 'Record inserted succesfully';
}else{
    echo 'Could not insert record'.mysqli_error($conn)
}
mysqli_close($conn)
?>  