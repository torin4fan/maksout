'use strict';
(function () {
    function Maksout() {

        var _this = this;

        function createCollections() {
            var listNodes = document.body.getElementsByTagName("*");

            for (var i = 0; i < listNodes.length; i++) {
                if (listNodes[i].dataset !== undefined && listNodes[i].dataset.modal !== undefined) {
                    _this.collections.modal.push(listNodes[i].dataset.modal);
                    listNodes[i].setAttribute('id', listNodes[i].dataset.modal + "Modal");
                } else if (listNodes[i].dataset !== undefined && listNodes[i].dataset.text !== undefined) {
                    _this.collections.text.push(listNodes[i].dataset.text);
                    listNodes[i].setAttribute('id', listNodes[i].dataset.text + "Text");
                }
            }
        }

        function events() {

            _this.collections.modal.forEach(function (item, i, arr) {
                var oneModal = document.getElementById(item + "Modal");
                var oneText = document.getElementById(item + "Text");

                oneModal.addEventListener('keyup', function () {
                    oneText.innerHTML = oneModal.value;
                });
            });
        }


        this.collections = {
            modal: [],
            text: []
        };

        this.applybind = function (data) {
            console.log(data);
            createCollections();
            events();
        };

        this.observable = function (data) {

            function result(newValue) {
                if(newValue) result.value = newValue;
                return result.value;
            }

            result.subscribe = function (personFunction) {
                personFunction(result.value);
            };

            result.value = data || null;

            return result;
        }
    }

    Object.prototype.mk = new Maksout();
})();






