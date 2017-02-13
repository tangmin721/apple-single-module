<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>登录页</title>
</head>
<body>
<a href="/index">系统首页</a>
${error}
<div>
    <form action="/login" method="post">
        <input type="text" name="username" value="${username}"/>
        <input type="password" name="password" value="${password}"/>
        <button type="submit">提交</button>
    </form>
</div>
</body>
</html>

