<html lang="en">

<head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css" />
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"></script>
    <title>Students</title>
</head>
<body>
    <h1>Student</h1>
    <h2>Total students: {{$total_student[0] -> total_student}}</h2>
    <h3>Total female students: {{$total_fem_student[0] -> total_fem}}</h2>
    <table class="table">
        <thead>
            <tr>
                <th>First name</th>
                <th>Last name</th>
                <th>Province</th>
            </tr>
        </thead>   
        <tbody>
            @foreach ($students as $s)
            <tr>
                <td>{{$s -> first_name}}</td>
                <td>{{$s -> last_name}}</td>
                <td>{{$s -> province}}</td>
            </tr>
            @endforeach
        </tbody> 
    </table>
</body>

</html>