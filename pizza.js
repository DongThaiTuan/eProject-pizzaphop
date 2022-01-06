//khoi tao đường liên kết tới trang 
var app = angular.module("myApp", ["ngRoute"]);

app.config(function ($routeProvider) {
    $routeProvider
//         // .when("/", {
//         //     templateUrl: "home.html"
//         // })
        // .when("/!", {
        //     templateUrl: "menu.html"
        // })
        
        .when("/Cart", {
            templateUrl: "cart.html"
        });  
});


// Start: JSON Code / truyền data từ JSON file
app.run(function ($rootScope, $http) {

    $http.get("menu.json").then(function (response) {
        $rootScope.menu = response.data.menu;
        console.log($rootScope.menu);
    });

    //tạo chức năng tìm kiếm tên menu
    app.controller('myCTR', function ($scope) {
        $scope.name = reponse.data.menu;
    });

    $rootScope.cart = [];
    $rootScope.total = 0;
});


//khởi tạo chức năng thêm món hàng vào trang order
app.controller("myMenu", function ($scope, $rootScope) {
    $scope.addCart = function (id) {
        var item = $rootScope.menu[id];

        for (var i = 0; i < $rootScope.cart.length; ++i) {
            if ($rootScope.cart[i].id == id) {
                $rootScope.cart[i].qty++;
                $rootScope.total += $rootScope.cart[i].price
                return;
            }
        }


        var newEle = {
            "id": id,
            "name": item.name,
            "price": item.price,
            "qty": 1
        }
        $rootScope.total += item.price
        $rootScope.cart.push(newEle);
        console.log($rootScope.cart)
    }
});

//khoi tạo nút deleter
app.controller("myCTR", function ($scope, $rootScope) {

    $scope.remove = function (index) {
        if (confirm('See You Again?')) {
            $rootScope.total -= $rootScope.cart[index].price*$rootScope.cart[index].qty;
            $scope.cart.splice(index, 1)
        }
    }
    //khoi tạo nút Buy mua hàng
    $scope.Buy = function () {
        if ($rootScope.cart.length > 0) {
            $scope.isShow = true;
        }
        else {
            $scope.isShow = false;
        }
    }

    $scope.thank = function () {
        alert("Thanks for your order !");
        $scope.isShow = false;
        $rootScope.total = 0
        $rootScope.cart = [];
    }
});
//khởi tạo dữ liệu trang about us
document.getElementById("form-contact").onsubmit = function (e) {
    e.preventDefault();

    var name = document.getElementById("name").value.trim();
    var mail = document.getElementById("mail").value.trim();
    var messege = document.getElementById("messege").value.trim();

    var a = [];
    a.push(`Your Information !!!`);
    a.push(`................`);
    a.push(`Your Name: ${name}`);
    a.push(`Email: ${mail}`);
    a.push(`Messenge: ${messege}`)
    a.push(`................`);
    a.push(`Thanks for your respond. We will reply you soon.`);
    alert(a.join("\n"));
}
