document.addEventListener('DOMContentLoaded', function () {
    var form = document.getElementById('registerForm');

    form.addEventListener('submit', function (event) {
        // 获取表单字段
        var username = document.getElementById('username').value.trim();
        var email = document.getElementById('email').value.trim();
        var password = document.getElementById('password').value;
        var phone = document.getElementById('phone').value.trim();

        // 验证用户名
        if (username === '') {
            alert('用户名不能为空！');
            event.preventDefault();
            return false;
        }

        // 验证邮箱
        if (email === '') {
            alert('邮箱不能为空！');
            event.preventDefault();
            return false;
        }
        var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            alert('请输入有效的邮箱地址！');
            event.preventDefault();
            return false;
        }

        // 验证密码
        if (password === '') {
            alert('密码不能为空！');
            event.preventDefault();
            return false;
        }
        if (password.length < 6) {
            alert('密码长度不能少于6位！');
            event.preventDefault();
            return false;
        }

        // 验证收货电话（如果填写了）
        if (phone !== '') {
            var phoneRegex = /^1[3-9]\d{9}$/;
            if (!phoneRegex.test(phone)) {
                alert('请输入有效的手机号码！');
                event.preventDefault();
                return false;
            }
        }

        // 全部验证通过
        alert('注册信息提交成功！');
        // 演示时阻止默认提交，实际项目中可提交到服务器
        event.preventDefault();
    });
});
