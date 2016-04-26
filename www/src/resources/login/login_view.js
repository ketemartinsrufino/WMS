Br = Br || {};
Br.WMS = Br.WMS || {};

Br.WMS.LoginView  = {

    fillUsers : function () {
        var success = function(users) {

            var userName = document.querySelector('.login-container select.username');
            userName.innerHTML = '';

            if(users) {
                for (var i in users) {
                    var option = document.createElement('option');
                    option.value = users[i].id;
                    option.innerHTML = users[i].username;
                    userName.appendChild(option);
                }
            }

        };



    },

    login: function() {

    }

};