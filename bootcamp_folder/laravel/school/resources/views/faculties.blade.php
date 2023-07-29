<html lang="en">

<head>
    @include("layouts/head")
    <title>Faculties</title>
</head>
<body>
    <img src="https://external-preview.redd.it/p9_LBMMn22djOrg9XGS2wIcQh2zRyBELz6zhmSUZUSg.jpg?auto=webp&s=6ae3d505c2f1ff1b15122036003fee77b283615e" alt="International State College of the Philippines Logo" class="img-fluid" height="400px">
    <h1>Faculties List</h1>
    <table class="table">
        <thead>
            <tr>
                <th>Name</th>
                <th>Department</th>
                <th>Faculty ID</th>
            </tr>
        </thead>
        <tbody>
            @foreach($teachers as $t)
            <tr>
                <td>{{ $t->last_name }}, {{ $t->first_name }}</td>
                <td>{{ $t->department }}</td>
                <td>{{ $t->faculty_id }}</td>
            </tr>
            @endforeach
        </tbody>
    </table>

    <h1>Faculty Data</h1>

    <h2>Departments</h2>
    <table class="table">
        <thead>
            <tr>
                <th>Department</th>
                <th>Total Faculty</th>
            </tr>
        </thead>
        <tbody>
            @foreach($departments as $d)
            <tr>
                <td>{{ $d->department }}</td>
                <td>{{ $d->total_faculty }}</td>
            </tr>
            @endforeach
        </tbody>
    </table>

    <h2>Promotions</h2>
    <table class="table">
        <thead>
            <tr>
                <th>Name</th>
                <th>Academe Points</th>
            </tr>
        </thead>
        <tbody>
            @foreach($promotions as $p)
            <tr>
                <td>{{ $p->last_name }}, {{ $p->first_name }}</td>
                <td>{{ $p->academe_points }}</td>
            </tr>
            @endforeach
        </tbody>
    </table>
    @include("layouts\footer")
</body>

</html>