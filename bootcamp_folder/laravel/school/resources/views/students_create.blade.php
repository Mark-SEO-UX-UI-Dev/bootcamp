<html lang="en">
 
<head>
    @include("layouts/head");
     <title>Create Student</title>
</head>
<body>
    <h1>Create Student</h1>
    <form action="/subjects" method="POST">
        @csrf
        <label>Name: </label>
        <input type="text" name="subj_name" placeholder="ex. Intro to Programming"/><br>
        <label>Department: </label>
        <select name="department">
            <option value="computer">Computer</option>
            <option value="mathematics">Mathematics</option>
            <option value="science">Science</option>
            <option value="social_science">Social Science</option>
            <option value="history">History</option>
            <option value="mapeh">MAPEH</option>
            <option value="filipino">Filipino</option>
            <option value="english">English</option>
        </select>
        <input type="submit" />
    </form>
</body>

</html>